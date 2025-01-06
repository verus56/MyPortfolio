---
title: "How to Add a Gradient Effect to Text for Eye-Catching Web Design"
category: Project
publishedAt: 2024-11-13
tags: 
  - Front End Development
  - ChatGPT
  - Portfolio
  - Web Development
  - Web Design
summary: "In this article, I will take my website-1chooo.com as an example to show you how to create a smooth and customizable linear gradient effect for text on your website. Also, we will share the problem we encountered to achieve this effect and how we solved with ChatGPT. (including the prompt we used, the response we got, and the code we implemented) So, let's dive in!"
banner: /images/banner/posts/how-to-add-linear-gradient-effect-to-text.webp
alt: "How to Add a Gradient Effect to Text for Eye-Catching Web Design"
---

Hey there 👋! This is Hugo. In today's digital landscape, text styling trends have evolved to include vibrant and eye-catching effects, and one popular choice is gradient text. You may have noticed this modern design choice on websites and SaaS platforms, like [Next.js](https://nextjs.org/), where gradient effects add a dynamic, polished feel. Adding a gradient to text can give your website an extra edge, enhancing its visual appeal and helping to draw attention to key elements.

In this article, I will take my website-[1chooo.com](https://1chooo.com) as an example to show you how to create a smooth and customizable linear gradient effect for text on your website. Also, we will share the problem we encountered to achieve this effect and how we solved with ChatGPT. (including the prompt we used, the response we got, and the code we implemented) So, let's dive in!

![How to Add a Gradient Effect to Text for Eye-Catching Web Design by Hugo](/images/banner/posts/how-to-add-linear-gradient-effect-to-text.webp)

First, I visit the [Next.js](https://nextjs.org/) official website to get some inspiration. After opening the developer tools (F12), I found that the gradient effect is applied to the text in the hero section.

![Linear Gradient Effect in Next.js Site](/images/posts/how-to-add-linear-gradient-effect-to-text/linear-gradient-in-next-js-site.png)

The gradient effect is a linear gradient from left to right, with a color stop at the middle. The gradient effect is applied to the text by setting `background: linear-gradient(180deg, #fff, #adadad);` and `background-clip: text;` properties. Also the `text-fill-color` property is set to `transparent`.

Therefore, we just only need to add some `CSS` code to achieve this effect. Here is the code snippet:

```diff
.info-content .name {
+  background: linear-gradient(180deg, #fff, #adadad);
+  background-clip: text;
+  -webkit-background-clip: text;
+  -webkit-text-fill-color: transparent;
}
```

Then, it works perfectly on my website. Here is the demo:

![The Linear Gradient Effect on 1chooo.com](/images/posts/how-to-add-linear-gradient-effect-to-text/after.png)

We can see that the gradient effect is applied to my name, **Chun-Ho (Hugo) Lin.**

However, we encountered a problem when we want to select the text. The selected text is not visible.

![The Problem of Selecting Text](/images/posts/how-to-add-linear-gradient-effect-to-text/selection-not-work.png)

**So, we asked ChatGPT for help. Here is the prompt we used:**

```css
::selection {
  background: var(--orange-yellow-crayola);
  color: var(--smoky-black);
}
```

I have the upper style, but if I set the text background in linear-gradient, once I select the text all of the text not showed, it should be yellow background and black text, how do I fix it

```css
.info-content .name {
  color: var(--white-2);
  font-size: var(--fs-3);
  font-weight: var(--fw-600);
  letter-spacing: -0.25px;
  margin-bottom: 10px;
  background: linear-gradient(180deg, #fff, #adadad);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

**Then, we got the response from ChatGPT:**

To achieve the desired selection styling on text with a gradient background, we can add a workaround since the linear gradient with `background-clip: text` does not play well with `::selection`. Here are two options to make sure the text is readable with the selected background and color:

### Solution 1: Apply a Transparent Gradient Overlay
You can add a transparent text fill color on selection, which allows the `::selection` background and text color to apply correctly. Here’s how:

```css
/* Selection styling */
::selection {
  background: var(--orange-yellow-crayola);
  color: var(--smoky-black);
}

.info-content .name {
  color: var(--white-2);
  font-size: var(--fs-3);
  font-weight: var(--fw-600);
  letter-spacing: -0.25px;
  margin-bottom: 10px;
  background: linear-gradient(180deg, #fff, #adadad);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Selection override for .name */
.info-content .name::selection {
  -webkit-text-fill-color: var(--smoky-black); /* Applies black color to text */
  color: var(--smoky-black); /* Fallback for non-WebKit browsers */
  background: var(--orange-yellow-crayola);
}
```

This code snippet overrides the selection for `.name` and allows you to control the color without affecting the gradient. The `-webkit-text-fill-color` set to black ensures that selected text is readable.

### Solution 2: Use a Separate Shadow for Selection
Another option is to add a subtle `text-shadow` to simulate the gradient color but still allow a solid color on selection.

```css
.info-content .name {
  font-size: var(--fs-3);
  font-weight: var(--fw-600);
  letter-spacing: -0.25px;
  margin-bottom: 10px;
  color: var(--white-2);
  background: linear-gradient(180deg, #fff, #adadad);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 0px 3px rgba(255, 255, 255, 0.4);
}

/* Override selection */
.info-content .name::selection {
  background: var(--orange-yellow-crayola);
  -webkit-text-fill-color: var(--smoky-black);
  color: var(--smoky-black);
}
```

The shadow here will add a bit of color and make the gradient effect visible, while also ensuring readability during text selection.

I chose the first solution to solve this problem. And below is the segment of the code I implemented:

```diff
+ .info-content .name::selection {
+   -webkit-text-fill-color: var(--smoky-black);
+   color: var(--smoky-black);
+   background: var(--orange-yellow-crayola);
+ }
```

After implementing the code, the problem was solved. Here is the demo:

![Final Result of the Linear Gradient Effect on 1chooo.com](/images/posts/how-to-add-linear-gradient-effect-to-text/final.png)

Now, the text is readable when selected. The gradient effect is applied to my name, Chun-Ho (Hugo) Lin, and the text is visible when selected. We value the credits to ChatGPT for helping us solve this problem. If you want to add a gradient effect to text on your website, you can follow the steps above. Hope this article helps you create a smooth and customizable linear gradient effect for text on your website. 🚀 Follow me to catch up the latest tips for developing website!!!
