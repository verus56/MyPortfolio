import type { Metadata } from "next";
import React from 'react';
import PageHeader from '@/components/page-header';
import MarkdownRenderer from '@/components/markdown/markdown-renderer';
import config from '@/config';

const { title } = config;

export const metadata: Metadata = {
  title: `Not Found | ${title}`,
};

const errorMessages = [
  'This page doesn\'t exist.',
  'If this is a mistake, [let us know](https://github.com/1chooo/1chooo.com/issues/new), and we will try to fix it!',
];

function NotFound() {
  return (
    <article>
      <PageHeader header="404 Not Found" />
      <section className="text-light-gray leading-relaxed">
        {errorMessages.map((item, index) => (
          <MarkdownRenderer key={`${item}-${index}`} content={item} />
        ))}
      </section>
    </article>
  )
}

export default NotFound
