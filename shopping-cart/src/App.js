import "./App.css";
import React, { useState, useEffect } from "react";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import uniqid from "uniqid";

function App() {
  const [items, setItems] = useState([{ name: "", price: "", id: "" }]);
  const [cart, setCart] = useState([
    { name: "", price: "", quantity: 0, id: "" },
  ]);

  const [cartItems, setCartItems] = useState([
    { name: "", quantity: "", id: uniqid() },
  ]);

  return (
    <>
      <div className="App" data-testid="App">
        <Navbar cart={cart} />
        <Routes>
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                shop={items}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                setItems={setItems}
                items={items}
                setCart={setCart}
                cart={cart}
                // input={input}
                // setInput={setInput}
              />
            }
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
