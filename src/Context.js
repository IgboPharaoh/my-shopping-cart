import React, { createContext, useContext, useState } from "react";
import { faker } from '@faker-js/faker';

const CartContext = createContext();

const Context = ({ children }) => {
    const [cart, setCart] = useState([]);
    faker.seed(50);

  const productsArray = [...Array(20)].map((x) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));

  const [allProducts] = useState(productsArray);
  return (
    <CartContext.Provider value={{ cart, setCart, allProducts }}>
      { children }
    </CartContext.Provider>
  );
};

export const CartState = () => {
  return useContext(CartContext);
};

export default Context;
