import React from "react";
import { Link } from "react-router-dom";
import { LatestBlogsData } from "../../Data/data";

const MoreBlogs = () => {
  // console.log(oneItem);
  const { latestBlogs, title, description } = LatestBlogsData;
  const { oneItem } = useParams();
  const item = LatestBlogsData.find((e) => e.id === oneItem);
  // const { imageCard, title, description, latestBlogs } = item;
  return (
    <div className="bg-primary-clr p100-section">
      <div className="Wrapper">
        <h1 className="secondary-clr sm:text-5xl text-4xl max-w-[500px] fw-600">
          Read more such blogs
        </h1>
        <div className="flex sm:justify-start justify-center">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10">
            {latestBlogs
              .map((item) => {
                const { imageCard, title, description, id } = item;
                return (
                  <Link to={`/${oneItem}`}>
                    <div key={oneItem}>
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
              })
              .slice(0, 3)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreBlogs;
