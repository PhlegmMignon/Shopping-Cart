import React, { useState, useEffect, useRef } from "react";
import uniqid from "uniqid";

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([]);

  let items = [];
  let itemArray = [];

  useEffect(() => {
    simplifyArray();
  }, [props.cart]);

  const simplifyArray = () => {
    // console.log("hi");
    items = [];
    itemArray = [];

    props.cart.map((item) => {
      items.push({ name: item.name, quantity: item.quantity, id: item.id });
    });

    if (items[0].name == "") items.shift();

    let group = {};

    items.forEach((e) => {
      const o = (group[e.name] = group[e.name] || { ...e, quantity: 0 });
      o.quantity += e.quantity;
      o.id = e.id;
    });

    console.log(group);

    for (let i = 0; i < Object.keys(group).length; i++) {
      let key = Object.keys(group)[i];

      let thing = group[key];

      if (i == 0) {
        itemArray = [
          {
            name: thing.name,
            quantity: thing.quantity,
            id: uniqid(),
          },
        ];
      } else {
        itemArray = [
          ...itemArray,
          {
            name: thing.name,
            quantity: thing.quantity,
            id: uniqid(),
          },
        ];
      }
    }

    console.log(itemArray);

    setCartItems([...itemArray]);
  };

  return (
    <div id="cartContainer">
      <h3 id="cartTitle">Cart</h3>
      {cartItems.map((item) => {
        return (
          <div className="cartItemCard" key={item.id}>
            <div>
              {item.name}
              {item.quantity}
            </div>
          </div>
        );
      })}
    </div>
  );
};

//Input field to incriment quantity
//Display quantity in cart in navbar
//Checkout btn clears cart

//Cart get input from props.items.length to display # of items currently in cart

// itemArray = [];

//     itemArray.map((item) => console.log(item));
export default Cart;
