import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  let total = 0;

  return (
    <div id="navbar" data-testid="navbar">
      <Link to="">
        <h1 id="storeName">Store</h1>
      </Link>
      <div id="navChild">
        <Link to="/shop">
          <h2 id="navbarShop">Shop</h2>
        </Link>
        <Link to="/cart">
          <h2 id="navbarCart">
            Cart:
            {props.cart.map((item) => {
              total += item.quantity;
            })}
            {total}
          </h2>
        </Link>
      </div>
    </div>
  );
};

//Cart get input from props.items.length to display # of items currently in cart
export default Navbar;
