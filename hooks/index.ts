'use client';
import { useState, useEffect } from 'react';

export function useViewportSize({
  xs = 320,
  sm = 480,
  md = 768,
  lg = 992,
  xl = 1200,
  xxl = 1600,
} = {}) {
  if (typeof window === 'undefined') return { width: 0, height: 0, size: 'xs', orientation: 'portrait' };

  const [viewportSize, setViewportSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    size: 'xs',
    orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
  });

  useEffect(() => {
    const updateViewportSize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
        size:
          window.innerWidth <= xs
            ? 'xs'
            : window.innerWidth <= sm
            ? 'sm'
            : window.innerWidth <= md
            ? 'md'
            : window.innerWidth <= lg
            ? 'lg'
            : window.innerWidth <= xl
            ? 'xl'
            : window.innerWidth <= xxl
            ? 'xxl'
            : 'xxl',
        orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
      });
    };

    // Initial update
    updateViewportSize();

    // Update on resize
    window.addEventListener('resize', updateViewportSize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateViewportSize);
    };
  }, [xs, sm, md, lg, xl, xxl]); // Add dependencies for the breakpoints

  return viewportSize;
}
