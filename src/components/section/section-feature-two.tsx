import { motion } from "framer-motion";
import { useRef } from "react";
import { containerVariants, itemVariants } from "../animation";
import { featureTwoText } from "@/constants";
import { ReactionLeftContainer, ReactionRightContainer } from "../common/reaction-container";
import Feeature from "../common/feature";
import ZaplyCircle from "@/assets/images/Zaply-Circle.webp";
import Image from "next/image";

export default function SectionFeatureTwo() {
  const featureRef = useRef(null);

  return (
    <motion.div
      id="feature-02"
      ref={featureRef}
      className="relative h-screen bg-center bg-cover bg-feature2 snap-start snap-always"
      initial="hidden"
      viewport={{ once: false, amount: 0.5 }}
      whileInView="visible">
      <div className="flex flex-col items-center justify-start pt-[140px] gap-6">
        <motion.div variants={itemVariants}>
          <Feeature type="two" />
        </motion.div>
        <motion.p
          variants={containerVariants}
          className="text-center whitespace-pre-line text-h2 text-blue-blueblack">
          {featureTwoText.title}
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="font-medium text-center whitespace-pre-line text-b2 text-grayscale-700">
          {featureTwoText.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-[100px] w-full flex flex-col items-center justify-center space-y-[12px]">
          <Image src={ZaplyCircle} alt="Zaply Circle" width={54} height={54} />
          <motion.div
            className="flex items-center justify-center space-x-3 overflow-y-hidden"
            initial="hidden"
            animate="visible">
            <ReactionLeftContainer />
            <ReactionRightContainer />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
