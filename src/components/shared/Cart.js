import React, { useContext } from "react";

// Icons
import trashIcon from "../../assets//icons8-trash.svg";

// Context
import { cartContext } from "../../context/CartContextProvider";

// Styles
import './Cart.scss'

const Cart = ({ data }) => {
  const { dispatch } = useContext(cartContext);
  const { images, title, price, quantity } = data;

  return (
    <div className="cartContainer">
      <img className="cartProductImage" src={images[0]} alt="product" />
      <div className="cartData">
        <h3>{title}</h3>
        <p>{price}$</p>
      </div>
      <div>
        <span className="cartQuantity">{quantity}</span>
      </div>
      <div className="cartButtonContainer">
        {quantity === 1 && (
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
          >
            <img src={trashIcon} alt="trash" />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => dispatch({ type: "DECREASE", payload: data })}>
            -
          </button>
        )}
        <button onClick={() => dispatch({ type: "INCREASE", payload: data })}>
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
