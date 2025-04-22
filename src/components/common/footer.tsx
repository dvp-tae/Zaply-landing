import { FooterText } from "@/constants";
import ZaplyLogoGray from "@/assets/images/ZaplyLogoGray.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full px-6 py-10 bg-grayscale-200">
      <div className="flex flex-col items-start justify-center w-full h-full space-y-10">
        <div className="flex items-center gap-2 bg-grayscale-200">
          <div className="w-[101px] h-10 relative">
            <Image src={ZaplyLogoGray} alt="ZaplyLogo" fill />
          </div>
        </div>
        <div className="flex flex-col space-y-[2px]">
          {FooterText.map((text, index) => (
            <p key={index} className="text-left whitespace-pre-line text-b3 text-grayscale-600">
              {text}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
