import React from "react";
import { useGetStarted } from "../../Context/GetStartedContext";
import { PacksSectionData } from "../../Data/data";

const InsideCart = () => {
  const { List } = PacksSectionData;
  const { items, removeItem, decreaseCartQuantity, increaseCartQuantity } =
    useGetStarted();
  return (
    <div>
      <div>
        {items.map((item) => {
          const oneItem = List.find((i) => i.id === item.id);
          if (oneItem == null) return null;
          const { plan, price, description, id } = oneItem;
          return (
            <div key={item.id}>
              <div className="px-8 py-8 border-b-[1px] border-[#d1d6e479]">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="pb-3 secondary-clr fw-600 text-lg block">
                      {plan}
                    </span>
                    <span className="pb-3 secondary-clr fw-500 text-md block">
                      {price} USD
                    </span>
                  </div>
                  <div className="flex gap-6">
                    <button
                      className="secondary-clr fw-400 text-lg"
                      onClick={() => decreaseCartQuantity(id)}
                    >
                      -
                    </button>
                    <span className="secondary-clr fw-600 text-lg">
                      {item.quantity < 1 ? removeItem(id) : item.quantity}
                    </span>
                    <button
                      className="secondary-clr fw-400 text-lg"
                      onClick={() => increaseCartQuantity(id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="color8 underline"
                  onClick={() => removeItem(id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InsideCart;
