import React, { createContext, useReducer } from "react";

// Functions
import { getPrevUser } from "../helpers/functions";

export const userContext = createContext();

const initialUser = getPrevUser();

const userReducer = (user, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(user);
      const localData = {
        name: action.payload.name,
        email: action.payload.email,
        login: true,
      };
      localStorage.setItem("user", JSON.stringify(localData));
      return {
        ...localData,
      };

    case "LOGOUT":
      localStorage.removeItem("user");
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
