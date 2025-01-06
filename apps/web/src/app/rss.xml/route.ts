import { NextResponse } from 'next/server'
import RSS from "@/lib/rss";
import { getBlogPosts } from '@/lib/db/v1/post';
import { getPortfolioPosts } from '@/lib/db/v1/portfolio';
import config from '@/config';

const { title, description, author } = config;

export async function GET() {
  const feed = new RSS({
    title: title,
    description: description,
    site_url: "https://www.1chooo.com",
    feed_url: `https://www.1chooo.com/rss.xml`,
    language: 'en-US',
    image_url: `https://www.1chooo.com/og`
  })

  let posts = await getBlogPosts();

  for (const post of posts) {
    let {
      title,
      publishedAt,
      summary,
    } = post.metadata;

    feed.item({
      title,
      url: `https://www.1chooo.com/post/${post.slug}`,
      publishedAt,
      description: summary,
      author: author
    })
  }

  let projects = await getPortfolioPosts();

  for (const project of projects) {
    let {
      title,
      publishedAt,
      summary,
    } = project.metadata;

    feed.item({
      title,
      url: `https://www.1chooo.com/portfolio/${project.slug}`,
      publishedAt,
      description: summary,
      author: author
    })
  }

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
