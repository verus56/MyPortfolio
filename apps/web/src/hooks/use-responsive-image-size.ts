import { useState, useEffect } from 'react';

export type ImageSize = {
  width: number;
  height: number;
}

export type Breakpoint = {
  maxWidth: number;
  size: ImageSize;
}

export const useResponsiveImageSize = (breakpoints: Breakpoint[]): ImageSize => {
  const defaultBreakpoint = breakpoints.length - 1;
  const [imageSize, setImageSize] = useState<ImageSize>(() => {
    return breakpoints[defaultBreakpoint].size;
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      for (const breakpoint of breakpoints) {
        if (width < breakpoint.maxWidth) {
          setImageSize(breakpoint.size);
          return;
        }
      }
      setImageSize(breakpoints[defaultBreakpoint].size);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoints, defaultBreakpoint]);

  return imageSize;
};
