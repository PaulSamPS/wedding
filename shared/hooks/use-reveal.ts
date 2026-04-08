'use client';

import { useEffect, useRef } from 'react';

/**
 * Returns a ref that adds the 'revealed' CSS class to its element
 * when it enters the viewport (IntersectionObserver).
 *
 * @param delay    Milliseconds to wait after intersection before revealing (default 0)
 * @param threshold Observer threshold 0–1 (default 0.06)
 */
export function useReveal(delay = 0, threshold = 0.06) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add('revealed'), delay);
          obs.unobserve(el);
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, threshold]);
  return ref;
}
