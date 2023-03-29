import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import icon1 from "../../assets/Slider/icon1.svg";
import icon2 from "../../assets/Slider/icon2.svg";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Pagination, Navigation, Scrollbar, A11y } from "swiper";

import { SliderData } from "../../Data/data";

import logo from "../../assets/Author.svg";

const Slider = () => {
  const { List } = SliderData;

  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };
  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  return (
    <div className="bg-secondary-clr p100-section overflow-hidden">
      <div className="Wrapper">
        <h2 className="sm:text-5xl text-4xl sm:leading-[80px] primary-clr fw-700">
          Why choose Infotox
        </h2>
        <p className="text-[#949AA6] leading-7 pt-8 pb-14 max-w-[450px]">
          The journey of your package from the warehouse to your customer's
          doorstep is the most overwhelming aspect of the entire selling cycle –
          Make it easy with Infonux.
        </p>
      </div>
      <div className="Wrapper relative ">
        <img
          src={icon1}
          alt="icon"
          className="left-[60%] absolute top-[-15%]"
        />
        <img
          src={icon2}
          alt="icon"
          className="absolute left-[-5%] bottom-[-15%]"
        />
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          className="slider-swiper flex gap-4 overflow-visible"
          navigation={false}
          ref={SlideRef}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            390: {
              slidesPerView: 1,
            },
            502: {
              slidesPerView: 1.5,
            },
            802: {
              slidesPerView: 2.5,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {List.map((item, i) => {
            const { cmt, name, jobTitle } = item;
            return (
              <SwiperSlide key={i}>
                <div className="mt-8 primary-clr w-full sm:max-w-[400px] bg-primary-clr p-10 rounded-3xl">
                  <q className="secondary-clr text-lg fw-600 leading-7">
                    {cmt}
                  </q>
                  <div className="flex pt-6 items-center gap-4">
                    <div>
                      <img src={logo} alt="" />
                    </div>
                    <div>
                      <span className="secondary-clr block pb-1 fw-600 text-lg">
                        {name}
                      </span>
                      <span className="secondary-clr color8">{jobTitle}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex gap-6 absolute right-0 top-[-20%]">
          <div
            onClick={() => handlePrev()}
            className={`cursor-pointer  border border-[var(--primary-clr)] rounded-full w-[50px] h-[50px] flex items-center justify-center`}
          >
            <BsArrowLeft className={`primary-clr fw-700 text-2xl `} />
          </div>
          <div
            onClick={() => handleNext()}
            className={`cursor-pointer  border border-[var(--primary-clr)] rounded-full w-[50px] h-[50px] flex items-center justify-center`}
          >
            <BsArrowRight className={`primary-clr fw-700 text-2xl  `} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
