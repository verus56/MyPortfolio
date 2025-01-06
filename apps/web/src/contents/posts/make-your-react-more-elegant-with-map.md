---
title: How to Make Your React TypeScript Project More Elegant with `map()`
category: Project
publishedAt: 2024-02-15
summary: With React TypeScript and `map()`, you can create a more elegant personal blog. In this article, I share how to use the `map()` method to handle dynamic rendering of blog post lists and show the thought process of implementing the modification suggestions provided by ChatGPT.
tags: 
- React
- Frontend
- map
- TypeScript
banner: /images/banner/posts/make-your-react-more-elegant-with-map.webp
alt: How to Make Your React TypeScript Project More Elegant with `map()`
---

> With React TypeScript and `map()`, you can create a more elegant personal blog. In this article, I share how to use the `map()` method to handle dynamic rendering of blog post lists and show the thought process of implementing the modification suggestions provided by ChatGPT.

![How to Make Your React TypeScript Project More Elegant with `map()` by Hugo](/images/banner/posts/make-your-react-more-elegant-with-map.webp)

Hey this is Hugo 👋 In the winter break of 2024, I planned to update my resume and personal website. I found a Portfolio design [codewithsadee/vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio) on GitHub that suited my current needs. I thought I could just replace the information with my own, but the template provided by the author did not have a design for more blog post browsing. All the web content is in the same `index.html`. If I fill the content about me, the loading time is too long. So I thought about turning each page into a route to handle it, but I thought I could play with ReactTS, so I started my blog makeover journey.

In this article, I share how I used React TypeScript and `map()` to create a more elegant personal blog. I will show you how to use the `map()` method to handle dynamic rendering of blog post lists and the thought process of implementing the modification suggestions provided by ChatGPT.


![The effect of dynamic rendering through map()](https://miro.medium.com/v2/format:webp/1*KkNkB-tsC-ktJ9d76GhKIA.png)

The original blog page was written like this:

```tsx
<ul className="blog-posts-list">
  <li className="blog-post-item  active"
    data-filter-item
    data-category="unboxing"
  >
    <a
      href="https://medium.com/@1chooo/%E5%BF%98%E6%8E%89-youtube-premium-%E9%80%99%E4%BA%9B%E7%84%A1%E5%BB%A3%E5%91%8A%E7%80%8F%E8%A6%BD%E5%99%A8%E8%AE%93%E4%BD%A0%E6%84%9B%E4%B8%8D%E9%87%8B%E6%89%8B-901f7d15a59a"
      target="_blank"
      rel="noopener noreferrer"
    >
      <figure className="blog-banner-box">
        <img
          src={noAdsImage}
          alt="No ads"
          loading="lazy"
        />
      </figure>
      <div className="blog-content">
        <div className="blog-meta">
          <p className="blog-category">Unboxing</p>
          <span className="dot"></span>
          <time dateTime="2022-02-23">Feb 11, 2024</time>
        </div>
        <h3 className="h3 blog-item-title">
          忘掉 YouTube Premium！這些無廣告瀏覽器讓你愛不釋手！
        </h3>
        <p className="blog-text">
          在這個廣告橫行的 YouTube 時代，享受影片卻不被廣告干擾的感覺真是太棒了！透過 Brave 瀏覽器，我終於找到了解脫的方法，而且完全不必花錢購買 Premium。讓我們一起換個方式，享受無廣告的 YouTube 世界吧！
        </p>
      </div>
    </a>
  </li>

  <li
    className="blog-post-item  active"
    data-filter-item
    data-category="devops"
  >
    <a
      href="https://medium.com/@1chooo/%E8%B8%8F%E5%85%A5-git-%E7%9A%84%E4%B8%96%E7%95%8C-%E4%BD%BF%E7%94%A8-ssh-%E8%88%87-github-%E9%80%A3%E7%B7%9A-7324b01349dd"
      target="_blank"
      rel="noopener noreferrer"
    >
      <figure className="blog-banner-box">
        <img
          src={gitTipsImage}
          alt="Git Tips Image"
          loading="lazy"
        />
      </figure>
      <div className="blog-content">
        <div className="blog-meta">
          <p className="blog-category">DevOps</p>
          <span className="dot"></span>
          <time dateTime="2022-02-23">Fab 23, 2022</time>
        </div>
        <h3 className="h3 blog-item-title">
          踏入 Git 的世界：使用 ssh 與 GitHub 連線 👨🏻‍💻
        </h3>
        <p className="blog-text">
          兼顧安全及隱私，利用 ssh key，push 到 GitHub 再也不需要打密碼了🔑
        </p>
      </div>
    </a>
  </li>
  {/* Rest of the blog post item */}
</ul>
```

Due to the above code, we can see that if we need to add more articles, our articles will become very long. So I asked ChatGPT: "This file is too long, do you have any suggestions for rewriting? Because the current functionality is interrelated, I am using `.tsx`."

Then ChatGPT helped me find the repeated code in these `blog-post-item`s and suggested that I could handle it through `map()`. So I started my rewrite journey.

First, I created an interface to modularize the repeated information. Because each `<li></li>` contains this repeated content, including title, category, imageUrl, date, content, link, I first built the type of Post:

```tsx
interface Post {
  title:    JSX.Element;
  category: string;
  imageUrl: string;
  date:     string;
  content:  JSX.Element;
  link:     string;
  alt:      string;
}
```

Later, I created an array `postsData` based on the newly created interface Post to store the data that Post will use:

```tsx
const postsData: Post[] = [
  {
    title: (
      <h3 className="h3 blog-item-title">
        如何透過 <code>map()</code> 讓你的 <code>React TypeScript</code> 專案更加優雅？
      </h3>
    ),
    category: 'Projects',
    imageUrl: reactMappingTipsImage,
    date: 'Fab 15, 2024',
    content: (
      <p className="blog-text">
        透過 <code>React TypeScript</code> 和 <code>map()</code>  方法打造更優雅的個人部落格。在這篇文章中，我分享了如何利用 <code>map()</code>  方法來處理部落格文章列表的動態渲染，並展示了 ChatGPT 提供的修改建議和實作過程中的思考。
      </p>
    ),
    link: 'https://medium.com/@1chooo/%E5%A6%82%E4%BD%95%E9%80%8F%E9%81%8E-map-%E8%AE%93%E4%BD%A0%E7%9A%84-react-typescript-%E5%B0%88%E6%A1%88%E6%9B%B4%E5%8A%A0%E5%84%AA%E9%9B%85-f1e5bdca1710',
    alt: 'How to Make Your React TypeScript Project More Elegant with `map()`'
  },
  {
    title: (
      <h3 className="h3 blog-item-title">
        忘掉 YouTube Premium！這些無廣告瀏覽器讓你愛不釋手！
      </h3>
    ),
    category: 'Unboxing',
    imageUrl: noAdsImage,
    date: 'Feb 11, 2024',
    content: (
      <p className="blog-text">
        在這個廣告橫行的 YouTube 時代，享受影片卻不被廣告干擾的感覺真是太棒了！透過 Brave 瀏覽器，我終於找到了解脫的方法，而且完全不必花錢購買 Premium。讓我們一起換個方式，享受無廣告的 YouTube 世界吧！
      </p>
    ),
    link: 'https://medium.com/@1chooo/%E5%BF%98%E6%8E%89-youtube-premium-%E9%80%99%E4%BA%9B%E7%84%A1%E5%BB%A3%E5%91%8A%E7%80%8F%E8%A6%BD%E5%99%A8%E8%AE%93%E4%BD%A0%E6%84%9B%E4%B8%8D%E9%87%8B%E6%89%8B-901f7d15a59a',
    alt: '忘掉 YouTube Premium！這些無廣告瀏覽器讓你愛不釋手！',
  },
];
```

In this way, we can use `map()` to extract the data from `postsData` and simplify the repeated code:

```tsx
<ul className="blog-posts-list">
  {postsData.map((
    post: Post,
    index: number
  ) => (
    <li
      key={index}
      className={`blog-post-item active`}
      data-filter-item
      data-category={post.category.toLowerCase()}
    >
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure className="blog-banner-box">
          <img
            src={post.imageUrl}
            alt={post.alt}
            loading="lazy"
          />
        </figure>
        <div className="blog-content">
          <div className="blog-meta">
            <p className="blog-category">{post.category}</p>
            <span className="dot"></span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
          {post.title}
          {post.content}
        </div>
      </a>
    </li>
  ))}
</ul>
```

With this rewrite, we can add more articles through `postsData` without worrying about the code becoming very long. This rewriting method also makes our code cleaner and easier to maintain.

Finally, I would like to share my thoughts on the implementation I made this time. I originally wanted to directly return all the author's writing in ReactComponent, and successfully displayed it on the webpage. However, I found that if I need to add more article content, my Component code needs to add nearly thirty lines at a time, and these codes are all repetitive (doing the same thing). Fortunately, I asked ChatGPT for a Code Review, which suggested using `map()`, allowing me to get to know this framework better. Wish you all "Happy New Year and no BUGs!"

I hope you enjoyed this article and found it helpful. If you have any questions or suggestions, feel free to leave a comment below. You can also find me on [GitHub](https://github.com/1chooo) and You can also visit my [personal website](https://1chooo.com)

---

There are some updates: We have changed the new way to render the post lists and we successfully support the renderring of the post with only writing markdown files. Keep in touch with me and I will share more about this in the future.
