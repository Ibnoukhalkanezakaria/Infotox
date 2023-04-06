import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

import { Link } from "react-router-dom";
import stick2 from "../../assets/Cta/icon-2.svg";
import stick3 from "../../assets/Cta/icon-3.svg";

const CtaSection = () => {
  return (
    <div className="bg-secondary-clr p120-section relative overflow-hidden">
      <img
        src={stick2}
        alt="stick"
        className="absolute right-[30%] bottom-10 "
      />
      <img src={stick3} alt="stick" className="absolute right-[-50px]" />
      <div className="Wrapper text-center">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          className="relative primary-clr sm:text-5xl text-4xl fw-600 text-center max-w-[780px] sm:leading-[80px] m-auto"
        >
          Let’s see Infotux in action all for free!
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
          className="text-center color7 m-auto max-w-[400px] py-6 leading-7 fw-500"
        >
          Track all sales communication in one screen and make your potential
          customers feel heard.
        </p>
        <Link to="/pricing">
          <PrimaryButton
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
            className="mt-6 relative"
          >
            Get started for free
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default CtaSection;
