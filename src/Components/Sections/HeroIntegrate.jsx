import React, { useEffect, useState } from "react";
import { HeroIntegrateData } from "../../Data/data";
import icon1 from "../../assets/Intregrate/icon1.svg";
import icon2 from "../../assets/Intregrate/icon2.svg";

const HeroIntegrate = () => {
  const { title, description } = HeroIntegrateData;

  const [submited, setSubmited] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmited(true);
  };

  return (
    <div className="bg-secondary-clr p100-section overflow-hidden">
      <div className="Wrapper text-center relative">
        <img src={icon1} alt="icon1" className="absolute   left-0 top-[20%]" />
        <img src={icon2} alt="icon1" className="absolute right-0 top-12" />
        <h1 className="relative z-40 primary-clr fw-600 md:text-5xl text-3xl m-auto max-w-[800px]">
          {title}
        </h1>
        <p className="relative z-40 color7 m-auto max-w-[500px] py-6 leading-7 fw-500">
          {description}
        </p>
        <div className="max-w-[100%]">
          {submited ? (
            <p className="bg-color3 primary-clr max-w-[330px] m-auto py-4 px-8 fw-500 text-md rounded-2xl">
              Thanks for the request 🎉
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex justify-center pt-8">
              <div className="flex md:flex-row flex-col gap-4  w-[350px]  max-w-[100%]">
                <input
                  type="text"
                  placeholder="Entre app name"
                  required
                  className="bg-transparent md:focus:text-left focus:text-center border focus:text-white border-[#3B424D] rounded-2xl focus:outline-none placeholder:text-[#59606B] placeholder:bg-transparent md:placeholder:text-left placeholder:text-center p-4 "
                />
                <input
                  type="submit"
                  value={`${submited ? "Please Wait ..." : "Request now"} `}
                  className="md:ml-[-50px] w-full md:w-auto bg-color3 cursor-pointer primary-clr py-4 px-4 fw-500 text-md rounded-2xl duration-300"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroIntegrate;
