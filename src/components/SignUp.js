import React, { useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

// Context
import { userContext } from "../context/UserContextProvider";
import { cartContext } from "../context/CartContextProvider";

// Styles
import "./SignUp.scss";

// Functions
import { validate } from "../helpers/validate";

const SignUp = () => {
  const { user, userdispatch } = useContext(userContext);
  const { dispatch } = useContext(cartContext);
  console.log(user);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const loginData = {
    name: data.name,
    email: data.email,
  };

  const [focus, setFocus] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validate(data));
  }, [data, focus]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setFocus({ ...focus, [event.target.name]: true });
  };

  const signUpHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      toast.success("You signed up successfully");
    } else {
      toast.error("Invalid data!");
    }
  };

  const loginHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      userdispatch({ type: "LOGIN", payload: loginData });
      console.log("hi");
    }
  };

  const logOutHandler = (event) => {
    event.preventDefault();
    userdispatch({ type: "LOGOUT", payload: loginData });
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className="signContainer">
      {!user.login ? (
        <>
          <form className="SignFormContainer">
            <h1 className="signHeader">Sign Up</h1>
            <div className="signFormField">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={changeHandler}
                onFocus={focusHandler}
                className={
                  errors.name && focus.name
                    ? "signUncompleted"
                    : "signFormInput"
                }
              ></input>
              {errors.name && focus.name && <span>{errors.name}</span>}
            </div>
            <div className="signFormField">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={changeHandler}
                onFocus={focusHandler}
                className={
                  errors.email && focus.email
                    ? "signUncompleted"
                    : "signFormInput"
                }
              ></input>
              {errors.email && focus.email && <span>{errors.email}</span>}
            </div>
            <div className="signFormField">
              <label>password</label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={changeHandler}
                onFocus={focusHandler}
                className={
                  errors.password && focus.password
                    ? "signUncompleted"
                    : "signFormInput"
                }
              ></input>
              {errors.password && focus.password && (
                <span>{errors.password}</span>
              )}
            </div>
            <div className="signFormField">
              <label>confirm password</label>
              <input
                type="password"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={changeHandler}
                onFocus={focusHandler}
                className={
                  errors.confirmPassword && focus.confirmPassword
                    ? "signUncompleted"
                    : "signFormInput"
                }
              ></input>
              {errors.confirmPassword && focus.confirmPassword && (
                <span>{errors.confirmPassword}</span>
              )}
            </div>
            <div className="signFormField">
              <div className="signCheckBoxContainer">
                <label>I accepted term od privecy policy</label>
                <input
                  type="checkbox"
                  name="isAccepted"
                  value={data.isAccepted}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                ></input>
                {errors.isAccepted && focus.isAccepted && (
                  <span>{errors.isAccepted}</span>
                )}
              </div>
            </div>
            <div className="signFormButton">
              <button onClick={loginHandler}>Login</button>
              <button onClick={signUpHandler}>Sign Up</button>
            </div>
          </form>
          <ToastContainer />
        </>
      ) : (
        <div className="signLogged">
          <h3>You're Logged In</h3>
          <div className="signLoggedButton">
            <Link to="/products">Back To Shop</Link>
            <button onClick={logOutHandler}>Log Out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
