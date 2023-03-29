import React from "react";
import { PacksSectionData } from "../../Data/data";

const PacksSection = () => {
  const { List } = PacksSectionData;
  return (
    <div className="mt-[-10%] p100-section">
      <div className="Wrapper grid grid-cols-3 gap-8">
        {List.map((item, i) => {
          const { plan, price, description } = item;
          const index = i;
          return (
            <div
              key={i}
              style={{
                backgroundColor: `${index == 1 ? "#466EF0" : "#FFFFFF"}`,
              }}
              className={" rounded-2xl p-10"}
            >
              <span
                className="text-xl fw-500"
                style={{ color: `${index == 1 ? "white" : "#575F72"}` }}
              >
                {plan}
              </span>
              <div>
                <h1
                  className={`text-4xl ${
                    index == 1 ? "primary-clr" : "secondary-clr"
                  } fw-600`}
                >
                  {price}
                  <span className="text-3xl">/Per Month</span>
                </h1>
                <p
                  className="leading-8 max-w-[300px] fw-500"
                  style={{ color: `${index == 1 ? "white" : "#575F72"}` }}
                >
                  {description}{" "}
                </p>
                <button
                  className={`mt-6 ${
                    index == 1
                      ? "secondary-clr bg-primary-clr"
                      : "primary-clr bg-color3"
                  } py-6 px-8 fw-600 text-lg rounded-2xl hover:opacity-70 duration-300`}
                >
                  Get Started
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PacksSection;
