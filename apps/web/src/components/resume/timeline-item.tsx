import React from "react";
import MarkdownRenderer from "@/components/markdown/markdown-renderer";

import "@/styles/resume/timeline-item.css";

export interface TimelineItemProps {
  company: string;
  location: string;
  role: string;
  duration: string;
  tasksMarkdown: string;
}

function TimelineItem({
  company,
  location,
  role,
  duration,
  tasksMarkdown,
}: TimelineItemProps) {
  return (
    <li className="timeline-item">
      <h4 className="text-white-2 font-bold leading-[1.3] mb-2">
        {company}
        <span>📍 {location}</span>
      </h4>
      <p className="text-orange-yellow-crayola inline">
        {role}
        <span className="text-white-1 float-right">🗓️ {duration}</span>
      </p>
      <br />
      <div className="timeline-text">
        <MarkdownRenderer content={tasksMarkdown} />
      </div>
    </li>
  );
};

export default TimelineItem;
