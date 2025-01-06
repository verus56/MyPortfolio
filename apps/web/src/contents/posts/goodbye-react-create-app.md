---
title: Updating an Outdated Create React App (CRA) to Support TypeScript 5.x
category: Project
publishedAt: 2024-08-10
summary: Create React App (CRA) was officially deprecated by Facebook, and it's time to move on to other alternatives. However, we can still use CRA with TypeScript `5.x` by adding `overrides` to the `package.json`. Let's see how to do it!
tags: 
  - React
  - Typescript
banner: /images/banner/posts/goodbye-react-create-app.webp
alt: Updating an Outdated Create React App (CRA) to Support TypeScript 5.x
---

> Create React App (CRA) was officially deprecated by Facebook, and it's time to move on to other alternatives. However, we can still use CRA with TypeScript `5.x` by adding `overrides` to the `package.json`. Let's see how to do it!

During this past summer, I dedicated most of my time to developing my personal website, [1chooo.com](https://1chooo.com), addressing several technical debts that I had postponed due to time constraints. In the past, I primarily used [React](https://react.dev/) alongside [TypeScript](https://www.typescriptlang.org/) for development. However, recently, I encountered some issues, one of which is related to "[chore(deps): bump typescript from 4.9.5 to 5.5.4](https://github.com/1chooo/1chooo.com/pull/76)." The following error message was displayed:

```typescript
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: react-scripts@5.0.1
npm error Found: typescript@5.5.4
npm error node_modules/typescript
npm error   typescript@"^5.5.4" from the root project
npm error   peer typescript@">= 2.7" from fork-ts-checker-webpack-plugin@6.5.3
npm error   node_modules/fork-ts-checker-webpack-plugin
npm error     fork-ts-checker-webpack-plugin@"^6.5.0" from react-dev-utils@12.0.1
npm error     node_modules/react-dev-utils
npm error       react-dev-utils@"^12.0.1" from react-scripts@5.0.1
npm error       node_modules/react-scripts
npm error         react-scripts@"5.0.1" from the root project
npm error   1 more (tsutils)
npm error
npm error Could not resolve dependency:
npm error peerOptional typescript@"^3.2.1 || ^4" from react-scripts@5.0.1
npm error node_modules/react-scripts
npm error   react-scripts@"5.0.1" from the root project
```

Therefore, through this post, I aim to document the resolution process and provide the relevant contextual information. If your system requires the installation of [Node.js and npm](https://nodejs.org/), you can refer to my previous article — [How to Install Node.js & NPM on Mac](/blog/mac-install-nodejs-npm) — for installation instructions.

![Updating an Outdated Create React App (CRA) to Support TypeScript 5.x by Hugo](/images/banner/posts/goodbye-react-create-app.webp)

In the past, I used [`create-react-app` (CRA)](https://github.com/facebook/create-react-app) to set up my React projects. However, during this upgrade process, I discovered that CRA only supports up to [`v5.0.1`](https://github.com/facebook/create-react-app/releases/tag/v5.0.1). Looking at Facebook's GitHub repository, it's evident that CRA is no longer maintained, with its last update in 2022. Unsurprisingly, CRA does not support TypeScript `5.x`, only up to version `4.x`, which explains why I was unable to upgrade TypeScript to `5.x`.

![create-react-app v5.0.1](/images/posts/goodbye-react-create-app/create-react-app-v-5-0-1.png)

I then started searching online for the reasons why CRA is no longer maintained and whether there are any alternatives. First, I found that [React’s](https://react.dev/) official documentation no longer mentions `create-react-app` as a recommended way to set up a React project. Instead, it suggests using frameworks like [Next.js, Remix, Gatsby, Expo (for native apps), etc.](https://react.dev/learn/start-a-new-react-project). This shift could be one of the reasons CRA is no longer supported.

![Start a New React Project](/images/posts/goodbye-react-create-app/start-a-new-react-project.png)

Additionally, I found an insightful article, [Goodbye create-react-app](https://dev.to/ag2byte/create-react-app-is-officially-dead-h7o), which outlines some of the reasons behind CRA’s discontinuation. The article explains that CRA was officially abandoned by Facebook due to performance issues. Specifically, it’s too slow for current needs, especially during initialization, and it produces outdated warnings that have frustrated developers for quite some time. These problems are also difficult for beginners to resolve, making CRA an outdated choice.

I also came across an [issue](https://github.com/facebook/create-react-app/issues/12628) in the [`create-react-app`](https://github.com/facebook/create-react-app) repository, which not only highlights reasons to avoid using CRA but also suggests alternatives for creating new apps. At this point, it became clear that CRA is an outdated relic of a previous era, and it's time to move on.

However, as a software engineer, I still wanted to solve the immediate problem — after all, it's just a dependency update! Surely, there must be a workaround to keep using CRA while upgrading TypeScript to version `5.x`. Eventually, I found a pull request in the [`create-react-app`](https://github.com/facebook/create-react-app) repository — [(react-scripts) Support for TypeScript 5.x #13080](https://github.com/facebook/create-react-app/issues/13080) — that addresses the TypeScript upgrade issue and provides a solution. By simply adding the following [`overrides`](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides) to the `package.json`, the problem can be resolved:

```json
"dependencies": {
    "create-react-app": "^5.0.1",
    "typescript": "^5.5.4",
},
"overrides": {
    "typescript": "^5.5.4"
},
```

It's important to ensure that the version specified in `overrides` matches the TypeScript version in the dependencies to resolve the issue. For more information on using `overrides`, you can refer to the official [`package.json`](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides) documentation.

At this point, the TypeScript upgrade issue is successfully resolved. However, I see this as a temporary fix since CRA is no longer maintained. This has opened up a new path for me — migrating my React app to [Next.js](https://nextjs.org/), which not only addresses the lack of CRA support but also brings the benefits of Next.js. This is the new challenge I’ve set for myself.

In the future, I plan to continue documenting my progress as I integrate my React app into Next.js, hoping the migration goes smoothly (even though it looks like I'll need to rewrite a lot!). Stay tuned for more updates, and feel free to check out my current personal website — [1chooo.com](https://1chooo.com) — or view the code on GitHub — [1chooo/1chooo.com](https://github.com/1chooo/1chooo.com). I hope this post helps anyone who’s facing similar issues!
