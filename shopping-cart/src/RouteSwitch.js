import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Products from "./components/Products.js";
import productArrays from "./pages/Photos-Products/ProductArrays.js";

const RouteSwitch = () => {

const FemaleProducts = {
   Earring: [],
   Necklace: [],
   Ring: []
}
const MaleProducts = {
  Hat: [],
  Necklace: [],
  Time: []
}
const PerfumeProducts = {
  Perfume: []
}
productArrays(FemaleProducts, MaleProducts, PerfumeProducts);
  return (
    <div className="body-container">
        <Header />
        <BrowserRouter>
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