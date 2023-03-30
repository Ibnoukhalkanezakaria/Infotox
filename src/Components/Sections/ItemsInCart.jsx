import React from "react";
import { useGetStarted } from "../../Context/GetStartedContext";
import ItemsInCartContent from "../../Components/Sections/ItemsInCartContent";
const ItemsInCart = () => {
  const { items } = useGetStarted();
  return (
    <div>
      {items.map((item) => {
        <ItemsInCartContent key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ItemsInCart;
