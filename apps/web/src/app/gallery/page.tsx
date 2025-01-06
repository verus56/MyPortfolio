import type { Metadata } from "next";
import PageHeader from '@/components/page-header';
import config from '@/config';
import { BlurFadeDemo } from "@/components/magicui/blur-fade-demo";
import { AnimatedGradientTextDemo } from "@/components/magicui/animated-gradient-text-demo";

const { title } = config;

export const metadata: Metadata = {
  title: `Gallery | ${title}`,
};

async function Gallery() {
  return (
    <article>
      <PageHeader header="Hugo's Gallery" />
      <BlurFadeDemo />
      {await AnimatedGradientTextDemo()}
    </article>
  );
};

export default Gallery;
