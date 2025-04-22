import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { featureOneText, PlatformList } from "@/constants";
import { containerVariants, itemVariants } from "../animation";
import Feeature from "../common/feature";
import useMeasure from "react-use-measure";
import PlatformCard from "../common/platform-card";

export default function SectionFeatureOne() {
  const featureRef = useRef(null);
  const [listWidth, setListWidth] = useState(0);

  let [containerRef] = useMeasure();

  let [topListRef, { width: topListWidth }] = useMeasure();
  let [bottomListRef, { width: bottomListWidth }] = useMeasure();

  const top_xTranslation = useMotionValue(0);
  const bottom_xTranslation = useMotionValue(0);

  useEffect(() => {
    if (topListWidth > 0) {
      setListWidth(topListWidth + 400);
    }
    if (bottomListWidth > 0) {
      setListWidth(bottomListWidth + 400);
    }
  }, [topListWidth, bottomListWidth]);

  useEffect(() => {
    if (listWidth === 0) return;

    const scrollDistance = listWidth;
    const duration = 20;

    const animateTopRow = () => {
      const controls = animate(top_xTranslation, -scrollDistance, {
        ease: "linear",
        duration,
        onComplete: () => {
          top_xTranslation.set(0);
          animateTopRow();
        },
      });

      return controls;
    };

    const animateBottomRow = () => {
      const controls = animate(bottom_xTranslation, 0, {
        ease: "linear",
        duration,
        onComplete: () => {
          bottom_xTranslation.set(-scrollDistance);
          animateBottomRow();
        },
      });

      return controls;
    };

    top_xTranslation.set(0);
    bottom_xTranslation.set(-scrollDistance);

    const topControls = animateTopRow();
    const bottomControls = animateBottomRow();

    return () => {
      topControls.stop();
      bottomControls.stop();
    };
  }, [top_xTranslation, bottom_xTranslation, listWidth]);

  return (
    <motion.div
      id="feature-01"
      ref={featureRef}
      className="relative h-screen bg-center bg-cover bg-feature1 snap-start snap-always"
      initial="hidden"
      viewport={{ once: false, amount: 0.5 }}
      whileInView="visible">
      <div className="flex flex-col items-center justify-start pt-[140px] gap-6">
        <motion.div variants={itemVariants}>
          <Feeature type="one" />
        </motion.div>
        <motion.p
          variants={containerVariants}
          className="text-center whitespace-pre-line text-h2 text-blue-blueblack">
          {featureOneText.title}
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="font-medium text-center whitespace-pre-line text-b2 text-grayscale-700">
          {featureOneText.description}
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="font-medium text-center whitespace-pre-line text-b4 text-grayscale-600">
          {featureOneText.alert}
        </motion.p>

        {/* 플랫폼 리스트 컨테이너 */}
        <motion.div
          variants={itemVariants}
          className="mt-[88px] py-[10px] w-full overflow-hidden space-y-[12px]"
          ref={containerRef}>
          <div className="overflow-hidden">
            <div className="relative">
              <motion.div
                className="flex space-x-[14px]"
                ref={topListRef}
                style={{ x: top_xTranslation }}>
                {[...PlatformList, ...PlatformList].map((platform, idx) => (
                  <PlatformCard key={`top-${idx}`} platform={platform} />
                ))}
              </motion.div>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="relative">
              <motion.div
                className="flex space-x-[14px]"
                ref={bottomListRef}
                style={{ x: bottom_xTranslation }}>
                {[...PlatformList.toReversed(), ...PlatformList.toReversed()].map(
                  (platform, idx) => (
                    <PlatformCard key={`bottom-${idx}`} platform={platform} />
                  )
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
