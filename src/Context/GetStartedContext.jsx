import { createContext, useState, useContext, useEffect } from "react";

const GetStartedContext = createContext({});

const intialItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];

const GetStartedProvider = ({ children }) => {
  const [items, setItems] = useState(intialItems);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(items));
  }, [items]);

  // cartQuantity
  const cartQuantity = items.reduce((quantity, e) => e.quantity + quantity, 0);

  // getItemsQuantity
  const getItemsQuantity = (id) => {
    return items.find((e) => e.id === id)?.quantity || 0;
  };

  // increaseCartQuantity
  const increaseCartQuantity = (id) => {
    setItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
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
          if (e.id === id) {
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
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItem,
        cartQuantity,
      }}
    >
      {children}
    </GetStartedContext.Provider>
  );
};

export default GetStartedProvider;

export const useGetStarted = () => {
  return useContext(GetStartedContext);
};
