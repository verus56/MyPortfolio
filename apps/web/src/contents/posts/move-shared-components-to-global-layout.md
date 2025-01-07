---
title: "Improve Next.js Performance: Move Shared Components to Global Layout"
category: Project
publishedAt: 2024-08-20
summary: Through Next.js's Global Layout, reduce the redundant loading of components to improve web performance.
tags: 
  - React
  - Typescript
  - Next.js
  - Software Development
  - Software Engineering
  - Website Development
banner: /images/banner/posts/move-shared-components-to-global-layout.webp
alt: "Improve Next.js Performance: Move Shared Components to Global Layout"
---

> Through Next.js's Global Layout, reduce the redundant loading of components to improve web performance.

Today, I’m excited to share some front-end development techniques, as I continue working to add new features and pay off technical debt for my website 😢, [1chooo.com](http://www.tmrdata.tech). As part of my ongoing efforts, I’ve noticed that each page on my site utilizes a shared NavBar for navigation and a SideBar that provides access to my personal information. However, in my previous implementations, these components were duplicated across every page, meaning that every time a user navigated to a new page, the same information was reloaded. This redundant loading often led to issues—particularly with images failing to load during periods of poor network connectivity.

In this post, I’ll walk through the improvements I’ve made to address these problems, ensuring more efficient rendering and a smoother user experience.

![Improve Next.js Performance: Move Shared Components to Global Layout by Hugo](/images/banner/posts/move-shared-components-to-global-layout.webp)


Since I am currently using [Next.js](https://nextjs.org/) as my front-end framework alongside [React](https://react.dev/) to develop the page components, I’ve made some observations about the project structure within Next.js (using my own [project](https://github.com/1chooo/1chooo.com) as an example):

```ts
...
├── app/
│   ├── portfolio/
│   │   └── page.tsx    // Portfolio
│   ├── page.tsx        // Home
│   └── layout.tsx
└── components/
```

For those curious about why I chose [Next.js](https://nextjs.org/), feel free to check out one of my earlier posts—[Updating an Outdated Create React App (CRA) to Support TypeScript 5.x](/blog/goodbye-react-create-app)—where I explain my decision in greater detail. 

In this article, I'll delve into how the project structure in Next.js enhances the efficiency of my development process.

The page routing in Next.js (App Router) is defined through the files located in the `app/` directory. These files also dictate which components are loaded on each page. Additionally, you'll notice the presence of a `layout.tsx` file in the `app/` directory. This file serves as the Global Layout, where shared components—like headers or sidebars—are placed, functioning similarly to the traditional `index.html` in older web projects. This is where I began making optimizations to improve performance and reduce redundancy.

Let’s take a closer look at the structure of my pages, using the `about` and `portfolio` pages as examples:

**`app/page.tsx` (About Page):**

```tsx
const About = () => {
  const pathname = usePathname();

  return (
    <main>
      <SideBar />
      <div className="main-content">
        <NavBar />
        <article
          className={`about ${pathname === '/' ? 'active' : ''}`}
          data-page="about"
        >
          <Header title="About Hugo 👨🏻‍💻" />
          <AboutText />
          <GitHubStats />
          <TechStack />
          <LifeStyles />
        </article>
      </div>
    </main>
  );
}
```

**`app/portfolio/page.tsx` (Portfolio Page):**

```tsx
const Portfolio = () => {
  const pathname = usePathname();

  useEffect(() => {
    initializeCustomSelect(filterItemsByCategory);
    document.title = "Portfolio - Hugo ChunHo Lin (1chooo) | Open Source Enthusiast";
  }, []);

  return (
    <main>
      <SideBar />
      <div className="main-content">
        <NavBar />
        <article
          className={`portfolio ${pathname === '/portfolio' ? 'active' : ''}`}
          data-page="portfolio"
        >
          <Header title="Hugo's Portfolio" />
          <Projects />
        </article>
      </div>
    </main>
  );
}
```

In both cases, components such as `SideBar` and `NavBar` are repeated, leading to redundancy. This is precisely why I began leveraging the `layout.tsx` file to refactor and consolidate these shared components, ensuring they load only once across all pages, thereby improving the overall efficiency of my site.

I had been repeating both the `NavBar` and `SideBar` components across multiple pages, which led to redundant code and unnecessary reloading. To address this, I decided to pass the `<article>` tag as a prop to the layout, avoiding repeated loading and eliminating the pitfalls of copy-paste programming. Let's take a look at how I refactored this structure:

### Step 1: Creating a New `PageContent` Component

I designed a new `PageContent` component to structure the elements of each page. This component allows me to set the document title, load specific CSS files, and more:

```tsx
import React, { useEffect } from 'react';
import Header from '@/components/header';

const PageContent: React.FC<{
  documentTitle: string;
  title: string;
  children: React.ReactNode;
  page?: string;
  pathName?: string;
}> = ({ documentTitle, title, children, page, pathName }) => {

  // Handle edge case where 'About' page is at the root ("/") and doesn't have "/about" path.
  const isRootPage = pathName === '/' && page === 'about';

  if (isRootPage) {
    documentTitle = "Hugo ChunHo Lin (1chooo) | Open Source Enthusiast";
  }

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  return (
    <article
      className={`${page} ${isRootPage || (pathName === `/${page}`) ? 'active' : ''}`}
      data-page={isRootPage ? '' : page}
    >
      <Header title={title} />
      {children}
    </article>
  );
};
```

For the `About` page, which resides at the root (`/`) without an `/about` path, I added a condition to handle this exception. This ensures that the "About" page displays correctly without any path issues.

### Step 2: Moving Repeated Components to `layout.tsx`

Next, I moved the common components like `NavBar` and `SideBar` into `layout.tsx`, where they will load once for the entire application:

```diff
  <body>
    <Hello />
+   <main>
+     <SideBar />
+     <div className="main-content">
+       <NavBar />
+       {children}
+     </div>
+   </main>
  </body>
```

### Step 3: Refactoring the `About` and `Portfolio` Pages

With the `PageContent` component in place and shared components moved to the layout, I refactored the `About` and `Portfolio` pages to utilize this new structure:

**`app/page.tsx` (About Page):**

```tsx
const About = () => {
  const pathname = usePathname();

  return (
    <PageContent
      documentTitle=''
      title={abouts.header}
      page="about"
      pathName={pathname}
    >
      <AboutText />
      <GitHubStats />
      <TechStack />
      <LifeStyles />
    </PageContent>
  );
}
```

**`app/portfolio/page.tsx` (Portfolio Page):**

```tsx
const Portfolio = () => {
  const pathname = usePathname();

  useEffect(() => {
    initializeCustomSelect(filterItemsByCategory);
  }, []);

  return (
    <PageContent
      documentTitle='Portfolio'
      title="Hugo's Portfolio"
      page="portfolio"
      pathName={pathname}
    >
      <Projects />
    </PageContent>
  );
}
```

### Final Thoughts

With this refactor, I've successfully moved the `NavBar` and `SideBar` into `layout.tsx`, ensuring they only load once across all pages. Additionally, the dynamic content for each page is now wrapped in the reusable `PageContent` component, reducing the need for repetitive code. If you’d like to explore the detailed changes, feel free to check out the [PR](https://github.com/1chooo/1chooo.com/pull/114).

Thank you all for following along as I continue to refine my front-end skills! For more technical details on my implementation, you can check out my website’s GitHub repository—[1chooo.com](https://github.com/1chooo/1chooo.com). Stay tuned for more updates!

