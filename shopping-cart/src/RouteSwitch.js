import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Products from "./components/Products.js";
import Bag from "./components/Bag.js";

const RouteSwitch = () => {


  return (
    <div className="body-container">
        <BrowserRouter>
        <Header />
          <Routes className="route-container">
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/bag" element={<Bag />} />
          </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
};

export default RouteSwitch;