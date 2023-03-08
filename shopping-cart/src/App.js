import "./App.css";
import React, { useState, useEffect } from "react";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [items, setItems] = useState({});
  // const [cart, setCart] = useState({});

  return (
    <>
      <div className="App" title="App" name="App">
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart />} />

          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </>
  );

  //Then test tab switching functionality

  //Cart containing items
  //Has checkoutbutton
  //Item has delete btn

  //Container of items
  //Has add to cart btn
  //Has quantity selector
  //Displays price
}

export default App;
