import AboutHeader from '@/components/about/about-header';
import ServiceItem from '@/components/about/service-item';

import type { LifeStyle } from '@/types/about';

interface LifeStylesProps {
  lifestyles: LifeStyle[];
}

function LifeStyles({ lifestyles }: LifeStylesProps) {
  return (
    <section id="life-styles">
      <AboutHeader text="$ ls -al Life Style" />
      <ul className="mt-[30px] grid grid-cols-2 gap-[20px] lg:gap-y-[20px] lg:gap-x-[25px]">
        {lifestyles.map((lifestyle: LifeStyle) => (
          <ServiceItem lifestyle={lifestyle} key={lifestyle.title} />
        ))}
      </ul>
    </section>
  );
}

export default LifeStyles;
