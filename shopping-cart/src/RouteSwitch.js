import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";

const RouteSwitch = () => {
  return (
    <div className="body-container">
        <Header />
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
};

export default RouteSwitch;