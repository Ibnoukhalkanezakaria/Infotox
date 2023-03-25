import React from "react";
import { RunsSectionData } from "../../../Data/data";
import { AiOutlineCheck } from "react-icons/ai";

const RunsSection = () => {
  const { title, description, image, List } = RunsSectionData;
  return (
    <div className="bg-primary-clr p100-section">
      <div className="Wrapper">
        <h1 className="secondary-clr fw-600 sm:text-5xl text-4xl sm:leading-[80px] max-w-[600px]">
          {title}
        </h1>
        <p className="color8 max-w-[600px] leading-7 fw-500">{description}</p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-14 pt-16 items-center">
          <div>
            <img src={image} alt="image" />
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
            {List.map((item, i) => {
              const { name, description } = item;
              return (
                <div key={i} className="">
                  <span className="flex gap-3 items-center">
                    <div>
                      <AiOutlineCheck className="bg-[#FEF4E2] color4 rounded-full p-1 text-3xl" />
                    </div>
                    <div className="secondary-clr text-xl fw-600">{name}</div>
                  </span>
                  <p className="pt-5 color8 m-auto max-w-[400px] py-6 leading-8 fw-500">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunsSection;
