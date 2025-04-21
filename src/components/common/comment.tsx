import Image from "next/image";
import profile1 from "@/assets/images/profile1.webp";
import profile2 from "@/assets/images/profile2.webp";
import zaply from "@/assets/images/Zaply-Circle.webp";
import { CommentData } from "@/constants";

interface CommentProps {
  comment: (typeof CommentData)[number];
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div className="flex justify-start">
      <div className={`flex items-center gap-2 ${comment.name === "Zaply" ? "pl-9" : ""}`}>
        <Image
          src={comment.name === "User A" ? profile1 : comment.name === "User B" ? profile2 : zaply}
          alt="profile-image"
          width={32}
          height={32}
          className="rounded-full w-[32px] h-[32px]"
        />
        <div className="flex flex-col space-y-[2px]">
          <div className="flex items-center space-x-[6px]">
            <p className="text-[10px] font-medium text-black">{comment.name}</p>
            <p
              className={`text-[10px] font-medium ${comment.time === "25분 전" ? "text-blue-700" : comment.time === "1분 전" ? "text-redscale-700" : "text-grayscale-500"}`}>
              {comment.time}
            </p>
          </div>
          <p className="text-[10px] font-medium text-black">{comment.content}</p>
        </div>
      </div>
    </div>
  );
}
