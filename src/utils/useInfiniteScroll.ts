'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseInfiniteScrollOptions {
  initialCount?: number;
  batchSize?: number;
  rootMargin?: string;
  threshold?: number;
}

export function useInfiniteScroll(
  totalItems: number,
  options: UseInfiniteScrollOptions = {}
) {
  const {
    initialCount = 8,
    batchSize = 8,
    rootMargin = '300px',
    threshold = 0.1,
  } = options;

  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const resetCount = useCallback(() => {
    setVisibleCount(initialCount);
  }, [initialCount]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback: show all if IntersectionObserver is unsupported
      return;
    }

    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    if (visibleCount >= totalItems) return;

    let timeoutId: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsLoadingMore(true);
          // Brief throttle for smooth transition
          if (timeoutId) clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + batchSize, totalItems));
            setIsLoadingMore(false);
          }, 150);
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [visibleCount, totalItems, batchSize, rootMargin, threshold]);

  return {
    visibleCount,
    setVisibleCount,
    resetCount,
    sentinelRef,
    isLoadingMore,
    hasMore: visibleCount < totalItems,
  };
}
