import React from "react";
import TimelineItem from "./timeline-item";
import { TimelineItemProps } from "./timeline-item";

interface TimelineListProps {
  items: TimelineItemProps[];
}

function TimelineList({ items }: TimelineListProps) {
  return (
    <ol className="timeline-list">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          company={item.company}
          location={item.location}
          role={item.role}
          duration={item.duration}
          tasksMarkdown={item.tasksMarkdown}
        />
      ))}
    </ol>
  );
};


export default TimelineList;
