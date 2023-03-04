import "./App.css";
import React, { useState, useEffect } from "react";
import Shop from "./components/Shop";

function App() {
  const [items, setItems] = useState({});
  const [cart, setCart] = useState({});

  return (
    <div className="App">
      <Shop />
    </div>
  );
  //Cart containing items
  //Has checkoutbutton
  //Item has delete btn

  //Container of items
  //Has add to cart btn
  //Has quantity selector
  //Displays price
}

export default App;
