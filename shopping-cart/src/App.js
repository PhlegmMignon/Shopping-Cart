import "./App.css";
import React, { useState, useEffect } from "react";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [items, setItems] = useState({ name: "", price: "" });
  const [cart, setCart] = useState({});

  return (
    <>
      <div className="App" data-testid="App">
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/shop"
            element={<Shop setItems={setItems} items={items} />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );

  //Set items in shop.
  //Get details of items from props

  //Cart containing items
  //Has checkoutbutton
  //Item has delete btn

  //Container of items
  //Has add to cart btn
  //Has quantity selector
  //Displays price
}

export default App;
