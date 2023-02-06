import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Products from "./components/Products.js";

const RouteSwitch = () => {


  return (
    <div className="body-container">
        <BrowserRouter>
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
};

export default RouteSwitch;