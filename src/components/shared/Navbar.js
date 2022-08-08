import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Icons
import cartIcon from "../../assets/shopping-cart-2030.svg";

// Context
import { cartContext } from "../../context/CartContextProvider";

// Styles
import "./Navbar.scss";

const Navbar = () => {
  const { cart } = useContext(cartContext);

  return (
    <div className="navMainContainer">
      <div className="navContainer">
        <Link className="navProductLink" to="/products">
          Products
        </Link>
        <div className="navIconContainer">
          <Link className="navProductLink" to="/signup">
            Login/Sign Up
          </Link>
          <Link to="/cart">
            <img src={cartIcon} alt="cart" />
          </Link>
          <span>{cart.sumQuantity}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
