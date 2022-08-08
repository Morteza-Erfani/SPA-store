import React, { createContext, useEffect, useState } from "react";

//APIs
import { getProducts } from "../services/api";

export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchAPI();
  }, []);

  return (
    <div>
      <productContext.Provider value={products}>
        {children}
      </productContext.Provider>
    </div>
  );
};

export default ProductContextProvider;
