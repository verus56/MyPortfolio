import React, { JSX } from 'react';
import slugify from '@/lib/slugify';

import { IoLink } from 'react-icons/io5';

interface HeaderProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

function AnchorHeader ({ level, children, ...props }: HeaderProps) {
  let Tag = `h${level}` as keyof JSX.IntrinsicElements;
  let id = slugify(children?.toString() ?? '', { lower: true });

  let getMargins = (level: number) => {
    switch (level) {
      case 1:
        return 'text-3xl font-bold mt-14 mb-10';
      case 2:
        return 'text-2xl font-semibold mt-12 mb-8';
      case 3:
        return 'text-xl font-medium mt-10 mb-6';
      case 4:
        return 'text-lg font-medium mt-8 mb-4';
      case 5:
        return 'text-base font-medium mt-6 mb-3';
      case 6:
        return 'text-sm font-medium mt-4 mb-2';
      default:
        return '';
    }
  };

  let margins = getMargins(level);

  return (
    <Tag
      id={id}
      className={`relative group cursor-pointer ${margins}`}
      {...props}
    >
      <a
        href={`#${id}`}
        className="no-underline text-[#d6d6d6] hover:underline flex items-center"
      >
        <span className="absolute left-[-1.5rem] top-[0.2rem] opacity-0 transition-opacity duration-200 ease-in-out scale-90 group-hover:opacity-100">
          <IoLink />
        </span>
      </a>
      {children}
    </Tag>
  );
};

export default AnchorHeader;
