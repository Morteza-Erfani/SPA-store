import React, { createContext, useReducer } from "react";

export const userContext = createContext();

const initialUser = {
  name: "",
  email: "",
  login: false,
};

const userReducer = (user, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(user);
      return {
        name: action.payload.name,
        email: action.payload.email,
        login: true,
      };

    case "LOGOUT":
      return {
        name: "",
        email: "",
        login: false,
      };
    default:
      return initialUser;
  }
};

const UserContextProvider = ({ children }) => {
  const [user, userdispatch] = useReducer(userReducer, initialUser);

  return (
    <div>
      <userContext.Provider value={{ user, userdispatch }}>
        {children}
      </userContext.Provider>
    </div>
  );
};

export default UserContextProvider;
