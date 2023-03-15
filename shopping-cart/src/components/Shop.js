import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

function Shop(props) {
  useEffect(() => {
    props.setItems([
      { name: "Banana", price: "10", id: uniqid() },
      { name: "orange", price: "5", id: uniqid() },
    ]);
  }, []);

  const handleSubmit = (item) => {
    let quantity = document.getElementById("quantity");
    quantity = quantity.value;
    console.log(quantity);

    for (let i = 0; i < quantity; i++) {
      props.cart[0].name == ""
        ? props.setCart([{ name: item.name, price: item.price, id: uniqid() }])
        : props.setCart([
            ...props.cart,
            { name: item.name, price: item.price, id: uniqid() },
          ]);
    }
  };

  const handleChange = (e) => {
    //Create state [input, setinput]. Use input in handlesubmit
  };

  return (
    <div className="Shop">
      <h3>Shop</h3>
      <div id="itemContainer">
        {props.items.map((item) => (
          <div className="itemCard" key={item.id}>
            <div className="itemName">{item.name}</div>
            <div className="itemPrice">$ {item.price}</div>

            <form onSubmit={handleSubmit(item)}>
              <label htmlFor="quantity">Qty: </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="10"
                onChange={handleChange()}
              />
              <button type="submit" id="addBtn">
                Add to Cart
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

//Create a loop to make a setstate for each item?

export default Shop;
