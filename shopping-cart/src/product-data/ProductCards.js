import React, { useState } from "react";
import femaleData from "./femaleData.json";
import uniqid from "uniqid";
import maleData from "./maleData.json";
import perfumeData from "./perfumeData.json";


const ProductCards = (props) => {
    const category = props.category;
    
    const maleArray = [];
    var maleObjLength = Object.keys(maleData).length;
    for (let i = 0; i < maleObjLength; ++i) {
        maleArray.push(maleData[i]);
    }
    const maleHats = [];
    const maleChains = [];
    const maleWatches = [];
    for (let i = 0; i < maleArray.length; ++i) {
        if (maleArray[i].category === "hat") {
            maleHats.push(maleArray[i]);
        } else if (maleArray[i].category === "chain") {
            maleChains.push(maleArray[i]);
        } else if (maleArray[i].category === "watch") {
            maleWatches.push(maleArray[i]);
        }
    }
    const femaleArray = [];
    var femaleObjLength = Object.keys(femaleData).length;
    for (let i = 0; i < femaleObjLength; ++i) {
        femaleArray.push(femaleData[i]);
    }
    const femaleEarrings = [];
    const femaleNecklace = [];
    const femaleRings = [];
    for (let i = 0; i < femaleArray.length; ++i) {
        if (femaleArray[i].category === "earrings") {
            femaleEarrings.push(femaleArray[i]);
        } else if (femaleArray[i].category === "necklace") {
            femaleNecklace.push(femaleArray[i]);
        } else if (femaleArray[i].category === "ring") {
            femaleRings.push(femaleArray[i]);
        }
    }

    const perfumeArray = [];
    var perfumeObjLength = Object.keys(perfumeData).length;
    for (let i = 0; i < perfumeObjLength; ++i) {
        perfumeArray.push(perfumeData[i]);
    }

    const allArray = [...maleArray, ...femaleArray, ...perfumeArray];
    let chosenArray = [];
    if (category === "All") {
        chosenArray = allArray;
    }

    if (category === "allMale") {
        chosenArray = maleArray;
    } else if (category === "maleHats") {
        chosenArray = maleHats;
    } else if (category === "maleChains") {
        chosenArray = maleChains;
    } else if (category === "maleWatches") {
        chosenArray = maleWatches;
    }

    if (category === "allFemale") {
        chosenArray = femaleArray;
    } else if (category === "femaleEarrings") {
        chosenArray = femaleEarrings;
    } else if (category === "femaleNecklace") {
        chosenArray = femaleNecklace;
    } else if (category === "femaleRings") {
        chosenArray = femaleRings;
    }

    if (category    === "Perfumes") {
        chosenArray = perfumeArray;
    }



    const cardList = chosenArray.map((currentCard) => (
        <IndividualProductCard
             key={uniqid()}
            currentCard={currentCard}
            setSelectedProduct={props.setSelectedProduct}
            productAmount={props.productAmount} setProductAmount={props.setProductAmount}
        />
    ))
    return (
        <div className="product-card-container">
            {cardList}
        </div>
    )
}

const IndividualProductCard = (props) => {
    console.log(props)
    return (
        <div className="card-container">
            <img className="product-img" onClick={() => {
                    props.setSelectedProduct(props.currentCard);
                    props.setProductAmount(props.currentCard.amount);
                }
            }  src={props.currentCard.item_image} />
            <p>{props.currentCard.item_name}</p>
            <p>{props.currentCard.item_price}</p>
        </div>
    )
}

export default ProductCards;