import React from "react";
import femaleData from "./femaleData.json";
import uniqid from "uniqid";
import maleData from "./maleData.json";
import perfumeData from "./perfumeData.json";


const ProductCards = (category) => {
    
    const maleArray = [];
    var maleObjLength = Object.keys(maleData).length;
    for (let i = 0; i < maleObjLength; ++i) {
        maleArray.push(maleData[i]);
    }
    const femaleArray = [];
    var femaleObjLength = Object.keys(femaleData).length;
    for (let i = 0; i < femaleObjLength; ++i) {
        femaleArray.push(femaleData[i]);
    }
    const perfumeArray = [];
    var perfumeObjLength = Object.keys(perfumeData).length;
    for (let i = 0; i < perfumeObjLength; ++i) {
        perfumeArray.push(perfumeData[i]);
    }

    const allArray = [...maleArray, ...femaleArray, ...perfumeArray];
    let chosenArray = [];
    if (category.category === "All") {
        chosenArray = allArray;
    }
    if (category.category === "allMale") {
        chosenArray = maleArray;
    }
    if (category.category === "Perfumes") {
        chosenArray = perfumeArray;
    }



    const cardList = chosenArray.map((currentCard) => (
        <IndividualProductCard
            // key={uniqid()}
            currentCard={currentCard}
        />
    ))
    return (
        <div className="product-card-container">
            {cardList}
        </div>
    )
}

const IndividualProductCard = (product) => {
    return (
        <div className="card-container">
            <img src={product.currentCard.item_image} />
            <p>{product.currentCard.item_name}</p>
            <p>{product.currentCard.item_price}</p>
        </div>
    )
}

export default ProductCards;