---
title: 'Solving the "Unknown rule @tailwind" Issue in VSCode'
publishedAt: '2024-10-27'
category: DevEnv
tags: 
  - VSCode
  - Tailwind
  - Unknown at rule
summary: "Although this message doesn't disrupt the functionality, it can be distracting. However, as Software Engineer, we can't let these smells distract us from our work. That's why I decided to investigate the issue and find a solution. Today, I'll share the steps I took to resolve the 'Unknown rule @tailwind' issue in VSCode."
banner: /images/banner/posts/unknown-at-rule-tailwind-in-vscode.png
alt: 'Solving the "Unknown rule @tailwind" Issue in VSCode'
mathjax: false
---

Hey there 👋, it's Hugo. Today, I'll walk you through a common issue I encountered while developing my portfolio website—one that you might also face when integrating [Tailwind CSS](https://tailwindcss.com) in a [VSCode](https://code.visualstudio.com/) environment. When I added Tailwind to my project, I was greeted by the following error message: `Unknown at rule @tailwind`

![Unknown Tailwind Error](/images/posts/unknown-at-rule-tailwind-in-vscode/unknown-tailwind-message.png)

Although this message doesn't disrupt the functionality, it can be distracting. However, as Software Engineer, we can't let these smells distract us from our work. That's why I decided to investigate the issue and find a solution. Today, I'll share the steps I took to resolve the "Unknown rule @tailwind" issue in VSCode.

![Solving the "Unknown rule @tailwind" Issue in VSCode by Hugo](/images/banner/posts/unknown-at-rule-tailwind-in-vscode.png)

## Understanding the Cause

Upon visiting the [Tailwind CSS documentation](https://tailwindcss.com/docs/editor-setup#syntax-support), I found the answer in the **Editor Setup** section. The documentation explains that Tailwind CSS relies on several custom CSS at-rules, including `@tailwind`, `@apply`, and `@config`. Unfortunately, many code editors don't recognize these rules by default, which can lead to warning or error messages.

> "Tailwind CSS uses a lot of custom CSS at-rules like `@tailwind`, `@apply`, and `@config`, and in many editors this can trigger warnings or errors where these rules aren't recognized."

To solve this, we need to make VSCode aware that these are valid Tailwind-specific rules.

## Solution: Install PostCSS Language Support

To address this, simply install the [`PostCSS Language Support`](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) extension for VSCode, which adds syntax support for Tailwind's custom rules.

### How to Install PostCSS Language Support

1. Open the extension marketplace in VSCode.
   - **Shortcut**: Press `Ctrl/Command + Shift + X`.
   - **Manual Navigation**: Click the Extensions icon on the left toolbar.

2. In the marketplace, search for "PostCSS Language Support."

![Search PostCSS Language Support](/images/posts/unknown-at-rule-tailwind-in-vscode/search-postcss-language-support.png)

3. Install the extension.

Once installed, you should see that the `@tailwind` rule is no longer flagged as an error, and any previous warning messages disappear.

![No More Tailwind Alert](/images/posts/unknown-at-rule-tailwind-in-vscode/no-tailwind-alert-message.png)

After above steps, you should no longer see the "Unknown at rule @tailwind" message in your VSCode editor. This simple solution will help you work more efficiently with Tailwind CSS in your projects. If you still want to catch up on more tips and tricks when working with VSCode, follow my blog for more helpful content.


## Additional Resources

For more details and to explore the Tailwind setup guide further, feel free to check out these resources:

- [VSCode Solution for "Unknown at rule @tailwind"](https://israynotarray.com/tailwindcss/20220405/1504568293/)
- [Tailwind CSS Documentation](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css)
- [Editor Setup for Syntax Support](https://tailwindcss.com/docs/editor-setup#intelli-sense-for-vs-code)
