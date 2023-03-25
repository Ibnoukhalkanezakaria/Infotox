import React from "react";
import HeroHome from "../../Components/Sections/Home/HeroHome";
import ShippingSection from "../../Components/Sections/Home/ShippingSection";
import MaximumSection from "../../Components/Sections/Home/MaximumSection";
import IntegrateSection from "../../Components/Sections/Home/IntegrateSection";
import RunsSection from "../../Components/Sections/Home/RunsSection";
import CtaSection from "../../Components/Sections/Home/CtaSection";
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
