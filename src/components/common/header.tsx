"use client";

import { MenuIcon, XIcon } from "../Icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ZaplyLogoWhite from "@/assets/images/ZaplyLogoWhite.png";
import ZaplyLogoGray from "@/assets/images/ZaplyLogoGray.png";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 max-w-[480px] mx-auto"
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)", // Safari 지원용
      }}>
      <motion.div
        className={`flex justify-between items-center py-4 pl-[20px] pr-[30px] h-[72px] backdrop-blur-[10px] transition-colors duration-300 ${
          isOpen ? "bg-white" : "bg-white/30 border-b-[0.5px] border-b-gray-100"
        }`}>
        <button
          type="button"
          className="flex items-center justify-center w-[120px] h-10"
          onClick={() => router.push("/")}>
          <div className="w-[101px] h-10 relative">
            <Image src={!isOpen ? ZaplyLogoWhite : ZaplyLogoGray} alt="ZaplyLogo" fill />
          </div>
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
