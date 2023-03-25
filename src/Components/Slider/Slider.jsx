import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Pagination, Navigation, Scrollbar, A11y } from "swiper";

import { SliderData } from "../../Data/data";

import "./Slider.css";

import logo from "../../assets/Author.svg";

const Slider = () => {
  const { List } = SliderData;
  return (
    <div className="bg-secondary-clr p100-section overflow-hidden">
      <div className="Wrapper">
        <h2 className="sm:text-5xl text-4xl sm:leading-[80px] primary-clr fw-700">
          Why choose Infotox
        </h2>
        <p className="text-[#949AA6] leading-7 pt-8 pb-8 max-w-[450px]">
          The journey of your package from the warehouse to your customer's
          doorstep is the most overwhelming aspect of the entire selling cycle –
          Make it easy with Infonux.
        </p>
      </div>
      <div className="Wrapper pt-6 ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          className="slider-swiper overflow-visible"
        >
          {List.map((item, i) => {
            const { cmt, name, jobTitle } = item;
            return (
              <SwiperSlide key={i}>
                <div className="primary-clr w-[380px] bg-primary-clr p-10 rounded-3xl">
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
      </div>
    </div>
  );
};

export default Slider;