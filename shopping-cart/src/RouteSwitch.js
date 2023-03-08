import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
