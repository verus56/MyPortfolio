import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { unstable_noStore as noStore } from 'next/cache';
import MarkdownRenderer from '@/components/markdown/markdown-renderer';
import PageHeader from '@/components/page-header';
import Comments from '@/components/comments';
import { getBlogPosts } from "@/lib/db/v1/post";
import config from '@/config';
import { LuFacebook, LuTwitter } from 'react-icons/lu';

import "@/styles/blog/blog-text.css"

const { giscusConfig } = config;

type tParams = Promise<{ slug: string }>;

export async function generateMetadata(
  { params }: { params: tParams }): Promise<Metadata | undefined> {
  const { slug } = await params;
  let posts = await getBlogPosts();
  let post = posts.find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    banner,
  } = post.metadata;
  let ogImage = banner
    ? `ttp://www.tmrdata.tech${banner}`
    : `ttp://www.tmrdata.tech/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      siteName: 'HAMZAOUI Thameur V56 | Open Source Enthusiast',
      description,
      type: 'article',
      publishedTime,
      url: `ttp://www.tmrdata.tech/post/${post.slug}`,
      locale: 'en_US',
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(date: string) {
  noStore();
  let currentDate = new Date().getTime();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  let daysLater: number = 0;
  if (targetDate > currentDate) {
    daysLater = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  }

  if (daysLater > 365) {
    return `${fullDate} (${daysLater}d later)`;
  } else if (daysLater > 30) {
    const weeksAgo = Math.floor(daysLater / 7)
    return `${fullDate} (${weeksAgo}w later)`;
  } else if (daysLater > 7) {
    const monthsAgo = Math.floor(daysLater / 30)
    return `${fullDate} (${monthsAgo}mo later)`;
  } else if (daysAgo < 1) {
    return 'Today';
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7)
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30)
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365)
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}

export default async function Post(props: { params: tParams }) {
  const { slug } = await props.params;
  let posts = await getBlogPosts();
  let post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const shareUrl = `https://www.1chooo.com/post/${post.slug}`
  const shareText = `Check out this post:`

  return (
    <div>
      <article>
        <section className="blog-text">
          <header>
            <h1 className="relative pb-[7px] mb-[30px] font-semibold text-3xl text-light-gray after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[3px] after:rounded-sm  after:bg-text-gradient-yellow sm:pb-[15px] sm:after:w-[40px] sm:after:h-[5px] md:pb-[20px]">
              {"Hugo's Blog"}
            </h1>
          </header>
          <h1 className="title font-semibold text-4xl text-white-2 tracking-tighter max-w-[650px]">
            <MarkdownRenderer content={post.metadata.title} />
          </h1>
          <div className="flex items-center justify-between mt-4 text-sm w-full text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center space-x-2">
              <span>{formatDate(post.metadata.publishedAt)}</span>
              <span className="w-1 h-1 bg-current rounded-full" aria-hidden="true"></span>
              <span>{post.metadata.category}</span>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-yellow-crayola transition-colors"
                aria-label="Share on Facebook"
              >
                <LuFacebook className="w-5 h-5" />
              </Link>
              <Link
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-yellow-crayola transition-colors"
                aria-label="Share on Twitter"
              >
                <LuTwitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="separator"></div>
          <div className="flex justify-center">
            <div className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[80%]">
              <MarkdownRenderer content={post.content} />
            </div>
          </div>
        </section>
      </article>

      <article style={{ marginTop: '1rem' }}>
        <section className="blog-text">
          <PageHeader header="Comments" />
          <Comments giscusConfig={giscusConfig} />
        </section>
      </article>
    </div>
  );
}
