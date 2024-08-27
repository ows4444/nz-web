'use client';
import { useState, useEffect } from 'react';

export function useViewportSize({ xs = 320, sm = 480, md = 768, lg = 992, xl = 1200, xxl = 1600 } = {}) {
  const [viewportSize, setViewportSize] = useState({
    width: 0,
    height: 0,
    size: 'xs',
    orientation: 'portrait',
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateViewportSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setViewportSize({
        width,
        height,
        size:
          width <= xs
            ? 'xs'
            : width <= sm
              ? 'sm'
              : width <= md
                ? 'md'
                : width <= lg
                  ? 'lg'
                  : width <= xl
                    ? 'xl'
                    : 'xxl',
        orientation: width > height ? 'landscape' : 'portrait',
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
  }, [xs, sm, md, lg, xl, xxl]);

  return viewportSize;
}
