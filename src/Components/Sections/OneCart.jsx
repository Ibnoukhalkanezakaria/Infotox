import React from "react";
import { PacksSectionData } from "../../Data/data";
import { useGetStarted } from "../../Context/GetStartedContext";

const OneCart = ({ id }) => {
  const {
    getItemsQuantity,
    removeItem,
    decreaseCartQuantity,
    increaseCartQuantity,
  } = useGetStarted();

  const { List } = PacksSectionData;
  const oneItem = List.find((i) => i.id === id);
  if (oneItem == null) return null;
  const quantity = getItemsQuantity(id);
  return (
    <>
      <div className="px-8 py-8 border-b-[1px] border-[#d1d6e479]">
        <div className="flex justify-between items-center">
          <div>
            <span className="pb-3 secondary-clr fw-600 text-lg block">
              {oneItem.plan}
            </span>
            <span className="pb-3 secondary-clr fw-500 text-md block">
              {oneItem.price} USD x{" "}
              <span className="font-sm text-[11px]">{quantity}</span>
            </span>
          </div>
          <div className="flex gap-6">
            <button
              className="secondary-clr fw-400 text-lg"
              onClick={() => decreaseCartQuantity(oneItem.id)}
            >
              -
            </button>
            <span className="secondary-clr fw-600 text-lg">
              {quantity < 1 ? removeItem(oneItem.id) : quantity}
            </span>
            <button
              className="secondary-clr fw-400 text-lg"
              onClick={() => increaseCartQuantity(oneItem.id)}
            >
              +
            </button>
          </div>
        </div>
        <button
          className="color8 underline"
          onClick={() => removeItem(oneItem.id)}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default OneCart;
