import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js"

const RouteSwitch = () => {
  return (
    <div>
        <Header />
        <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<App />} />
            <Route path="/profile" element={<Profile />} /> */}
        </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
};

export default RouteSwitch;