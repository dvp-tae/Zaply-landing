import { motion } from "framer-motion";
import { useRef } from "react";
import { containerVariants, itemVariants } from "../animation";
import { AboutText, preRegisterInfoText } from "@/constants";
import ContactForm from "../form/contact";
import { About } from "../common/about";
import Footer from "../common/footer";

export default function SectionPreRegister() {
  const featureRef = useRef(null);

  return (
    <motion.div
      id="pre-register"
      ref={featureRef}
      className="relative h-screen bg-center bg-cover bg-main snap-start snap-always">
      <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
        <div className="flex flex-col items-center justify-start pt-[140px] min-h-screen pb-[80px]">
          <motion.p
            variants={containerVariants}
            className="mb-2 text-center whitespace-pre-line text-h2 text-blue-blueblack">
            {preRegisterInfoText.title}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="font-medium text-center whitespace-pre-line text-b2 text-grayscale-100">
            {preRegisterInfoText.description}
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col space-y-[10px] mt-6">
            {preRegisterInfoText.benefit.map((text, index) => (
              <div
                key={index}
                className="py-[14px] px-[39px] bg-grayscale-100/70 rounded-[12px] flex justify-center items-center w-full">
                <p className="text-sm font-semibold text-center whitespace-pre-line text-grayscale-700">
                  {text}
                  {index === 1 && (
                    <span className="font-medium text-b4 text-grayscale-600">
                      (*추후 신청자들에 한해 공개예정)
                    </span>
                  )}
                </p>
              </div>
            ))}
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="mt-[120px] text-t1 font-bold text-center leading-9">
            지금 바로{" "}
            <span className="italic text-transparent font-creato800 bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text">
              Zaply&nbsp;
            </span>
            의<br /> 크리에이터 성장을 위한
            <br />{" "}
            <span className="italic font-bold text-blue-700 font-creato800">Shortcut&nbsp;</span>을
            경험해보세요!
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="w-full px-6 flex flex-col space-y-[10px] mt-6 mb-[120px]">
            <div className="p-5 rounded-[20px] border border-grayscale-100 bg-grayscale-200/20">
              <ContactForm />
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col w-full px-6 space-y-5">
            {AboutText.map((text, index) => (
              <About key={index} content={text.content} button={text.button} />
            ))}
          </motion.div>
        </div>
        <Footer />
      </div>
    </motion.div>
  );
}
