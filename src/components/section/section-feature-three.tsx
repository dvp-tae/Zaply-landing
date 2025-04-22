import { motion } from "framer-motion";
import { useRef } from "react";
import Feeature from "../common/feature";
import { containerVariants, itemVariants } from "../animation";
import { CommentData, featureThreeText } from "@/constants";
import Comment from "../common/comment";

export default function SectionFeatureThree() {
  const featureRef = useRef(null);

  return (
    <motion.div
      id="feature-03"
      ref={featureRef}
      className="relative h-screen bg-center bg-cover bg-feature3 snap-start snap-always"
      initial="hidden"
      viewport={{ once: false, amount: 0.5 }}
      whileInView="visible">
      <div className="flex flex-col items-center justify-start pt-[140px] gap-6">
        <motion.div variants={itemVariants}>
          <Feeature type="three" />
        </motion.div>
        <motion.p
          variants={containerVariants}
          className="text-center whitespace-pre-line text-h2 text-blue-blueblack">
          {featureThreeText.title}
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="font-medium text-center whitespace-pre-line text-b2 text-grayscale-700">
          {featureThreeText.description}
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="mt-[100px] w-full flex justify-center">
        <div className="relative w-[322px] h-[186px]">
          <div className="absolute top-0 left-0 bg-white py-[10px] px-3 rounded-xl w-[304px] space-y-2 shadow-comment">
            {CommentData.slice(0, 2).map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
          <div className="absolute bottom-2 right-0 bg-white py-[10px] px-3 rounded-xl w-[266px] space-y-2 z-10 shadow-comment">
            {CommentData.slice(2, 4).map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
