import React from "react";

interface PageHeaderProps {
  header: string;
}

function PageHeader({ header }: PageHeaderProps) {
  return (
    <header>
      <h1 className="relative pb-[7px] mb-[30px] font-semibold text-3xl text-white-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[3px] after:rounded-sm  after:bg-text-gradient-yellow sm:pb-[15px] sm:after:w-[40px] sm:after:h-[5px] md:pb-[20px]">
        {header}
      </h1>
    </header>
  );
};

export default PageHeader;
