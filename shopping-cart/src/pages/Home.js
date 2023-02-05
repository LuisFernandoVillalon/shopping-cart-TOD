import React from "react";
import forbes from "./forbes.png"

const Home = () => {
    return (
        <div className="home-container">
            <div className="left-home-col">
                <div>From A to Z, you'll find what you need.</div>
                <div>Click below to find what products we have in store for you.</div>
                <button className="home-shop-btn">Shop now</button>
            </div>
            <div className="right-home-col">
                <div>Ranked #1 Virtual Yard Sale Website by</div>
                <img className="home-img" src={forbes} />
                <div className="right-home-col-subtext">"The best website shopping website there is!"</div>
                <div className="right-home-col-subtext">- Some Forbes employee in a parallel reality</div>
            </div>
        </div>
    )
}

export default Home;