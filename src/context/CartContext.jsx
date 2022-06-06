import React, { createContext,useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products,setData]=useState([]);
  const [cart,setCart]=useState([]);
  return <CartContext.Provider value={{products,setData,cart,setCart}}>{children}</CartContext.Provider>;
};
