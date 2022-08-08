import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import Cart from "./shared/Cart";

// Context
import { cartContext } from "../context/CartContextProvider";

// Styles
import "./ShopCart.scss";

const ShopCart = () => {
  const { cart, dispatch } = useContext(cartContext);
  const { sumQuantity, sumPrice, checkout } = cart;

  return (
    <div className="shopContainer">
      <div className="shopCartContainer">
        {cart.selectedItems.map((item) => (
          <Cart data={item} key={item.id} />
        ))}
      </div>
      {sumQuantity !== 0 && (
        <div className="shopPayments">
          <p>
            Total Items: <span>{sumQuantity}</span>
          </p>
          <p>
            Total Payments: <span>{sumPrice} $</span>
          </p>
          <div className="shopButtonContainer">
            <button
              className="shopClear"
              onClick={() => dispatch({ type: "CLEAR", payload: cart })}
            >
              Clear
            </button>
            <button
              className="shopCheckout"
              onClick={() => dispatch({ type: "CHECKOUT", payload: cart })}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
      {sumQuantity === 0 && !checkout && (
        <div className="shopComplete">
          <h3>Want To Buy More?</h3>
          <Link to="/products">Go To Shop</Link>
        </div>
      )}
      {checkout && (
        <div className="shopComplete">
          <h3>Checked Out Seccessfully</h3>
          <Link to="/product">Buy More</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
