import React from "react";
import HeroHome from "../../Components/Sections/HeroHome";
import ShippingSection from "../../Components/Sections/ShippingSection";
import MaximumSection from "../../Components/Sections/MaximumSection";
import IntegrateSection from "../../Components/Sections/IntegrateSection";
import RunsSection from "../../Components/Sections/RunsSection";
import CtaSection from "../../Components/Sections/CtaSection";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <>
      <HeroHome />
      <ShippingSection />
      <MaximumSection />
      <IntegrateSection />
      <Slider />
      <RunsSection />
      <CtaSection />
    </>
  );
};

export default Home;
