import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

function Shop(props) {
  useEffect(() => {
    props.setItems([
      { name: "Banana", price: "10", id: uniqid() },
      { name: "orange", price: "5", id: uniqid() },
    ]);
  }, []);

  const handleClick = (item) => {
    props.cart[0].name == ""
      ? props.setCart([{ name: item.name, price: item.price, id: uniqid() }])
      : props.setCart([
          ...props.cart,
          { name: item.name, price: item.price, id: uniqid() },
        ]);
  };

  return (
    <div className="Shop">
      <h3>Shop</h3>
      <div id="itemContainer">
        {props.items.map((item) => (
          <div className="itemCard" key={item.id}>
            <div className="itemName">{item.name}</div>
            <div className="itemPrice">$ {item.price}</div>
            <button onClick={() => handleClick(item)} id="addBtn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

//handleclick for items and setstate to cart

//Contains 2 items that you can add to cart
//Do I need another file for item factory?
//Add to cart btn

export default Shop;
