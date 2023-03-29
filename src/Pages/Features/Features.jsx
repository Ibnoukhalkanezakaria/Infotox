import React from "react";
import IntegrateSection from "../../Components/Sections/IntegrateSection";
import RunsSection from "../../Components/Sections/RunsSection";
import CtaSection from "../../Components/Sections/CtaSection";
import HeroFeatures from "../../Components/Sections/HeroFeatures";
import EasySection from "../../Components/Sections/EasySection";
import ShippingSection from "../../Components/Sections/ShippingSection";
const Features = () => {
  return (
    <>
      <HeroFeatures />
      <EasySection />
      <ShippingSection />
      <IntegrateSection />
      <RunsSection />
    </>
  );
};

export default Features;
