import React from "react";
import { IntregrateSectionData } from "../../Data/data";

const IntegrateSection = () => {
  const { title, List, description } = IntregrateSectionData;
  return (
    <div className="bg-primary-clr p100-section">
      <div className="Wrapper">
        <h1 className="secondary-clr sm:text-4xl text-3xl fw-700 text-center max-w-[600px] sm:leading-[60px] m-auto">
          {title}
        </h1>
        <p className="text-center color8 m-auto max-w-[600px] py-6 leading-7 fw-500">
          {description}
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 pt-16">
          {List.map((item, i) => {
            return (
              <div key={i} className="bg-primary-clr p-10 bg-shadow">
                <img src={item.image} alt="image" />
                <h3 className="secondary-clr fw-700 text-3xl pt-8 pb-4">
                  {item.name}
                </h3>
                <p className="color8 leading-7 pt-2 max-w-[450px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IntegrateSection;
