/**
 * https://www.cloudflare.com/zh-tw/learning/bots/what-is-robots-txt/
 * https://www.cloudflare.com/robots.txt
 * https://github.com/vercel/vercel/blob/3e4223684609dbdb7d9a2b286294fe07941bf0d4/examples/hydrogen-2/app/routes/%5Brobots.txt%5D.tsx#
 * https://github.com/vercel/vercel/blob/3e4223684609dbdb7d9a2b286294fe07941bf0d4/packages/cli/test/dev/integration-2.test.ts#
 * https://github.com/vercel/vercel/blob/3e4223684609dbdb7d9a2b286294fe07941bf0d4/examples/hydrogen/src/routes/robots.txt.server.ts
 * @returns 
 */

const robotsTxtContent = `
#               ________
#    __,_,     |        |
#   [_|_/      |   OK   |
#    //        |________|
#  _//    __  /
# (_|)   |@@|
#  \\ \\__ \\--/ __
#   \\o__|----|  |   __
#       \\ }{ /\\ )_ / _\\
#       /\\__\\/ \\__O (__
#      (--/\\--)    \\__/
#      _)(  )(_
#     \`---''---\`
User-agent: *
Disallow:
`;




export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://1chooo.com/sitemap.xml',
    host: 'https://1chooo.com',
  };
}


/**
 * This API endpoint generates a robots.txt file. Use this to control
 * access to your resources from SEO crawlers.
 * Learn more: https://developers.google.com/search/docs/advanced/robots/create-robots-txt
 */

// import type {HydrogenRequest} from '@shopify/hydrogen';

// export async function api(request) {
//   const url = new URL(request.url);

//   return new Response(robotsTxtData({url: url.origin}), {
//     headers: {
//       'content-type': 'text/plain',
//       // Cache for 24 hours
//       'cache-control': `max-age=${60 * 60 * 24}`,
//     },
//   });
// }

// function robotsTxtData({url}: {url: string}) {
//   const sitemapUrl = url ? `${url}/sitemap.xml` : undefined;

//   return `
// User-agent: *
// Disallow: /admin
// Disallow: /cart
// Disallow: /orders
// Disallow: /checkouts/
// Disallow: /checkout
// Disallow: /carts
// Disallow: /account
// ${sitemapUrl ? `Sitemap: ${sitemapUrl}` : ''}

// # Google adsbot ignores robots.txt unless specifically named!
// User-agent: adsbot-google
// Disallow: /checkouts/
// Disallow: /checkout
// Disallow: /carts
// Disallow: /orders

// User-agent: Pinterest
// Crawl-delay: 1
// `.trim();
// }