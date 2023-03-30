import { createContext, useState, useContext } from "react";
import ItemsInCart from "../Components/Sections/ItemsInCart";

const GetStartedContext = createContext({});

const GetStartedProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // getItemsQuantity
  const getItemsQuantity = (id) => {
    return items.find((e) => e.id === id)?.quantity || 0;
  };

  // addToCart
  const addToCart = (id) => {
    setItems((currItems) => {
      if (currItems.find((e) => e.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((e) => {
          if (e.id == id) {
            return { ...e, quantity: e.quantity + 1 };
          } else {
            return e;
          }
        });
      }
    });
  };

  // decreaseCartQuantity
  const decreaseCartQuantity = (id) => {
    setItems((currItems) => {
      if (currItems.find((e) => e.id === id) == null) {
        return currItems.filter((e) => e.id !== id);
      } else {
        return currItems.map((e) => {
          if (e.id == id) {
            return { ...e, quantity: e.quantity - 1 };
          } else {
            return e;
          }
        });
      }
    });
  };

  // removeItem
  const removeItem = (id) => {
    setItems((currItems) => currItems.filter((e) => e.id !== id));
  };
  return (
    <GetStartedContext.Provider
      value={{
        items,
        getItemsQuantity,
        addToCart,
        decreaseCartQuantity,
        removeItem,
      }}
    >
      {children}
      <ItemsInCart />
    </GetStartedContext.Provider>
  );
};

export default GetStartedProvider;

export const useGetStarted = () => {
  return useContext(GetStartedContext);
};
