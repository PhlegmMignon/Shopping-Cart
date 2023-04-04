import { render, screen } from "@testing-library/react";
import React, { useState } from "react";
import App from "./App";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Renders each component", () => {
  it("renders app", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const element = screen.getByTestId("App");
    const element2 = screen.getByTestId("navbar");

    expect(element).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
  });

  // it("renders cart", () => {
  //   render(<Cart />);
  //   const element = screen.getByText("Cart");

  //   expect(element).toBeInTheDocument();
  // });

  // it("renders shop", () => {
  //   const [items, setItems] = useState([]);
  //   render(<Shop items={items} />);
  //   const element = screen.getByText("Shop");

  //   expect(element).toBeInTheDocument();
  // });
});

describe("Cart functionality", () => {
  it("Navbar cart # matches cart quantity", () => {
    const [cart, setCart] = React.useState([]);

    render(<Navbar />);

    screen.getByRole("");
  });
});

//Renders nothing when cartitems is empty

//Test navbar cart # matches cart items.
//Test shop submit item quantity matches cart
//Check if cart gets condensed in cartItems
