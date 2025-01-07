import { getBlogPosts } from '@/lib/db/v1/post';
import { getPortfolioPosts } from '@/lib/db/v1/portfolio';

/**
 * This function returns an array of objects with the URL and last modified date
 * @see https://github.com/leerob/site/blob/1129b6d81937cef493edb060f87e6f2ac9f335ed/app/sitemap.ts
 * @returns [{ url: string, lastModified: string }]
 */
export default async function sitemap() {
  let blogs = await getBlogPosts();
  let blogMaps = blogs.map((post: {
    metadata: { publishedAt: string }; slug: string
  }) => ({
    url: `http://www.tmrdata.tech/post/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let portfolios = await getPortfolioPosts();
  let portfolioMaps = portfolios.map((post: { metadata: { publishedAt: string }; slug: string }) => ({
    url: `http://www.tmrdata.tech/portfolio/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = [
    '',
    '/resume',
    '/portfolio',
    '/post',
    '/gallery'
  ].map((route) => ({
    url: `http://www.tmrdata.tech${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogMaps, ...portfolioMaps];
}
