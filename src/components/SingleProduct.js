import React from "react";
import { CartState } from "../Context";
import "./styles.css";

const SingleProduct = ({ product }) => {
  const { cart, setCart } = CartState();
  return (
    <div className="singleProduct">
      <img src={product.image} alt="" className="product-image" />
      <div className="product-header">
        <p>{product.name}</p>
        <p>${product.price.substring(0, 3)}</p>
      </div>
      <div className="button-container">
        {cart.includes(product) ? (
          <button
            style={{ backgroundColor: "red" }}
            className="button"
            onClick={() => {
              setCart(cart.filter((x) => x.id !== product.id));
            }}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="button"
            onClick={() => {
              setCart([...cart, product]);
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
