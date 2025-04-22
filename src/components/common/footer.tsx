import { FooterText } from "@/constants";
import { ZaplyLogoIcon } from "../Icons";

export default function Footer() {
  return (
    <footer className="w-full px-6 py-10 bg-grayscale-200">
      <div className="flex flex-col items-start justify-center w-full h-full space-y-10">
        <div className="flex items-center gap-2 w-[120px] h-10 bg-grayscale-200">
          <ZaplyLogoIcon width={34} height={40} color="#BDC5D0" />
          <p className="italic font-creato500 text-h2 text-grayscale-400">Zaply</p>
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
