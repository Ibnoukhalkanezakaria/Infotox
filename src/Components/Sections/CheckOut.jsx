import React, { useState } from "react";

import PrimaryButton from "../Buttons/PrimaryButton";

import { PacksSectionData } from "../../Data/data";
import { useGetStarted } from "../../Context/GetStartedContext";
const CheckOut = () => {
  const [disabled, setdisabled] = useState(false);
  const { List } = PacksSectionData;
  const { items } = useGetStarted();
  return (
    <div className="py-10 px-8">
      <div className="flex justify-between">
        <div>
          <span>Subtotal : </span>
        </div>
        <div>
          <span className="secondary-clr fw-600 text-lg block">
            $
            {items.reduce((total, cartItem) => {
              const item = List.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)}
          </span>
        </div>
      </div>
      <PrimaryButton
        onClick={() => setdisabled(true)}
        className="flex justify-center m-auto mt-8 w-full"
      >
        Continue to Checkout
      </PrimaryButton>

      <p
        className={`text-center pt-6 text-[#DC4544] ${
          disabled ? "block" : "hidden"
        }`}
      >
        Checkout is disabled on this site.
      </p>
    </div>
  );
};

export default CheckOut;
