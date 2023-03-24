import React from "react";
import HeroHome from "../../Components/Sections/Home/HeroHome";
import ShippingSection from "../../Components/Sections/Home/ShippingSection";
import MaximumSection from "../../Components/Sections/Home/MaximumSection";
import IntegrateSection from "../../Components/Sections/Home/IntegrateSection";

const Home = () => {
  return (
    <>
      <HeroHome />
      <ShippingSection />
      <MaximumSection />
      <IntegrateSection />
    </>
  );
};

export default Home;
