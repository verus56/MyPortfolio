import type { LifeStyle } from '@/types/about';
import "@/styles/about/service-item.css";

interface ServiceItemProps {
  lifestyle: LifeStyle;
}

function ServiceItem({ lifestyle }: ServiceItemProps) {
  return (
    <li className="service-item bg-border-gradient-onyx relative shadow-shadow-2 rounded-2xl before:absolute before:content-[''] before:rounded-2xl">
      <div className="mb-2.5 sm:mb-0 sm:mt-2 flex justify-center items-center">
        <lifestyle.icon className="text-orange-yellow-crayola" size={24} />
      </div>

      <div className="text-center sm:text-left">
        <h4 className="text-white-2 text-lg font-bold mb-[7px]">{lifestyle.title}</h4>
        <p className="text-light-gray text-sm font-light leading-6">{lifestyle.text}</p>
      </div>
    </li>
  );
}

export default ServiceItem;
