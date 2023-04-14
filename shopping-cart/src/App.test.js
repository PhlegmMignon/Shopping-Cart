import { render, screen, waitFor } from "@testing-library/react";
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
});

describe("Cart functionality", () => {
  it("Items added to cart", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    let btn = screen.getByRole("heading", { name: /Shop/i });
    userEvent.click(btn);

    //Banana to cart
    let input = await screen.findByTestId("BananaSelect");
    await userEvent.type(input, "2");

    let addBtn = screen.getAllByRole("button");
    addBtn = addBtn[0];
    userEvent.click(addBtn);

    //Orange to cart
    input = await screen.findByTestId("orangeSelect");
    await userEvent.type(input, "3");

    addBtn = screen.getAllByRole("button");
    addBtn = addBtn[1];
    userEvent.click(addBtn);

    //Switch to cart tab
    let cart = screen.getByRole("heading", { name: /Cart/i });
    userEvent.click(cart);

    let ele = await screen.findAllByTestId("cartItemCard");
    let test1 = ele[0];
    let test2 = ele[1];

    expect(test1.textContent).toBe("Banana2");
    expect(test2.textContent).toBe("orange3");
  });
});

//Renders nothing when cartitems is empty

//Test navbar cart # matches cart items.
//Test shop submit item quantity matches cart
//Check if cart gets condensed in cartItems
