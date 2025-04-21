import { CheckIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

interface ScrollButtonProps {
  targetId: string;
}

const ScrollButton = ({ targetId }: ScrollButtonProps) => {
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      targetRef.current = document.getElementById(targetId);
    }
  }, [targetId]);

  const bounceAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop" as const,
    },
  };

  const scrollToNextSection = (): void => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      animate={bounceAnimation}
      className="cursor-pointer"
      onClick={scrollToNextSection}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <CheckIcon />
    </motion.div>
  );
};

export default ScrollButton;
