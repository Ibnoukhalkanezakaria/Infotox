import React from "react";
import image1 from "../../assets/Easy/image.png";
import icon1 from "../../assets/Easy/icon1.svg";
import PrimaryButton from "../Buttons/PrimaryButton";

const EasySection = () => {
  return (
    <div className="p50-section bg-primary-clr overflow-hidden">
      <div className="Wrapper2  flex justify-center flex-row m-auto">
        <div className="m-auto md:grid-cols-2 grid-cols-1 items-center grid justify-center  p100-section gap-6 ">
          <div>
            <h2 className="secondary-clr fw-600 fw-600 text-5xl max-w-[500px] leading-[80px]">
              Ship easy with our framework
            </h2>
            <p className="color8 leading-7 pt-8 pb-8 max-w-[450px]">
              Enable native integrations with your marketing platforms and ship
              seamlessly using the best carrier partner for your business.
            </p>
            <PrimaryButton>See how we help</PrimaryButton>
          </div>
          <div>
            <div className="relative">
              <img
                src={image1}
                alt="image"
                className="rounded-3xl h-[400px] w-[800px]"
              />
              <img
                src={icon1}
                alt="icon"
                className="absolute left-[-10%] top-[-10%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasySection;
