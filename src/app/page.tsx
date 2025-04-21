"use client";

import SectionMain from "@/components/section/section-main";
import SectionFeatureOne from "@/components/section/section-feature-one";
import SectionFeatureTwo from "@/components/section/section-feature-two";
import SectionFeatureThree from "@/components/section/section-feature-three";
import SectionWhy from "@/components/section/section-why";
import SectionPreRegister from "@/components/section/section-pre-register";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-x-hidden overflow-y-auto snap-y snap-mandatory scrollbar-hide">
      <SectionMain />
      <SectionFeatureOne />
      <SectionFeatureTwo />
      <SectionFeatureThree />
      <SectionWhy />
      <SectionPreRegister />
    </div>
  );
}
