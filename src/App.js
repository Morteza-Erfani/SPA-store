import { Routes, Route, Navigate } from "react-router-dom";

// Styles
import "./App.scss";

// Components
import Store from "./components/Store";
import Navbar from "./components/shared/Navbar";
import ProductDetails from "./components/ProductDetails";
import ShopCart from "./components/ShopCart";
import SignUp from "./components/SignUp";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <UserContextProvider>
            <Navbar />
            <Routes>
              <Route path="/products" element={<Store />} />
              <Route path="/*" element={<Navigate to="/products" />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<ShopCart />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </UserContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
