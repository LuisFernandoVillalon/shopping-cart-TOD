import React from "react";
import AddToBag from "./AddToBag";
const SelectedProduct = (props) => {
    return (
        <div className="sidebar-product">
            <img className="product-img" src={props.selectedProduct.item_image} />
            <p>{props.selectedProduct.item_name}</p>
            <p>{props.selectedProduct.item_description}</p>
            <p>{props.selectedProduct.item_price}</p>

            {props.bagBtnStatus && (
            <>
                <div>Amount:</div> 
                <AddToBag props={props} />
            </>
            ) }
        </div>
    )
}

export default SelectedProduct;