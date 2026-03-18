"use client";

import { useEffect, useState } from "react";

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new Image();

    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = src;

    if (image.complete) {
      resolve();
    }
  });
}

export default function usePrototypePageReady(
  imageSources: readonly string[],
  minDelayMs = 800,
) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    let timerId: number | undefined;

    const uniqueSources = [...new Set(imageSources.filter(Boolean))];

    const minDelay = new Promise<void>((resolve) => {
      timerId = window.setTimeout(resolve, minDelayMs);
    });

    const imagesReady = Promise.all(uniqueSources.map(preloadImage)).then(
      () => undefined,
    );

    Promise.all([minDelay, imagesReady]).then(() => {
      if (!isCancelled) {
        setIsReady(true);
      }
    });

    return () => {
      isCancelled = true;
      if (timerId !== undefined) {
        window.clearTimeout(timerId);
      }
    };
  }, [imageSources, minDelayMs]);

  return isReady;
}
