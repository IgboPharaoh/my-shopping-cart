import React from "react";
import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";
import './styles.css'

const Home = () => {
  const { allProducts } = CartState();
  return (
    <div>
      <div className="products-container">
        {allProducts.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
