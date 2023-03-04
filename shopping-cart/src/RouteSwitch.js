import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        {/* <Route path="/shop" exact element={<Shop />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
