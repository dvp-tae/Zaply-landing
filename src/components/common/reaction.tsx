import { cn } from "@/hooks/utils";

interface ReactionProps {
  icons: React.ReactNode;
  count: number;
  isActive?: boolean;
  type: "heart" | "hate";
  className?: string;
}

export default function Reaction({
  icons,
  count,
  isActive = false,
  type,
  className,
}: ReactionProps) {
  return (
    <div className={cn("flex items-center justify-center space-x-3", className)}>
      <div
        className={cn(
          "inline-flex items-center justify-center h-9 px-[18px] py-[6px] rounded-full space-x-[10px]",
          {
            "bg-blue-300": type === "heart" && isActive,
            "bg-redscale-300": type === "hate" && isActive,
            "bg-grayscale-300": !isActive,
          }
        )}>
        {icons}
        <p
          className={cn("italic font-bold font-creato700", {
            "text-blue-700": type === "heart" && isActive,
            "text-redscale-700": type === "hate" && isActive,
            "text-grayscale-400": !isActive,
          })}>
          {count}
        </p>
      </div>
    </div>
  );
}
