import { PlatformList } from "@/constants";

export default function PlatformCard({ platform }: { platform: (typeof PlatformList)[number] }) {
  const colorClass = () => {
    switch (platform) {
      case "Instagram":
        return "bg-[#FFEDFE] text-[#FB9DFB]";
      case "LinkedIn":
        return "bg-[#E4EDFF] text-[#99C4FF]";
      case "Threads":
        return "bg-[#DCE0E7] text-[#A0ACC0]";
      case "Naver Blog":
        return "bg-[#D3F5EA] text-[#66E0BA]";
      case "Facebook":
        return "bg-[#E5EBFF] text-[#ADAFFF]";
      case "Brunch":
        return "bg-grayscale-100 text-[#909090]";
      case "TiStory":
        return "bg-[#FFE8C9] text-[#FFBB4D]";
      default:
        return "";
    }
  };
  return (
    <div
      className={`py-[6px] px-[18px] h-9 rounded-lg inline-flex items-center justify-center whitespace-nowrap ${colorClass()}`}>
      <p className="text-base italic font-creato700">{platform}</p>
    </div>
  );
}
