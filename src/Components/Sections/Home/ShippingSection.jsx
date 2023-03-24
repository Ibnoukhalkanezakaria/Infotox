import React from "react";
import { Link } from "react-router-dom";
import { ShippingSectionData } from "../../../Data/data";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { AiOutlineCheck } from "react-icons/ai";
import image1 from "../../../assets/Shipping/image1.svg";
import image2 from "../../../assets/Shipping/image2.svg";
import image3 from "../../../assets/Shipping/image3.svg";

const ShippingSection = () => {
  const {
    title,
    description,
    increaseYourSales,
    NoMonthlyCharges,
    TakeInventoryOn,
  } = ShippingSectionData;
  return (
    <div className="bg-primary-clr p120-section">
      <div className="Wrapper2 mx-auto text-center">
        <h1 className="secondary-clr fw-600 md:text-5xl text-3xl m-auto max-w-[700px]">
          {title}
        </h1>
        <p className="color8 m-auto max-w-[500px] py-6 leading-7 fw-500">
          {description}
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 p100-section gap-8 ">
          <div className="">
            <img src={image1} alt="image" />
          </div>
          <div className="text-left">
            <h2 className="secondary-clr fw-600 text-4xl max-w-[400px]">
              Increase your sales
            </h2>
            <p className="color8 leading-7 pt-4 pb-8 max-w-[450px]">
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
        <div className="grid md:grid-cols-2 grid-cols-1 p100-section gap-8 ">
          <div className="text-left">
            <h2 className="secondary-clr fw-600 text-4xl max-w-[400px]">
              Increase your sales
            </h2>
            <p className="color8 leading-7 pt-4 pb-8 max-w-[450px]">
              Employ a powerful courier network and expand your reach globally
              with instant access to pre-negotiated rates & services, all with
              just one account.
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
          <div className="">
            <img src={image2} alt="image" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 p100-section gap-8 ">
          <div className="">
            <img src={image3} alt="image" />
          </div>
          <div className="text-left">
            <h2 className="secondary-clr fw-600 text-4xl max-w-[400px]">
              Increase your sales
            </h2>
            <p className="color8 leading-7 pt-4 pb-8 max-w-[450px]">
              Employ a powerful courier network and expand your reach globally
              with instant access to pre-negotiated rates & services, all with
              just one account.
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
  );
};

export default ShippingSection;
