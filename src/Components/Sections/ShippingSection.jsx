import React from "react";
import { Link } from "react-router-dom";
import { ShippingSectionData } from "../../Data/data";
import PrimaryButton from "../Buttons/PrimaryButton";
import { AiOutlineCheck } from "react-icons/ai";
import image1 from "../../assets/Shipping/image1.svg";
import image2 from "../../assets/Shipping/image2.svg";
import image3 from "../../assets/Shipping/image3.svg";

import icon1 from "../../assets/Shipping/icon1.svg";
import icon2 from "../../assets/Shipping/icon2.svg";
import icon3 from "../../assets/Shipping/icon3.svg";

const ShippingSection = () => {
  const {
    title,
    description,
    increaseYourSales,
    NoMonthlyCharges,
    TakeInventoryOn,
  } = ShippingSectionData;
  return (
    <div className="bg-primary-clr p120-section overflow-hidden">
      <div className="Wrapper m-auto text-center flex flex-col justify-center">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          className="secondary-clr fw-600 md:text-5xl text-3xl m-auto max-w-[700px]"
        >
          {title}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
          className="color8 m-auto max-w-[500px] py-6 leading-7 fw-500"
        >
          {description}
        </p>
        <div className="flex flex-col justify-center m-auto ">
          <div className="grid md:grid-cols-2 grid-cols-1 p100-section gap-16">
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <div className="relative ">
                <img
                  src={icon1}
                  alt="icon"
                  className="absolute bottom-[-15%] left-[-15%] z-[1]"
                />
                <div className="relative z-10">
                  <img src={image1} alt="image" />
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="800"
              className="text-left md:order-1"
            >
              <h2 className="secondary-clr fw-600 sm:text-5xl tex-4xl max-w-[400px]">
                Increase your sales
              </h2>
              <p className="color8 leading-7 pt-6 pb-8 max-w-[450px]">
                Employ a powerful courier network and expand your reach globally
                with instant access to pre-negotiated rates & services, all with
                just one account.
              </p>
              {increaseYourSales.map((item, i) => {
                const { option } = item;
                return (
                  <div key={i} className="pb-4 flex items-center gap-4">
                    <AiOutlineCheck className="bg-[#FEF4E2] color4 rounded-full p-1 text-3xl" />
                    <p className="color8 text-lg">{option}</p>
                  </div>
                );
              })}
              <PrimaryButton className="mt-8">
                <Link to="/">Learn More</Link>
              </PrimaryButton>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 p100-section gap-16 ">
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="800"
              className="text-left order-one"
            >
              <h2 className="secondary-clr fw-600 sm:text-5xl tex-4xl max-w-[400px]">
                No Monthly Charges
              </h2>
              <p className="color8 leading-7 pt-6 pb-8 max-w-[450px]">
                Pay only for what you ship, not a penny more. Shyplite functions
                as your growth partner and not a liability. No subscription
                cost.
              </p>
              {NoMonthlyCharges.map((item, i) => {
                const { option } = item;
                return (
                  <div key={i} className="pb-4 flex items-center gap-4">
                    <AiOutlineCheck className="bg-[#FEF4E2] color4 rounded-full p-1 text-3xl" />
                    <p className="color8 text-lg">{option}</p>
                  </div>
                );
              })}
              <PrimaryButton className="mt-8">
                <Link to="/">Learn More</Link>
              </PrimaryButton>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <div>
                <div className="relative">
                  <img src={image2} alt="image" className="z-10 relative" />
                  <img
                    src={icon2}
                    alt="icon"
                    className="absolute top-0 left-[-30%]
                
              "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 p100-section gap-16 ">
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <div className="relative">
                <img src={image3} alt="image" className="relative z-10" />
                <img
                  src={icon3}
                  alt="icon"
                  className="absolute right-[-20%] top-[-15%] z-1"
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="800"
              className="text-left"
            >
              <h2 className="secondary-clr fw-600 sm:text-5xl text-4xl max-w-[400px]">
                Take inventory on
              </h2>
              <p className="color8 leading-7 pt-6 pb-8 max-w-[450px]">
                Easily identify packing (CP and PBO), add additional services,
                crating, and photos as you seamlessly navigate from room to
                room.
              </p>
              {TakeInventoryOn.map((item, i) => {
                const { option } = item;
                return (
                  <div key={i} className="pb-4 flex items-center gap-4">
                    <AiOutlineCheck className="bg-[#FEF4E2] color4 rounded-full p-1 text-3xl" />
                    <p className="color8 text-lg">{option}</p>
                  </div>
                );
              })}
              <PrimaryButton className="mt-8">
                <Link to="/">Learn More</Link>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingSection;
