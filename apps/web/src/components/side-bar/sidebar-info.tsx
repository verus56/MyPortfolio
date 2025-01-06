import React from 'react';
import InfoContent from './info-content';
import InfoMoreButton from './info-more-button';
import Image from 'next/image';
import { useResponsiveImageSize } from '@/hooks/use-responsive-image-size';
import { breakpoints } from '@/lib/constants';

import "@/styles/side-bar/sidebar-info.css";

interface SideBarInfoProps {
  onToggle: () => void;
  avatar: string;
  firstName: string;
  lastName: string;
  middleName: string;
  preferredName: string;
}

function SideBarInfo({
  onToggle,
  avatar,
  firstName,
  lastName,
  middleName,
  preferredName,
}: SideBarInfoProps) {
  const imageSize = useResponsiveImageSize(breakpoints);

  return (
    <div className="sidebar-info">
      <figure className="avatar-box">
        <Image
          id={`${firstName} ${preferredName} ${lastName}`}
          src={avatar}
          alt={`${firstName} ${preferredName} ${lastName}`}
          width={imageSize.width}
          height={imageSize.height}
          quality={50}
          loading="eager"
          priority
        />
      </figure>
      <InfoContent />
      <InfoMoreButton onClick={onToggle} />
    </div>
  );
};

export default SideBarInfo;
