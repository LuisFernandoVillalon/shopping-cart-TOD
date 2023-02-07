import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Products from "./components/Products.js";
import Bag from "./components/Bag.js";

const RouteSwitch = () => {

  const [productAmount, setProductAmount] = useState(0);


  return (
    <div className="body-container">
        <BrowserRouter>
        <Header />
          <Routes className="route-container">
              <Route path="/" element={<Home />} />
              <Route path="/products" element={
                <Products
                  productAmount={productAmount} setProductAmount={setProductAmount}
                />
              } />
              <Route path="/bag" element={
                <Bag 
                  productAmount={productAmount} setProductAmount={setProductAmount}
                />
              } />
          </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
};

export default RouteSwitch;