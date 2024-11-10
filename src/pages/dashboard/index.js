import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Services from "./Services";
import Carts from "./Carts";

export default function index() {
  return (
    <>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="carts" element={<Carts />} />
      </Routes>
    </>
  );
}
