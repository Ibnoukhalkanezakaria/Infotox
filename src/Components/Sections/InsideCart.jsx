import React from "react";
import { useGetStarted } from "../../Context/GetStartedContext";

import OneCart from "./OneCart";
import CheckOut from "./CheckOut";

const InsideCart = () => {
  const { items } = useGetStarted();

  return (
    <div>
      <div className="overflow-auto max-h-[300px]">
        {items.map((item) => {
          return <OneCart key={item.id} {...item} />;
        })}
      </div>
      <CheckOut />
    </div>
  );
};

export default InsideCart;
