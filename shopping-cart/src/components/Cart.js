import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

const Cart = (props) => {
  let items = [];
  useEffect(() => {
    simplifyArray();
  }, [props.cart]);

  useEffect(() => {
    console.log(props.cartItems);
  }, [props.cartItems]);

  // console.log(props.cart);

  //When component unmounts, empty the cards? Probably by emptying cartitems

  const simplifyArray = () => {
    items = [];

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

    for (let key in group) {
      //resets cartitems before recalculating
      props.setCartItems([{ name: "", quantity: "", id: uniqid() }]);

      let thing = group[key];
      // console.log(Object.keys(group)[0]);

      thing.name == Object.keys(group)[0]
        ? props.setCartItems([
            {
              name: thing.name,
              quantity: thing.quantity,
              id: uniqid(),
            },
          ])
        : props.setCartItems([
            ...props.cartItems,
            {
              name: thing.name,
              quantity: thing.quantity,
              id: uniqid(),
            },
          ]);
    }
    // setTimeout(() => console.log(asd), 2000);
  };

  return (
    <div id="cartContainer">
      <h3 id="cartTitle">Cart</h3>
      {props.cartItems.map((item) => {
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

//     props.cart.map((item) =>
//       items.push({ name: item.name, quantity: item.quantity, id: item.id })
//     );

//     if (items[0].name == "") items.shift();

//     const group = {};

//     items.forEach((e) => {
//       const o = (group[e.name] = group[e.name] || { ...e, quantity: 0 });
//       o.quantity += e.quantity;
//       o.id = e.id;
//     });

//     itemArray = Object.keys(group).map((key) => [
//       { name: group[key].name },
//       { quantity: group[key].quantity },
//       { id: group[key].id },
//     ]);
//     // console.log(items[0].quantity);
//     console.log(itemArray);

//     itemArray.map((item) => console.log(item));
export default Cart;
