import { motion } from "framer-motion";
import { useRef } from "react";
import { containerVariants, itemVariants } from "../animation";
import Feeature from "../common/feature";
import { featureWhyText } from "@/constants";
import { cn } from "@/hooks/utils";

export default function SectionWhy() {
  const featureRef = useRef(null);

  return (
    <motion.div
      id="feature-why"
      ref={featureRef}
      className="relative h-screen bg-blue-blueblack snap-start snap-always"
      initial="hidden"
      viewport={{ once: false, amount: 0.5 }}
      whileInView="visible">
      <div className="flex flex-col items-center justify-start pt-[140px] gap-6">
        <motion.div variants={itemVariants}>
          <Feeature type="why" />
        </motion.div>
        <motion.p
          variants={containerVariants}
          className="text-center text-transparent whitespace-pre-line text-h2 bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-700">
          {featureWhyText.title}
        </motion.p>
        <motion.div variants={itemVariants} className="mt-20">
          {featureWhyText.description.map((text, index) => (
            <p
              key={index}
              className={cn(
                "font-medium text-center whitespace-pre-line text-b2 text-grayscale-200",
                {
                  "text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-700":
                    index === 0,
                  "text-blue-700": index === 4 || index === 7,
                }
              )}>
              {text}
              {index < featureWhyText.description.length - 1 && <br />}
            </p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
