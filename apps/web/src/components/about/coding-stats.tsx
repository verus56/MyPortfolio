import React from "react";
import AboutHeader from "@/components/about/about-header";
import type { Icon } from '@primer/octicons-react';
import type { IconType } from 'react-icons';
import Globe from "@/components/about/globe";
import GitHubCalendar from 'react-github-calendar';
import { ThemeInput } from 'react-activity-calendar';
import { Marquee } from './marquee'
import { LuMapPin, LuZap } from "react-icons/lu";

import "@/styles/about/coding-stats.css";

interface TechStack {
  name: string;
  icon: Icon | IconType;
};

interface TechStacks {
  programmingLanguages: TechStack[];
  frameworks: TechStack[];
}

interface CodingStatsProps {
  techStacks: TechStacks;
  githubUsername: string;
}

/**
 * @link
 * https://grubersjoe.github.io/react-activity-calendar/
 */
function CodingStats({ techStacks, githubUsername }: CodingStatsProps) {
  const yellowTheme: ThemeInput = {
    light: ['hsl(0, 0%, 92%)', '#FFDA6B'],
    dark: ['hsl(0, 0%, 22%)', '#FFDA6B'],
  };

  return (
    <section id="coding-stats">
      <AboutHeader
        id="coding-stats"
        text="$ ls -al Coding Stats"
      />
      <ul className="mt-[30px] grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-2 lg:gap-y-[20px] lg:gap-x-[25px]">
        <li className="relative rounded-2xl shadow-shadow-2 coding-item bg-gradient-onyx before:absolute before:content-[''] before:rounded-2xl">
          <div className='shadow-feature-card dark:shadow-feature-card-dark flex flex-col gap-2 overflow-hidden rounded-xl p-2'>
            <div className='flex items-center gap-2 text-white-2'>
              <LuZap size={18} />
              <h2 className='text-sm font-light'>Stacks</h2>
            </div>
            <Marquee gap='20px' className='py-2' fade pauseOnHover>
              {techStacks.programmingLanguages.map((stack) => (
                <stack.icon
                  key={stack.name}
                  className='size-10 text-white-2 hover:scale-110 hover:text-orange-yellow-crayola'
                />
              ))}
            </Marquee>
            <Marquee gap='20px' className='py-2' reverse fade pauseOnHover>
              {techStacks.frameworks.map((stack) => (
                <stack.icon
                  key={stack.name}
                  className='size-10 text-white-2 hover:scale-110 hover:text-orange-yellow-crayola'
                />
              ))}
            </Marquee>
          </div>
        </li>
        <li className="relative rounded-2xl shadow-shadow-2 coding-item bg-gradient-onyx before:absolute before:content-[''] before:rounded-2xl h-[200px] md:h-auto">
          <div className='absolute inset-x-0 bottom-[-190px] mx-auto aspect-square h-[388px] [@media(max-width:420px)]:bottom-[-140px] [@media(max-width:420px)]:h-[320px] [@media(min-width:768px)_and_(max-width:858px)]:h-[380px]'>
            <div className='flex items-center gap-2 text-white-2 mt-4 ml-4'>
              <LuMapPin size={18} />
              <h2 className='text-sm font-light'>France (UTC +01:00)</h2>
            </div>
            <Globe />
          </div>
        </li>
      </ul>
      <section
        id="github-calendar"
        className="text-light-gray mt-5"
      >
       {/*<GitHubCalendar
          username={githubUsername}
          blockSize={12}
          blockMargin={4}
          colorScheme="dark"
          blockRadius={2}
          fontSize={14}
          style={{ fontWeight: 'bold' }}
          theme={yellowTheme}
        /> */} 
      </section>
    </section>
  );
};

export default CodingStats;
