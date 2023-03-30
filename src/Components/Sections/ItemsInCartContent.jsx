import React from "react";
import { PacksSectionData } from "../../Data/data";

const ItemsInCartContent = ({ id, quantity }) => {
  const { List } = PacksSectionData;
  const item = List.find((e) => e.id === id);
  if (item == null) return null;
  return (
    <div>
      <span>{item.plan}</span>
      <span>{item.price} </span>
    </div>
  );
};

export default ItemsInCartContent;
