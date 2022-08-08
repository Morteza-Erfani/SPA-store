import React, { useContext } from "react";

// Components
import Product from "./shared/Product";

// Styles
import "./Store.scss";

// Context
import { productContext } from "../context/ProductContextProvider";

const Store = () => {
  const products = useContext(productContext);

  return (
    <div className="storeContainer">
      {products.map((product) => (
        <Product data={product} key={product.id} />
      ))}
    </div>
  );
};

export default Store;
