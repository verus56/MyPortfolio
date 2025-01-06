---
title: "Make Your Titles More Readable: React Wrap Balancer"
category: Project
publishedAt: 2024-11-25
summary: "React Wrap Balancer is a simple React Component that makes your titles more readable in different viewport sizes. It improves the wrapping to avoid situations like single word in the last line, makes the content more 'balanced'."
tags: 
  - React
  - Typescript
  - Next.js
  - Software Development
  - Software Engineering
  - Website Development
banner: /images/banner/posts/make-your-titles-more-readable-react-wrap-balancer.webp
alt: "Make Your Titles More Readable: React Wrap Balancer"
---

Hey there 👋! This is Hugo. My portfolio website-[1chooo.com](https://www.1chooo.com/) has come to [`v0.3`](https://github.com/1chooo/1chooo.com/releases/tag/v0.3.0) version and we finally support render markdown to the blog post. However, sometimes the wrapping of the words may not change as we expected. Today we are going to share a package to let our website more readable.

![Make Your Titles More Readable: React Wrap Balancer by Hugo](/images/banner/posts/make-your-titles-more-readable-react-wrap-balancer.webp)

> [React Wrap Balancer] is a simple React Component that makes your titles more readable in different viewport sizes. It improves the wrapping to avoid situations like single word in the last line, makes the content more "balanced": [^1]

[React Wrap Balancer]: https://react-wrap-balancer.vercel.app/

![Simple React Component That Makes Titles More Readable](https://github.com/shuding/react-wrap-balancer/raw/main/.github/demo.gif)

## Usage

We have to install the package first:

```bash
npm i react-wrap-balancer
```

Then we can use it in our project:

```tsx
import Balancer from 'react-wrap-balancer'

// ...

function Title() {
  return (
    <h1>
      <Balancer>My Awesome Title</Balancer>
    </h1>
  )
}
```

If we have multiple `<Balancer>` components used, we can wrap them with `<Provider>` to share the re-balance logic:

```tsx
import { Provider } from 'react-wrap-balancer'

// ...

function App() {
  return (
    <Provider>
      <MyApp/>
    </Provider>
  )
}
```

## Demo

We can see the difference between using and not using the package (applied to my portfolio website):

![The before and after of using React Wrap Balancer](/images/posts/make-your-titles-more-readable-react-wrap-balancer/demo-01.png)


![The before and after of using React Wrap Balancer](/images/posts/make-your-titles-more-readable-react-wrap-balancer/demo-02.png)

## Outro

This is a simple package that can make our content more readable. It is easy to use and can be applied to different projects. If you are interested in full documentation and use cases, please visit https://react-wrap-balancer.vercel.app.

See you in the next post!

[^1]: https://github.com/shuding/react-wrap-balancer
