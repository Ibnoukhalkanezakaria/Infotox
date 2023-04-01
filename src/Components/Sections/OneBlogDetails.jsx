import React from "react";
import image from "../../assets/Blog/imageDetails1.png";
import MoreBlogs from "../../Components/Sections/MoreBlogs";
import { useParams } from "react-router-dom";
import { LatestBlogsData } from "../../Data/data";

const OneBlogDetails = () => {
  const { latestBlogs } = LatestBlogsData;
  const { oneItem } = useParams();
  return (
    <div className="p50-section">
      <div className="max-w-[100%] w-[1000px] sm:px-[4rem] px-[2rem] m-auto">
        <p className="fw-500 color8 leading-7 pb-6 ">
          In fact, without a content marketing strategy in place, companies find
          it hard to put their brand before the public effectively. Due to the
          competitive modern business environment more and more companies are
          paying attention to content thrive.From publishing content and hoping
          to acquire leads to gaining audience insights and making personalized
          content, content marketing has come a long way. Those days are gone
          when brands used to ponder upon whether they should include content
          marketing in their overall marketing strategy.
        </p>
        <p className="fw-500 color8 leading-7 pb-6 ">
          Now, the paradigm has shifted. The question is not why you should
          include a content marketing strategy, but how you should do it has
          become the primary concern. Due to competitive modern startup business
          environment, more and more companies are paying attention to content
          marketing to thrive.
        </p>
        <p className="fw-500 color8 leading-7 pb-6 ">
          From publishing content and hoping to acquire leads to gaining
          audience insights and making personalized content, content marketing
          has come a long way. Those days are gone when brands used to ponder
          upon whether they should include content marketing in their overall
          marketing strategy. In fact, without a content marketing strategy in
          place, companies find it hard to put their brand before the public
          effectively. Due to the competitive modern business environment more
          and more companies are paying attention to content thrive.
        </p>
        <h2 className="secondary-clr pb-4 fw-600 fw-600 md:text-4xl text-3xl  sm:leading-[80px]">
          How do we get where we are
        </h2>
        <p className="fw-500 color8 leading-7  pb-6 ">
          From publishing content and hoping to acquire leads to gaining
          audience insights and making personalized content, content marketing
          has come a long way. Those days are gone when brands used to ponder
          upon whether they should include content marketing in their overall
          marketing strategy. In fact, without a content marketing strategy in
          place, companies find it hard to put their brand before the public
          effectively. Due to the competitive modern business environment more
          and more companies are paying attention to content thrive.
        </p>
        <p className="fw-500 color8 leading-7  pb-6 ">
          Now, the paradigm has shifted. The question is not why you should
          include a content marketing strategy, but how you should do it has
          become the primary concern. Due to competitive modern startup business
          environment, more and more companies are paying attention to content
          marketing to thrive.
        </p>
        <p className="fw-500 color8 leading-7  pb-6 ">
          Now, the paradigm has shifted. The question is not why you should
          include a content marketing strategy, but how you should do it has
          become the primary concern. Due to competitive modern startup business
          environment, more and more companies are paying attention to content
          marketing to thrive.
        </p>
        <img src={image} alt="image" className="rounded-2xl pb-6  " />
        <p className="fw-500 color8 leading-7  pb-6 ">
          Now, the paradigm has shifted. The question is not why you should
          include a content marketing strategy, but how you should do it has
          become the primary concern. Due to competitive modern startup business
          environment, more and more companies are paying attention to content
          marketing to thrive.
        </p>
        <p className="fw-500 color8 leading-7  pb-6 ">
          Now, the paradigm has shifted.
        </p>
        <ul className="list-disc pl-4">
          <li className=" fw-500 color8 leading-7 pb-3 ">
            The question is not why you should include a content marketing
            strategy.
          </li>
          <li className=" fw-500 color8 leading-7 pb-3 ">
            The question is not why you should include a content marketing
            strategy.
          </li>
          <li className="fw-500 color8 leading-7 pb-3 ">
            The question is not why you should include a content marketing
            strategy.
          </li>
          <li className="fw-500 color8 leading-7 pb-3 ">
            The question is not why you should include a content marketing
            strategy.
          </li>
        </ul>
        <p className="fw-500 color8 leading-7  pb-6 ">
          Now, the paradigm has shifted. The question is not why you should
          include a content marketing strategy, but how you should do it has
          become the primary concern. Due to competitive modern startup business
          environment, more and more companies are paying attention to content
          marketing to thrive.
        </p>
      </div>
      <MoreBlogs latestBlogs={latestBlogs} oneItem={oneItem} />
    </div>
  );
};

export default OneBlogDetails;
