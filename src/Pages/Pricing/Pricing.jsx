import React from "react";
import Slider from "../../Components/Slider/Slider";
import RunsSection from "../../Components/Sections/RunsSection";
import HeroPricing from "../../Components/Sections/HeroPricing";
import PacksSection from "../../Components/Sections/PacksSection";

const Pricing = () => {
  return (
    <>
      <HeroPricing />
      <PacksSection />
      <Slider />
      <RunsSection />
    </>
  );
};

export default Pricing;
