import React, { useEffect, useState } from "react";
import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";
import "./styles.css";

const CartPage = () => {
  const { cart } = CartState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <div>
      <h5>total Price:${total}</h5>
      <div className="selected-products">
        {cart.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
