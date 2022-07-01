import React, { useEffect, useState } from 'react';

export const breakpoints = {
  extraLarge: 1536,
  large: 1200,
  medium: 900,
  small: 600,
} as const;

type TBreakPoint = 'small' | 'medium' | 'large' | 'extraLarge';

export const useDevices = (): TBreakPoint => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const width = window.innerWidth;
  const { medium, large, extraLarge } = breakpoints;

  const handleChangeWidth = () => {
    setCurrentWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleChangeWidth);

    return () => {
      window.removeEventListener('resize', handleChangeWidth);
    };
  }, []);

  if (currentWidth >= medium && width < large) {
    return 'medium';
  }
  if (currentWidth >= large && width < extraLarge) {
    return 'large';
  }
  if (currentWidth >= extraLarge) {
    return 'extraLarge';
  }

  return 'small';
};
