"use client";

import { MenuIcon, XIcon, ZaplyLogoIcon } from "../Icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 max-w-[480px] mx-auto">
      <motion.div
        className={`flex justify-between items-center py-4 px-[30px] h-[72px] transition-colors duration-300 ${
          isOpen ? "bg-white" : "bg-white/20 border-b-[0.5px] border-b-gray-100"
        }`}>
        <button
          type="button"
          className="w-[101px] h-10 flex items-center justify-center gap-1"
          onClick={() => router.push("/")}>
          <ZaplyLogoIcon width={34} height={40} color={isOpen ? "#D6DBE2" : "#FEFEFE"} />
          <p
            className={`italic font-creato500 text-h2 ${isOpen ? "text-grayscale-400" : "text-grayscale-100"}`}>
            Zaply
          </p>
        </button>
        <>
          {isOpen ? (
            <XIcon onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <MenuIcon onClick={() => setIsOpen(!isOpen)} />
          )}
        </>
      </motion.div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 51 : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white px-[30px] overflow-hidden">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: isOpen ? 0 : -10,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
            delay: isOpen ? 0.1 : 0,
          }}
          className="py-4"
          onClick={() => {
            router.push("/inquire");
            setIsOpen(false);
          }}>
          <p className="text-base font-medium text-grayscale-600">문의사항 남기기</p>
        </motion.div>
      </motion.div>
    </header>
  );
}
