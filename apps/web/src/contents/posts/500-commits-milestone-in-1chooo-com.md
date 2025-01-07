---
title: "Built a 500 commits GitHub Repository: 10 essential steps you can't miss"
category: Project
publishedAt: 2024-08-28
summary: A 500 commits Side Project is born, let's dive into how Hugo did it!
tags: 
  - React
  - Typescript
banner: /images/banner/posts/500-commits-milestone-in-1chooo-com.webp
alt: Built a 500 commits GitHub Repository: 10 essential steps you can't miss
---

> A 500 commits Side Project is born, let's dive into how Hugo did it!

Hey everyone! I'm Hugo, and I’ve just graduated from National Central University. As I embark on my gap year, I now have ample time to focus on maintaining my side projects, writing articles, and pursuing personal growth. Today, I want to share a significant milestone with you all—my personal website, [1chooo.com](http://www.tmrdata.tech), has reached [500 commits](https://github.com/1chooo/1chooo.com/commit/b01a0417642b3679ec87427f0c783bcaafe5e7c1) on its [GitHub repository](https://github.com/1chooo/1chooo.com) 🥳.

While 500 commits might seem trivial for large-scale projects, it’s a major accomplishment for a personal side project like mine. Keeping this project alive has been a challenge—one that requires continuously introducing new features, setting new goals, and tackling technical debt. In this post, I want to reflect on the efforts that went into reaching this milestone, share the invaluable lessons I’ve learned along the way, and discuss some of the challenges I encountered.

![Built a 500 commits GitHub Repository: 10 essential steps you can't miss by Hugo](/images/banner/posts/500-commits-milestone-in-1chooo-com.webp)


Before diving into today’s discussion, let me give you a quick overview of my project's current state. The idea behind this project started with a simple desire—I wanted to create a personal website. Although I had attempted several iterations in the past, none of them quite met my expectations. So, I turned to GitHub, searching through keywords like "portfolio" and "personal website" to find a design that matched my vision. It felt a bit like taking a shortcut, but that’s the beauty of open source, right?

Eventually, I came across a personal website template called [vcard-personal-portfolio](https://codewithsadee.github.io/vcard-personal-portfolio/), which had all the features I wanted. I owe a huge thanks to the original creator, [Sadee](https://github.com/codewithsadee), for generously sharing their work, allowing me to build and modify on top of it.

My website consists of five main sections, each serving a specific purpose:

### About

This page introduces me to visitors and aims to create a strong first impression.

![1chooo.com/about](/images/posts/500-commits-milestone-in-1chooo-com/about.png)

### Resume

This section showcases my professional background, including my education, work experience, and competition history.

![1chooo.com/resume](/images/posts/500-commits-milestone-in-1chooo-com/resume.png)

### Portfolio

Here, I display my past projects, ranging from web development and apps to data analysis.

![1chooo.com/portfolio](/images/posts/500-commits-milestone-in-1chooo-com/portfolio.png)

### Blog

This is where I share my writings, including technical articles and coding experiences. Essentially, I write whatever I feel like sharing.

![1chooo.com/blog](/images/posts/500-commits-milestone-in-1chooo-com/blog.png)

### Contact

A dedicated space for people to reach out to me with any questions or discussions.

![1chooo.com/contact](/images/posts/500-commits-milestone-in-1chooo-com/contact.png)


After giving you a quick tour of my website, let’s dive into the main topic. Before we get into the lessons and takeaways, I'd like to present some data that highlights the key features and changes I've implemented. Here are the top ten features I’ve introduced to the project:

1. **Code Refactor**: I refactored the original codebase, transitioning from plain HTML, CSS, and JS to using the [React](https://react.dev/) framework for better scalability and maintainability. The website is now deployed via [Vercel](https://vercel.com/).
2. **Componentization**: I extracted shared components to prevent "Copy-Paste Programming" and promote reusable code across the project.
3. **Readable Commit Messages**: I followed the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for structured, easy-to-read commit messages.
4. **Issue Tracking**: I utilized GitHub Issues to keep track of changes and incorporated Milestones to monitor project progress.
5. **Versioning with Tags**: I added tags to manage different releases, making version control more transparent and organized.
6. **Google Analytics**: Integrated Google Analytics to track user behavior and gain insights into site traffic and interaction.
7. **GitHub Dependency Bot**: Introduced the GitHub Dependency Bot to monitor and update dependencies, ensuring the project remains secure and up to date.
8. **Next.js Migration**: Upgraded the aging Create-React-App to [Next.js](https://nextjs.org/) to leverage its modern features and improved performance.
9. **Enhanced Documentation**: Improved the README and documentation to facilitate easier onboarding for future developers and contributors.
10. **Component Unit Tests**: Implemented unit tests for each component to ensure everything functions correctly and maintain project stability.

These changes not only improved the overall quality of my website but also helped me adopt best practices for modern web development.

![1chooo.com — 500 commits achieving 🥳](/images/posts/500-commits-milestone-in-1chooo-com/500-commit-achieving.png)

### Code Refactoring

In the original project by [Sadee](https://github.com/codewithsadee), the website was designed as a single-page application, meaning all the content was written within the same HTML file. Page transitions were achieved by manipulating sections within that file. While this approach allowed for quick adjustments by directly modifying the HTML, I soon encountered some significant limitations. Whenever I needed to make changes, I had to sift through thousands of lines of code to find the specific section I wanted to adjust. Moreover, since all the content was loaded at once, the entire page, including hidden sections, would be fetched on every visit, which negatively impacted performance. Additionally, the lack of a dedicated router made the code increasingly difficult to manage as the project grew. I realized that without a full rewrite, future expansions—like adding new features or pages—would be severely constrained, leaving me in a passive, reactive position.

At this point, I considered my options among the major front-end frameworks: [React](https://react.dev/), [Vue](https://vuejs.org/), and [Laravel](https://laravel.com/). I opted for [React](https://react.dev/) in combination with [TypeScript](https://www.typescriptlang.org/) since I had previous experience with it and was confident I could rely on the wealth of community resources available for React development. This decision marked the beginning of a large-scale refactoring journey.

The first step was to thoroughly understand the original codebase, which involved untangling the interwoven HTML, CSS, and JavaScript. I then rewrote it using React components, breaking down the structure into manageable, reusable pieces. This was no small task—some sections took weeks to fully refactor. However, transitioning the project to React allowed me to break up the monolithic HTML file into distinct components, each responsible for a specific section of the website. By integrating React Router, I implemented dynamic page transitions, ensuring only the necessary components were loaded when navigating between pages. 

This refactor not only made the code more maintainable and easier to navigate but also provided me with the flexibility to extend the project in the future. The use of React components enabled cleaner separation of concerns, and I was no longer limited by the design choices of the original author.


### Shared Components

Refactoring was only part of the challenge, as I was stepping into front-end development for the first time. Initially, my React components were mostly just HTML code returned within `render` functions. However, during a self-review of my code, I noticed many opportunities for optimization. A significant issue was that several components could be made reusable, sharing similar styles and logic. In essence, I had fallen into a pattern of Copy-Paste Programming, where the same code was repeated in multiple places. 

Through this process, I learned to harness the power of the `map()` function in React. By passing in parameters, I could dynamically render components without duplicating code. This dramatically reduced redundancy and made the codebase cleaner and more maintainable. If you're interested in a more detailed breakdown of how to implement `map()` for elegance in a React TypeScript project, check out my article 👉🏻 [How to Make Your React TypeScript Project More Elegant with `map()`](blog/make-your-react-more-elegant-with-map).

### Commit Messages

As a frequent user of GitHub, paying attention to details has become part of my daily routine. One area where I became particularly meticulous is with commit messages. It’s common to see vague messages like "Update," "Test," or "Upload," which offer no insight into what changes were made. Such commit messages can be unfriendly to future developers (or even your future self), making it difficult to track changes or understand the project's evolution.

To address this, I began following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. This standard improves the readability and organization of commit messages, ensuring that each message clearly reflects the changes made. For a deeper dive into writing clean, informative commit messages, feel free to explore my article 👉🏻 [How to Write Beautiful Git Commit Messages](https://medium.com/@1chooo/git-commit-message-%E5%88%B0%E5%BA%95%E6%80%8E%E9%BA%BC%E5%AF%AB%E6%89%8D%E5%84%AA%E7%BE%8E-5b789157b549).

![Well Commit Message in 1chooo.com!!!](/images/posts/500-commits-milestone-in-1chooo-com/well-commits.png)

### Issues & Milestones

As my project evolved, the number of commits grew, and I realized that some commits lacked proper documentation. To manage changes more efficiently, I started using **Issues** as a way to keep track of the features and modifications I wanted to implement. This approach aligns with Agile practices, allowing me to clearly outline tasks, estimate the time needed, and identify the required technologies (though I must admit, there were still times I pushed directly to the `main` branch! 😅). 

Later on, I discovered **GitHub Milestones** while submitting PRs to the Microsoft VSCode Docs. Milestones helped me group related tasks under a specific goal, usually organized by time periods like "August 2024," making it easier to manage my project effectively. By associating issues with milestones, I could better track progress and stay organized on what I wanted to accomplish each month.

![1chooo.com — August, 2024 Milestones](/images/posts/500-commits-milestone-in-1chooo-com/milestone.png)

### Tagging & Releases

With each development iteration, I followed Agile principles to release new features and improvements quickly. After completing significant features or milestones, I released new versions of my site, using version numbers in the format of `vx.x.x` (e.g., major features, minor updates, and bug fixes). This versioning practice allowed me to track what changes were made in each release and the new functionalities added in that particular version.

![1chooo.com — Tagging and Releases](/images/posts/500-commits-milestone-in-1chooo-com/tag.png)

### Google Analytics

Sometimes, I wondered if anyone was actually visiting my website or if I was the only one constantly checking it. To satisfy my curiosity, I integrated **Google Analytics** to track user behavior on the site. Interestingly, I discovered visitors from the United States and even from India! This gave me a better understanding of my audience and helped me improve the site's content based on user interaction.

![1chooo.com — GA](/images/posts/500-commits-milestone-in-1chooo-com/ga.png)

### GitHub Dependency Bot

Midway through development, I realized I could incorporate the **GitHub Dependency Bot** feature. At first, I just thought it was cool when I saw it in other projects, but then I learned that it's a built-in GitHub functionality. The bot helps track dependencies within the project, alerting me when certain packages need updating or if there are any security vulnerabilities. It regularly checks for updates, keeping the project up-to-date and reducing the risk of using outdated packages.

![GitHub Dependency Bot](/images/posts/500-commits-milestone-in-1chooo-com/dependabot.png)

### Next.js

The decision to upgrade to **Next.js** was largely influenced by the **GitHub Dependency Bot**, which highlighted a deployment issue when upgrading **TypeScript**. You can read the full story in this post 👉🏻 [讓老舊的 Create React App (CRA) 支援 TypeScript 5.x 吧！](/blog/goodbye-react-create-app). This led to a major overhaul of my project, converting the entire **React Router** setup to **Next.js's AppRouter**. It was a significant learning curve, considering I was still getting the hang of React, but I managed to pull through! Initially, I thought it would take a month or two, but after an intense weekend of coding, the entire migration was complete!

### README & Documentation

Having a project on **GitHub** carries a certain desire to appear polished and professional. I dedicated considerable time using **Canva** to design a custom cover and writing a comprehensive **Contributing Guideline**. My hope was to encourage collaboration and embody the open-source spirit, allowing everyone to grow together. Additionally, I took the time to write proper documentation, including a **Code Walkthrough** and the challenges I faced during development. This will help future developers get up to speed quickly, and it also saves me from having to decipher my own code a month later!

![1chooo.com/README](/images/posts/500-commits-milestone-in-1chooo-com/readme.png)

### Unit Test

The final feature I'd like to highlight is **Unit Testing**. I started using **[Jest](https://jestjs.io/)** to write unit tests, and this was my first time doing so. It took quite some time to learn, and although my test coverage isn't very high at the moment, I’m working hard to improve it. With the major overhaul from **React** to **Next.js**, a lot of the tests needed to be rewritten, which has been a challenge. However, increasing the coverage is one of my short-term goals, and I’m determined to get it done soon.

![Unit Test in 1chooo.com](/images/posts/500-commits-milestone-in-1chooo-com/tests.png)

### Conclusion

Reaching the milestone of **500 commits** is significant, yet I still have numerous tasks I wish to accomplish. For instance, I'm currently working on finalizing the functionality of the Blog page. This is a task that comes with its own technical debt, as I initially lacked a design for rendering content in Markdown. Adding this feature requires me to enhance the flexibility of my components, which is an area I'm actively focusing on. Additionally, I'm addressing the issue of pagination, specifically the need for "Previous" and "Next" buttons to facilitate seamless navigation between articles. The "Contact Me" feature for sending emails is also pending, and I'm deliberating whether to connect it directly to a Lambda Function or to create a robust API for email authentication—this is another point I'm contemplating.

Throughout this project, I’ve profoundly experienced the myths surrounding software development. There are moments when the process feels cumbersome, especially when attempting to implement new features. I often find myself constrained by previous coding decisions, which necessitates considerable time spent contemplating adjustments or seeking better practices. Furthermore, I wrestle with the decision of whether to add certain functionalities—while implementing them would consume significant time, they are functionalities that are usable in their current state. This internal conflict highlights the challenge of striving for perfection; achieving it requires more time, yet there is a desire to deliver the best possible outcome without compromising my standards. This balancing act has been one of the most valuable lessons I’ve learned during this project.

Moving forward, I will continue to update and maintain this project, as it represents my personal brand and serves as a testament to my technical pursuits. It encapsulates my commitment to excellence in technology, and I anticipate reaching more milestones of **500 commits** in the future. I invite you to follow my journey and share in the challenges I encounter and the solutions I devise.

Please feel free to click "Follow" to stay updated on my latest developments, and visit my GitHub repository—[1chooo.com](https://github.com/1chooo/1chooo.com)—to give it a star ⭐️ in support. Thank you all! Until next time! 👋🏻
