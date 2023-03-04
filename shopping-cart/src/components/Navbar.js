import React, { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="storeName">Store</div>
      <div id="navbarShop">Shop</div>
      <div id="navbarCart">Cart</div>
    </div>
  );
};

//Cart get input from props.items.length to display # of items currently in cart
export default Navbar;
