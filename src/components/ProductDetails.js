import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

// Context
import { productContext } from "../context/ProductContextProvider";

// Styles
import './ProducrDetails.scss'

const ProductDetails = () => {
  const products = useContext(productContext);
  const param = useParams();
  const index = param.id - 1;
  const data = products[index];
  console.log(data);
  const { title, price, description, category, image } = data;

  return (
    <div className="detContainer">
      <img className="detImage" src={image} alt="product" />
      <div className="detTextContainer">
        <h3>{title}</h3>
        <p className="detDescription">{description}</p>
        <p className="detCategory">
          category: <span>{category.name}</span>
        </p>
        <div className="detButtonContainer">
          <span className="detPrice">{price} $</span>
          <Link to="/products">Back To Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
