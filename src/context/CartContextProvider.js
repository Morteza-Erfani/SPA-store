import React, { createContext, useReducer } from "react";

const sumItems = (items) => {
  const sumQuantity = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const sumPrice = items.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

  return { sumQuantity, sumPrice };
};
export const cartContext = createContext();

const initianCart = {
  selectedItems: [],
  sumQuantity: 0,
  sumPrice: 0,
  checkout: false,
};

const cartReducer = (cart, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!cart.selectedItems.find((item) => item.id === action.payload.id)) {
        cart.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        selectedItems: [...cart.selectedItems],
        ...sumItems(cart.selectedItems),
        checkout: false,
      };

    case "REMOVE_ITEM":
      const newSelectedItems = cart.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...cart,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems),
      };

    case "DECREASE":
      const indexD = cart.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      cart.selectedItems[indexD].quantity--;
      return {
        ...cart,
        ...sumItems(cart.selectedItems),
      };

    case "INCREASE":
      const indexI = cart.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      cart.selectedItems[indexI].quantity++;
      return {
        ...cart,
        ...sumItems(cart.selectedItems),
      };

    case "CLEAR":
      return {
        selectedItems: [],
        sumQuantity: 0,
        sumPrice: 0,
        checkout: false,
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        sumQuantity: 0,
        sumPrice: 0,
        checkout: true,
      };

    default:
      return initianCart;
  }
};

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initianCart);

  return (
    <div>
      <cartContext.Provider value={{ cart, dispatch }}>
        {children}
      </cartContext.Provider>
    </div>
  );
};

export default CartContextProvider;
