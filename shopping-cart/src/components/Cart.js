import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

const Cart = (props) => {
  let items = [];
  useEffect(() => {
    simplifyArray();
  }, [props.cart]);

  const simplifyArray = () => {
    items = [];

    props.cart.map((item) => items.push({ name: item.name, quantity: 1 }));

    if (items[0].name == "") items.shift();

    const group = {};

    items.forEach((e) => {
      const o = (group[e.name] = group[e.name] || { ...e, quantity: 0 });
      o.quantity += e.quantity;
    });

    console.log(group);
  };

  return (
    <div id="cartContainer">
      <h3 id="cartTitle">Cart</h3>
      {items.map((item) => (
        <div className="cartItemCard" key={item.id}>
          <div>
            {item.name}
            {item.quantity}
          </div>
        </div>
      ))}
    </div>
  );
};

//Input field to incriment quantity
//Display quantity in cart in navbar
//Checkout btn clears cart

//Cart get input from props.items.length to display # of items currently in cart
export default Cart;
