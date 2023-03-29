import React from "react";
import { Link } from "react-router-dom";
import { LatestBlogsData } from "../../Data/data";

const LatestBlogs = () => {
  const { latestBlogs, title, description } = LatestBlogsData;
  return (
    <div className="bg-primary-clr p100-section">
      <div className="Wrapper">
        <h1 className="secondary-clr sm:text-5xl text-4xl max-w-[500px] fw-600">
          {title}
        </h1>
        <p className="max-w-[400px] leading-7 color8 fw-500">{description}</p>
        <div className="flex sm:justify-start justify-center">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10">
            {latestBlogs.map((item) => {
              const { imageCard, title, description, id } = item;
              return (
                <Link to={`/blog/${id}`}>
                  <div key={id}>
                    <div className="overflow-hidden rounded-2xl border border-orange max-w-[380px]">
                      <img
                        src={imageCard}
                        alt=""
                        className="hover:scale-110 duration-300 w-[380px]"
                      />
                    </div>
                    <h2 className="secondary-clr pt-4 pb-3 leading-8 text-2xl max-w-[300px] fw-600">
                      {title}
                    </h2>
                    <p className="max-w-[400px] leading-7 color8 fw-500">
                      {description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
