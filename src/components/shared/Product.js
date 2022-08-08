import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { cartContext } from "../../context/CartContextProvider";

// Functions
import { quantityCount } from "../../helpers/functions";

// Icons
import trashIcon from "../../assets/icons8-trash.svg";

// Styles
import "./Product.scss";

const Product = ({ data }) => {
  const { cart, dispatch } = useContext(cartContext);
  const { title, price, images, id, category } = data;
  const quantity = quantityCount(cart, id);

  return (
    <div className="proContainer">
      <img className="proCardImage" src={images[0]} alt={title} />
      <h3>{title}</h3>
      <p>{category.name}</p>
      <p>{price}$</p>
      <div className="proLinkContainer">
        <Link to={`/products/${id}`}>Details</Link>
        <div className="proButtonContainer">
          {quantity === 1 && (
            <button
              className="proSmallButton"
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
            >
              <img src={trashIcon} alt="trash" />
            </button>
          )}
          {quantity > 1 && (
            <button
              className="proSmallButton"
              onClick={() => dispatch({ type: "DECREASE", payload: data })}
            >
              -
            </button>
          )}
          {quantity > 0 && <p>{quantity}</p>}
          {quantity > 0 && (
            <button
              className="proSmallButton"
              onClick={() => dispatch({ type: "INCREASE", payload: data })}
            >
              +
            </button>
          )}
          {!quantity && (
            <button
              onClick={() => dispatch({ type: "ADD_ITEM", payload: data })}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
