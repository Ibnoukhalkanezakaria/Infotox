import React from "react";
import Slider from "../../Components/Slider/Slider";
import RunsSection from "../../Components/Sections/RunsSection";
import CtaSection from "../../Components/Sections/CtaSection";
import HeroPricing from "../../Components/Sections/HeroPricing";
import PacksSection from "../../Components/Sections/PacksSection";
import FeaturesSection from "../../Components/Sections/FeaturesSection";

const Pricing = () => {
  return (
    <>
      <HeroPricing />
      <PacksSection />
      <FeaturesSection />
      <Slider />
      <RunsSection />
    </>
  );
};

export default Pricing;
