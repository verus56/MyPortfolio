import React from 'react';
import { ProgressBarLink } from "@/components/progress-bar";

interface FilterListProps {
  path: string;
  selectedTag: string;
  blogTags: string[];
}

function FilterList({ path, selectedTag, blogTags }: FilterListProps) {
  return (
    <ul className="filter-list">
      {blogTags.map((tag, index) => (
        <li className="filter-item" key={index}>
          <ProgressBarLink
            href={`/${path}?tag=${encodeURIComponent(tag)}`}
            className={`filter-btn ${selectedTag === tag ? 'active' : ''}`}
          >
            {tag}
          </ProgressBarLink>
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
