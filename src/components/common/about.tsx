import { cn } from "@/hooks/utils";
import { ShareIcon } from "../Icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import copyURL from "@/hooks/copyUrl";
interface AboutProps {
  content: string;
  button: string;
}

export const About = ({ content, button }: AboutProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (button === "링크 공유하기") {
      copyURL();
    } else {
      router.push("/inquire");
    }
  };

  return (
    <div className="w-full bg-grayscale-100/50 border border-grayscale-100 rounded-[12px] py-8 px-10 flex flex-col justify-center items-center space-y-5">
      <p className="font-bold text-center whitespace-pre-line text-t3 text-blue-blueblack">
        {content}
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className={cn(
          "text-t3 font-bold text-grayscale-100 rounded-[50px] py-[10px] px-[25px] h-11 flex items-center justify-center gap-2",
          {
            "bg-blue-700": button === "링크 공유하기",
            "bg-green-700": button === "문의사항 남기기",
          }
        )}>
        {button}
        <ShareIcon />
      </motion.button>
    </div>
  );
};
