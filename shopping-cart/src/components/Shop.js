import React, { useState, useEffect } from "react";
// import uniqid from "uniqid";

function Shop(props) {
  // const [cart, setCart] = useState({});

  useEffect(() => {
    props.setItems({ name: "Banana", price: "10" });
  }, []);

  return (
    <div className="Shop">
      <h3>Shop</h3>
      <div id="itemContainer">
        <div className="itemCard">
          <div className="itemName">{props.items.name}</div>
          <div className="itemPrice">$ {props.items.price}</div>
        </div>
      </div>
    </div>
  );
}

//handleclick for items and setstate to cart

//Contains 2 items that you can add to cart
//Do I need another file for item factory?
//Add to cart btn

export default Shop;
