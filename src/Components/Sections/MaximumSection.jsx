import React from "react";
import image1 from "../../assets/maximum/img1.svg";
import image2 from "../../assets/maximum/img2.svg";
import icon1 from "../../assets/maximum/icon1.svg";
import icon2 from "../../assets/maximum/icon2.svg";
import { MaximumSectionData } from "../../Data/data";
import { AiOutlineCheck } from "react-icons/ai";

const MaximumSection = () => {
  const { options } = MaximumSectionData;
  return (
    <div className="p50-section bg-secondary-clr overflow-hidden">
      <div className="Wrapper2  flex justify-center flex-row m-auto">
        <div className="m-auto md:grid-cols-2 grid-cols-1 items-center grid justify-center  p100-section gap-8 ">
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <h2 className="primary-clr fw-600 sm:text-5xl text-4xl sm:leading-[80px] max-w-[500px]">
              Get maximum growth with us
            </h2>
            <p className="text-[#949AA6] leading-7 pt-8 pb-8 max-w-[450px]">
              The journey of your package from the warehouse to your customer's
              doorstep is the most overwhelming aspect of the entire selling
              cycle – Make it easy with Infonux.
            </p>
            {options.map((item, i) => {
              const { option } = item;
              return (
                <div key={i} className="pb-4 flex items-center gap-4">
                  <AiOutlineCheck className="bg-[#3E434D] primary-clr rounded-full p-1 text-3xl" />
                  <p className="text-[#949AA6] text-lg">{option}</p>
                </div>
              );
            })}
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="800"
            className="relative rounded-3xl bg-[#F5F7FB]  h-[550px] max-w-[100%] w-[550px]"
          >
            <img
              src={image1}
              alt="image"
              className="rounded-3xl z-40 absolute top-[10%] left-[-10%]"
            />
            <div className="flex justify-center">
              <img
                src={image2}
                alt="image"
                className="rounded-3xl absolute bottom-10 w-[90%]
          "
              />
            </div>
            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="300"
              src={icon1}
              alt=""
              className="absolute bottom-0 left-[-15%]"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="300"
              src={icon2}
              alt=""
              className="absolute right-0 top-[-10%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaximumSection;
