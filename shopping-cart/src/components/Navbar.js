import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="">
        <h1 id="storeName">Store</h1>
      </Link>
      <div id="navChild">
        <Link to="/shop">
          <h2 id="navbarShop">Shop</h2>
        </Link>
        <Link to="/cart">
          <h2 id="navbarCart">Cart</h2>
        </Link>
      </div>
    </div>
  );
};

//Cart get input from props.items.length to display # of items currently in cart
export default Navbar;
