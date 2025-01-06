import Link from "next/link";
import type { Icon } from "@primer/octicons-react";
import type { IconType } from "react-icons";

interface SocialLink {
  url: string;
  icon: Icon | IconType;
  name: string;
}

interface SocialListProps {
  socialLinks: SocialLink[];
}

function SocialList({ socialLinks }: SocialListProps) {
  return (
    <ul className="flex justify-start items-center gap-[15px] pb-1 pl-[7px] xl:justify-center md:justify-center">
      {socialLinks.map(({ url, icon: Icon, name }) => (
        <li key={name} className="text-light-gray-70 text-lg hover:scale-110 hover:text-orange-yellow-crayola">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            <Icon />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;

