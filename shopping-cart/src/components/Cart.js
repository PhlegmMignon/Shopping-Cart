import React, { useState, useEffect, useRef } from "react";
import uniqid from "uniqid";
import Checkout from "./Checkout";

const Cart = (props) => {
  let items = [];
  let itemArray = [];

  useEffect(() => {
    simplifyArray();
    console.log(props.cart);
  }, [props.cart]);

  const simplifyArray = () => {
    if (props.cart.length == 0) {
      props.setCartItems([]);
      return null;
    }
    items = [];
    itemArray = [];

    props.cart.map((item) => {
      items.push({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        id: item.id,
      });
    });

    if (items[0].name == "") items.shift();

    let group = {};

    items.forEach((e) => {
      const o = (group[e.name] = group[e.name] || { ...e, quantity: 0 });
      o.quantity += e.quantity;
      o.id = e.id;
      o.price = e.price;
    });

    for (let i = 0; i < Object.keys(group).length; i++) {
      let key = Object.keys(group)[i];

      let thing = group[key];

      if (i == 0) {
        itemArray = [
          {
            name: thing.name,
            quantity: thing.quantity,
            price: thing.price,
            id: uniqid(),
          },
        ];
      } else {
        itemArray = [
          ...itemArray,
          {
            name: thing.name,
            quantity: thing.quantity,
            price: thing.price,

            id: uniqid(),
          },
        ];
      }
    }

    props.setCartItems([...itemArray]);
    console.log(props.cartItems);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    props.setCart([]);
  };

  return (
    <div id="cartContainer">
      <h3 id="cartTitle">Cart</h3>
      {props.cartItems.map((item) => {
        return (
          <div
            className="cartItemCard"
            key={item.id}
            data-testid="cartItemCard"
          >
            {item.name}
            {item.quantity}
          </div>
        );
      })}
      <button id="checkoutBtn" onClick={() => setIsOpen(true)}>
        Checkout
      </button>
      <Checkout
        open={isOpen}
        cartItems={props.cartItems}
        onClose={() => setIsOpen(false)}
        handleClick={handleClick}
      >
        Checkout
      </Checkout>
    </div>
  );
};

//Display quantity in cart in navbar
//Do tests

//Cart get input from props.items.length to display # of items currently in cart

export default Cart;
