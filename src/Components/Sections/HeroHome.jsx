import React from "react";
import { HeroHomeData } from "../../Data/data";
import PrimaryButton from "../Buttons/PrimaryButton";
import icon1 from "../../assets/HeroHome/icon-1.svg";
import icon2 from "../../assets/HeroHome/icon-2.svg";
import icon3 from "../../assets/HeroHome/icon-3.svg";

import { Link } from "react-router-dom";

const HeroHome = () => {
  const { title, description, heroImage } = HeroHomeData;
  return (
    <div className="bg-secondary-clr p100-section overflow-hidden">
      <div className="Wrapper text-center relative">
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="300"
          src={icon1}
          alt="icon1"
          className="absolute right-0 top-12"
        />
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="300"
          src={icon2}
          alt="icon1"
          className="absolute left-0 top-[20%]"
        />
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
          className="relative z-40 primary-clr fw-600 md:text-5xl text-3xl m-auto max-w-[800px]"
        >
          {title}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
          className="relative z-40 color7 m-auto max-w-[500px] py-6 leading-7 fw-500"
        >
          {description}
        </p>
        <Link to="/pricing">
          <PrimaryButton className="mt-4 mb-14">
            Get started for free
          </PrimaryButton>
        </Link>
        <div>
          <div className="z-40 relative">
            <img
              src={heroImage}
              alt="heroImage pt-8"
              className="w-[1100px] m-auto "
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
            />
          </div>
          <img
            src={icon3}
            alt=""
            className="absolute z-1 right-[-10px] bottom-10 max-w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
