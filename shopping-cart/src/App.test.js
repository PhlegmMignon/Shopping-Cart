import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Renders each component", () => {
  it("renders app", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const element = screen.getByTitle("App");

    expect(element).toBeInTheDocument();
  });

  it("renders cart", () => {
    render(<Cart />);
    const element = screen.getByText("Cart");

    expect(element).toBeInTheDocument();
  });

  it("renders shop", () => {
    render(<Shop />);
    const element = screen.getByText("Shop");

    expect(element).toBeInTheDocument();
  });
});
