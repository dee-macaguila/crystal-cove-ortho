"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

export function FallbackImage({ src, fallbackSrc = "/Test.png", alt, ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = useCallback(() => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  }, [currentSrc, fallbackSrc]);

  return <Image src={currentSrc} alt={alt} onError={handleError} {...props} />;
}
