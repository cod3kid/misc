import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BreadCrumbs from "./components/BreadCrumbs";
import "./styles.css";
import Home from "./views/Home";
import ProductDetails from "./views/ProductDetails";
import ProductListing from "./views/ProductListing";

export default function App() {
  return (
    <div className="App">
      <h1>Dummy Store</h1>
      <BrowserRouter>
        <BreadCrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
