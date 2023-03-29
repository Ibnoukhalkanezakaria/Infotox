import React from "react";
import { useParams } from "react-router-dom";
import { LatestBlogsData } from "../../Data/data";
import icon1 from "../../assets/Blog/icon1.svg";
import icon2 from "../../assets/Blog/icon2.svg";
const HeroOneBlog = () => {
  const { latestBlogs } = LatestBlogsData;
  const { oneItem } = useParams();
  const item = latestBlogs.find((e) => e.id === oneItem);
  const { imageCard, title, description } = item;
  return (
    <div className="bg-secondary-clr p100-section overflow-hidden">
      <div className="Wrapper text-center relative">
        <img src={icon1} alt="icon1" className="absolute right-0 top-12" />
        <img src={icon2} alt="icon1" className="absolute left-0 top-[20%]" />
        <h1 className="relative z-40 primary-clr fw-600 md:text-5xl text-3xl m-auto max-w-[800px]">
          {title}
        </h1>
        <p className="pb-[100px] relative z-40 color7 m-auto max-w-[500px] py-6 leading-7 fw-500">
          {description}
        </p>
        <img
          src={imageCard}
          alt="image"
          className="rounded-2xl w-[900px] m-auto "
        />
      </div>
    </div>
  );
};

export default HeroOneBlog;
