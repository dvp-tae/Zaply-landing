import { HateIcon, HeartIcon, LikeIcon } from "../Icons";
import Reaction from "./reaction";

export function ReactionLeftContainer() {
  return (
    <div className="flex flex-col items-center justify-center space-y-[6px]">
      <Reaction icons={<HeartIcon />} count={73443} type="heart" isActive={true} />
      <Reaction icons={<HeartIcon color="#D6DBE2" />} count={4232} type="heart" isActive={false} />
      <Reaction
        icons={<HeartIcon color="#D6DBE2" />}
        count={1199}
        type="heart"
        isActive={false}
        className="opacity-70"
      />
      <Reaction
        icons={<HeartIcon color="#D6DBE2" />}
        count={8543}
        type="heart"
        isActive={false}
        className="opacity-40"
      />
    </div>
  );
}

export function ReactionRightContainer() {
  return (
    <div className="flex flex-col items-center justify-center space-y-[6px]">
      <Reaction icons={<HateIcon />} count={32213} type="hate" isActive={true} />
      <Reaction icons={<LikeIcon color="#D6DBE2" />} count={2111} type="heart" isActive={false} />
      <Reaction
        icons={<LikeIcon color="#D6DBE2" />}
        count={167}
        type="heart"
        isActive={false}
        className="opacity-70"
      />
      <Reaction
        icons={<LikeIcon color="#D6DBE2" />}
        count={463}
        type="heart"
        isActive={false}
        className="opacity-40"
      />
    </div>
  );
}
