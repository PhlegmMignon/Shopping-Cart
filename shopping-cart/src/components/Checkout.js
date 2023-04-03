import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};

export default function Checkout({
  open,
  children,
  onClose,
  cartItems,
  handleClick,
}) {
  if (!open) return null;
  let total = 0;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>x</button>
        {children}
        {cartItems.map((item) => {
          let price = item.quantity * item.price;
          total += price;

          return (
            <div key={item.id}>
              {item.quantity} {item.name} ${item.price} each
            </div>
          );
        })}
        <div>Total is ${total}</div>
        <button onClick={() => handleClick()} id="placeOrderBtn">
          Place Order
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
}
