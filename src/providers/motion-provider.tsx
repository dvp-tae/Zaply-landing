"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <div className="motion-layer">{children}</div>
    </LazyMotion>
  );
}
