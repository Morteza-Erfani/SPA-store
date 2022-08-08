import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Icons
import cartIcon from "../../assets/shopping-cart-2030.svg";

// Context
import { cartContext } from "../../context/CartContextProvider";
import { userContext } from "../../context/UserContextProvider";

// Styles
import "./Navbar.scss";

const Navbar = () => {
  const { cart } = useContext(cartContext);
  const { user } = useContext(userContext);
  const { name, email, login } = user;

  return (
    <div className="navMainContainer">
      <div className="navContainer">
        <Link className="navProductLink" to="/products">
          Products
        </Link>
        <div className="navIconContainer">
          {!login ? (
            <Link className="navLoginLink" to="/signup">
              Login
            </Link>
          ) : (
            <Link className="navNameLink" to="/signup">
              {name} <span className="navEmail">{email}</span>
            </Link>
          )}
          <Link to="/cart">
            <img src={cartIcon} alt="cart" />
          </Link>
          <span className="navQuantity" >{cart.sumQuantity}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
