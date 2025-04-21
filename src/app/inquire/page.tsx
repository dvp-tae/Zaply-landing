"use client";

import { itemVariants, subtitleAnimation, titleAnimation } from "@/components/animation";
import Footer from "@/components/common/footer";
import InquireForm from "@/components/form/inquire";
import { InquireText, mainText } from "@/constants";
import { motion } from "framer-motion";

export default function Inquire() {
  return (
    <motion.div className="flex flex-col space-y-[140px] items-center justify-start pt-[120px] w-full h-screen overflow-x-hidden overflow-y-auto snap-y snap-mandatory scrollbar-hide">
      <div>
        <motion.p
          {...titleAnimation}
          className="italic font-extrabold text-center whitespace-pre-line font-creato800 text-h1 text-grayscale-100">
          {mainText.title}
        </motion.p>
        <motion.p
          {...subtitleAnimation}
          className="font-bold text-center whitespace-pre-line text-t1 text-grayscale-100">
          {mainText.subTitle}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="w-full px-6 flex flex-col space-y-[10px] mt-[60px] mb-[120px]">
          <div className="px-5 py-12 rounded-[20px] border border-grayscale-100 bg-grayscale-200/20">
            <div className="flex flex-col mb-8 space-y-4">
              <p className="font-bold text-left whitespace-pre-line text-t1 text-grayscale-900">
                {InquireText.title}
              </p>
              <p className="font-medium text-left whitespace-pre-line text-b2 text-grayscale-700">
                {InquireText.description}
              </p>
            </div>
            <InquireForm />
          </div>
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
}
