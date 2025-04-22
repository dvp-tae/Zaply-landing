import { motion, useInView } from "framer-motion";
import { mainText } from "@/constants";
import { useEffect, useRef, memo } from "react";
import ScrollButton from "../common/scroll-button";
import { ArrowRightIcon } from "../Icons";

const MainSection = () => {
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      targetRef.current = document.getElementById("pre-register");
    }
  }, []);

  const scrollToNextSection = (): void => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col space-y-[140px] items-center justify-center bg-main bg-cover bg-center h-screen snap-start snap-always">
      <div className="space-y-7">
        <p className="italic font-extrabold text-center whitespace-pre-line font-creato800 text-h1 text-blue-blueblack">
          {mainText.title}
        </p>
        <p className="font-bold text-center whitespace-pre-line text-t1 text-blue-blueblack">
          {mainText.subTitle}
        </p>
      </div>
      <div className="relative space-y-6">
        <p className="font-medium text-center whitespace-pre-line text-b4 text-grayscale-700">
          {mainText.register}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={scrollToNextSection}
          className="bg-blue-blueblack text-t3 font-bold rounded-[50px] px-[43px] py-[13px] flex items-center justify-center gap-[10px]">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-700">
            {mainText.button}
          </p>
          <ArrowRightIcon />
        </motion.button>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[114px]">
          <ScrollButton targetId="feature-01" />
        </div>
      </div>
    </div>
  );
};

export default memo(MainSection);
