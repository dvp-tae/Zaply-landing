"use client";

import { m } from "framer-motion";

const MotionDiv = m.div;

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <MotionDiv
        className="fixed inset-0 pointer-events-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      />
    </div>
  );
}
