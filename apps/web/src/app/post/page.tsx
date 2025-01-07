import { Suspense } from "react";
import Image from "next/image";
import Balancer from 'react-wrap-balancer'
import Loading from "@/components/loading";
import PageHeader from "@/components/page-header";
import FilterSelectBox from "@/components/filter/filter-select-box";
import FilterList from "@/components/filter/filter-list";
import MarkdownRenderer from "@/components/markdown/markdown-renderer";
import Pagination from "@/components/pagination";
import { ProgressBarLink } from "@/components/progress-bar";
import { POSTS_PER_PAGE } from "@/lib/constants";
import { getBlogPosts } from "@/lib/db/v1/post";
import config from "@/config";

const { title } = config;

export const metadata = {
  title: `Post | ${title}`,
  description: "Read my thoughts on software development, design, and more.",
};

type tParams = Promise<{ tag?: string; page?: string }>;

async function BlogPosts({ searchParams }: { searchParams: tParams }) {
  const { tag = "All", page = "1" } = await searchParams;
  let allBlogs = await getBlogPosts();
  const blogTags = [
    "All",
    ...Array.from(
      new Set(allBlogs.map((post) => post.metadata.category ?? ""))
    ),
  ];
  const selectedTag = tag;
  const currentPage = parseInt(page, 10);

  // Filter blogs based on the selected tag
  const filteredBlogs =
    selectedTag === "All"
      ? allBlogs
      : allBlogs.filter((post) => post.metadata.category === selectedTag);

  // Calculate total pages
  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);

  // Get blogs for current page
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <section className="blog-posts">
      <FilterList
        path="post"
        selectedTag={selectedTag}
        blogTags={blogTags}
      />
      <FilterSelectBox
        path="post"
        selectedTag={selectedTag}
        blogTags={blogTags}
      />
      <ul className="blog-posts-list">
        {paginatedBlogs.map((post) => (
          <li
            key={post.slug}
            className="blog-post-item active"
            data-category={post.metadata.category}
          >
            <ProgressBarLink
              href={`/post/${post.slug}`}
              rel="noopener noreferrer"
            >
              <figure className="blog-banner-box">
                <Image
                  src={post.metadata.banner}
                  alt={post.metadata.alt || "Blog post image"}
                  width={1600}
                  height={900}
                  priority={false}
                  placeholder="blur"
                  loading="eager"
                  blurDataURL=""
                />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">{post.metadata.category}</p>
                  <span className="dot"></span>
                  <time dateTime={post.metadata.publishedAt}>
                    {new Date(post.metadata.publishedAt).toLocaleDateString(
                      "en-us",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </time>
                </div>
                <h3 className="text-2xl text-white-2 font-semibold leading-[1.3] transition-all hover:text-orange-yellow-crayola">
                  <Balancer>
                    <MarkdownRenderer content={post.metadata.title} />
                  </Balancer>
                </h3>
                <MarkdownRenderer
                  className="text-light-gray text-s font-light leading-6 overflow-hidden line-clamp-2"
                  content={post.metadata.summary}
                />
              </div>
            </ProgressBarLink>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        selectedTag={selectedTag}
        basePath="/post"
      />
    </section>
  );
}

export default function Post({ searchParams }: { searchParams: tParams }) {
  return (
    <article>
      <PageHeader header="Thameur's Blog" />
      <Suspense fallback={<Loading />}>
        <BlogPosts searchParams={searchParams} />
      </Suspense>
    </article>
  );
}
