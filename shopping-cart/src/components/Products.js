import React, { useState } from "react";
import ProductCards from "../product-data/ProductCards";

const Products = () => {
    const [category, setCategory] = useState("All");

    function assingMaleProduct() {
        let menProducts = document.getElementById("men");
        let selectedValue = menProducts.options[menProducts.selectedIndex].value;
        console.log(selectedValue)
    }

   return (
    <div className="products-page-container">
        <div className="categories-container">
            <h1>CATEGORIES</h1>
            <div onClick={() => setCategory("All")}>All</div>
            <select name="men" id="men">
               <option value="allMale">Men's Clothing</option>
               <option value="maleHats">Men's Hats</option>
               <option value="maleChains">Men's Chains</option>
               <option value="maleWatches">Men's Watches</option>
            </select>
            <select name="Women" id="Women">
               <option value="allFemale">Women's Clothing</option>
               <option value="earrings">Woman's Earrings</option>
               <option value="necklace">Woman's Necklace</option>
               <option value="rings">Woman's Rings</option>
            </select>
            <div onClick={() => setCategory("Perfumes")}>Perfumes</div>
        </div>
        <div>
            <ProductCards
                category={category}
            />
        </div>
    </div>
   )
}

export default Products;