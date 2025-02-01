import { createContext, useContext, useState } from "react";
import { CollectionContext } from "./CollectionProvider";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemsOnCart, setItemsOnCart] = useState({});
  const { collections } = useContext(CollectionContext);

  const addNewItem = (id) => {
    const newItem = collections.filter((item) => {
      if (item.ultIId === id) {
        item.unit = 1;
        return item;
      }
    })[0];

    setItemsOnCart((cItems) => ({ ...cItems, [id]: true }));
    setCart((cItems) => [newItem, ...cItems]);
  };

  return (
    <CartContext.Provider value={{ cart, addNewItem, itemsOnCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("The CartContext was used outside of its parent component");

  return context;
};
