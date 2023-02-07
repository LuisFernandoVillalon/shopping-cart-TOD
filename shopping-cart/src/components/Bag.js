import React from "react";
import femaleData from "../product-data/femaleData.json";
import maleData from "../product-data/maleData.json";
import perfumeData from "../product-data/perfumeData.json";
import uniqid from "uniqid";
import EditInBag from "../product-data/EditInBag";

const Bag = (props) => {
    const bagArray = [];
    createBagArray(maleData, bagArray)
    createBagArray(femaleData, bagArray)
    createBagArray(perfumeData, bagArray)
    const totalCost = totalBagCost(bagArray);
    
    const bagList = bagArray.map((currentProduct) => (
        <IndividualBagCard
            key={uniqid()}
            currentProduct={currentProduct}
            props={props}
        />
    ))


    return (
        <div className="bag-container">
            <div>
                {bagList}
            </div>
            <div>
                <div className="order-summary-container">
                    <h1>Order Summary</h1>
                    <h2><b>Total Cost:</b> ${totalCost}</h2>
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    )
}

function createBagArray(productData, bagArray) {
    let objLength = Object.keys(productData).length;
    for (let i = 0; i < objLength; ++i) {
        if (productData[i].amount !== 0) {
            bagArray.push(productData[i]);
        }
    }
}

const IndividualBagCard = (props) => {
    const totalProductPrice = individualProductTotal(props.currentProduct)
    return (
        <div className="bag-product-container">
            <div>
                <img className="product-bag-img" src={props.currentProduct.item_image} />
            </div>
            <div>
                <p><b>{props.currentProduct.item_name}</b></p>
                <p><b>Price:</b> {props.currentProduct.item_price}</p> 
                <p><b>Quantity:</b> {props.currentProduct.amount}</p>
                <p><b>Total:</b> {totalProductPrice}</p>
                <EditInBag 
                    props={props}
                />
            </div>
        </div>
    )
}

function individualProductTotal(props) {
    let temp = props.item_price.slice(1);
    let price = Number(temp);
    let totalPrice = props.amount * price;
    return "$"+totalPrice;
}

function totalBagCost(bagArray) {
    let totalBagPrice = 0;
    let objLength = Object.keys(bagArray).length;
    for (let i = 0; i < objLength; ++i) {
        let temp = bagArray[i].item_price.slice(1);
        let price = Number(temp);
        totalBagPrice = totalBagPrice + bagArray[i].amount * price;
    }
    return totalBagPrice;
}

export default Bag;