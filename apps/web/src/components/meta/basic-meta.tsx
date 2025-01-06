// import Head from "next/head";
// import type { Config } from "@/types/config";

// const config: Config = {
//   siteTitle: "Hugo ChunHo Lin (1chooo) | Open Source Enthusiast",
//   siteDescription: "I'm Hugo ChunHo Lin, a graduate with a Bachelor's degree from National Central University (NCU) 🐿️, driven by a sincere passion for Software Engineering 💻.",
//   siteKeywords: [
//     { keyword: "Hugo ChunHo Lin" },
//     { keyword: "1chooo" },
//     { keyword: "Software Engineering" },
//     { keyword: "Next.js" },
//     { keyword: "React" },
//   ],
//   baseURL: "https://1chooo.com",
//   postsPerPage: 10,
//   twitterAccount: "@your_twitter_account",
//   githubAccount: "your_github_account",
// };

// type BasicMetaProps = {
//   title?: string;
//   description?: string;
//   keywords?: string[];
//   author?: string;
//   url: string;
// };

// export default function BasicMeta({
//   title,
//   description,
//   keywords,
//   author,
//   url,
// }: BasicMetaProps) {
//   return (
//     <Head>
//       <title>
//         {title ? [title, config.siteTitle].join(" | ") : config.siteTitle}
//       </title>
//       <meta
//         name="description"
//         content={description ? description : config.siteDescription}
//       />
//       <meta
//         name="keywords"
//         content={
//           keywords
//             ? keywords.join(",")
//             : config.siteKeywords.map((it) => it.keyword).join(",")
//         }
//       />
//       {author ? <meta name="author" content={author} /> : null}
//       <link rel="canonical" href={config.baseURL + url} />
//     </Head>
//   );
// }

export {}
