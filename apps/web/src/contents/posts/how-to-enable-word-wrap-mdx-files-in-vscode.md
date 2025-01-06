---
title: "How to Enable Word Wrap for MDX Files in VSCode"
publishedAt: '2024-09-15'
category: DevEnv
tags: 
  - VSCode
  - MDX
summary: "A quick guide on how to enable word wrap for MDX files in VSCode with just one simple configuration."
banner: /images/banner/posts/how-to-enable-word-wrap-mdx-files-in-vscode.webp
alt: "How to Enable Word Wrap for MDX Files in VSCode"
mathjax: false
---

Hey there 👋 This is Hugo. Recently, I've been putting significant effort into developing my personal website, [1chooo.com](https://1chooo.com). As a software engineer, I aim not only ***to write code*** but also ***to leave thorough documentation***. That's why I've been focusing not just on development but also on content creation, including blogs, user guides, and code walkthroughs. I started using [MDX](https://mdxjs.com/) files for writing my content, as they allow me to embed JSX components directly into markdown files—an excellent way to combine code snippets and interactive elements.

![How to Enable Word Wrap for MDX Files in VSCode by Hugo](/images/banner/posts/how-to-enable-word-wrap-mdx-files-in-vscode.webp)

Since [VSCode](https://code.visualstudio.com/) is my go-to editor, I often write content in markdown. However, when I switched to MDX files, I encountered an issue with word wrapping. By default, VSCode doesn't wrap words in MDX files, which makes it a bit frustrating to scroll horizontally while writing or reading. So, I decided to find a solution to enable word wrap for MDX files.

![Default MDX file in VSCode without word wrap enabled](/images/posts/how-to-enable-word-wrap-mdx-files-in-vscode/before.png)

### Word wrapping of single `.mdx` file

Here's a quick guide on how to do it:

1. First, open the command palette in VSCode. You can do this by pressing `Ctrl + Shift + P` on Windows or `Cmd + Shift + P` on macOS.
2. In the command palette, type "Toggle Word Wrap." You'll see an option called **View: Toggle Word Wrap**.
3. Click on that option to enable word wrapping in the editor.

![Type "Toggle Word Wrap" in the command palette](/images/posts/how-to-enable-word-wrap-mdx-files-in-vscode/toogle-word-wrap.png)

### Word wrapping for all `.mdx` files

If you want to enable word wrap for all MDX files by default, you can do so by adding a configuration in your `settings.json` file. Here's how you can do it:

1. Open the command palette in VSCode by pressing `Ctrl + Shift + P` on Windows or `Cmd + Shift + P` on macOS.
2. Add the following configuration to your `settings.json` file:

```json
{
  "[mdx]": {
    "editor.wordWrap": "on"
  }
}
```

The above configuration tells VSCode to enable word wrap for all files with the `.mdx` extension. Also, we can set the particular column number to wrap the text by using the below configuration.

```json
{
  "[mdx]": {
    "editor.wordWrap": "wordWrapColumn",
    "editor.wordWrapColumn": 100
  }
}
```

After doing these, the content in your MDX files will wrap, making it much easier to read without the need for horizontal scrolling.

And there you go! You've successfully enabled word wrapping for MDX files in VSCode. Now you can focus on writing content without the distraction of awkward scrolling.

![MDX file in VSCode with word wrap enabled](/images/posts/how-to-enable-word-wrap-mdx-files-in-vscode/after.png)

Stay tuned for more tips on how to make the most out of VSCode!

### References

- [Word wrap mdx files in VS Code](https://www.codewithshripal.com/tips/vs-code/how-to-word-wrap-mdx-files)
