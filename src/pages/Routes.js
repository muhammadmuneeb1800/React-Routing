import React from "react";
import { Route, Routes } from "react-router-dom";

import Frontent from "./frontend";
import Dashboard from "./dashboard";
import Auth from "./auth";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Router() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/*" element={<Frontent />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/auth/*" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
}
