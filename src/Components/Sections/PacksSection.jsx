import React from "react";
import { PacksSectionData } from "../../Data/data";
import { useGetStarted } from "../../Context/GetStartedContext";

const PacksSection = () => {
  const { List } = PacksSectionData;
  const { increaseCartQuantity } = useGetStarted();
  return (
    <div className="mt-[-10%] p100-section">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="500"
        className="Wrapper  grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10"
      >
        {List.map((item) => {
          const { plan, price, id, description } = item;
          const itemId = id;
          return (
            <div
              key={id}
              style={{
                backgroundColor: `${itemId == 2 ? "#466EF0" : "#FFFFFF"}`,
              }}
              className={" bg-shadow2 rounded-2xl p-10"}
            >
              <span
                className="text-xl fw-500"
                style={{ color: `${itemId == 2 ? "white" : "#575F72"}` }}
              >
                {plan}
              </span>
              <div>
                <h1
                  className={`text-4xl ${
                    itemId == 2 ? "primary-clr" : "secondary-clr"
                  } fw-600`}
                >
                  {price}
                  <span className="text-3xl">/Per Month</span>
                </h1>
                <p
                  className="leading-8 max-w-[300px] fw-500"
                  style={{ color: `${itemId == 2 ? "white" : "#575F72"}` }}
                >
                  {description}{" "}
                </p>
                <button
                  onClick={() => increaseCartQuantity(id)}
                  className={`mt-6 ${
                    itemId == 2
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
