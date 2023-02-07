import React from "react";

const SelectedProduct = (props) => {
    console.log(props.selectedProduct.amount);
    function addToProduct() {
        props.selectedProduct.amount = props.selectedProduct.amount + 1;
        props.setProductAmount(props.selectedProduct.amount);
    }
    function subToProduct() {
        if (props.selectedProduct.amount == 0) {
            return;
        }
        props.selectedProduct.amount = props.selectedProduct.amount - 1;
        props.setProductAmount(props.selectedProduct.amount);
    }
    function addToBag(productAmount) {
        props.setBagAmount(props.bagAmount + productAmount);
        props.setProductAmount(0);
    }
    return (
        <div className="sidebar-product">
            <img className="product-img" src={props.selectedProduct.item_image} />
            <p>{props.selectedProduct.item_name}</p>
            <p>{props.selectedProduct.item_description}</p>
            <p>{props.selectedProduct.item_price}</p>
            <div>Amount:</div>
            <div className="add-to-bag-container">
                <button onClick={() => subToProduct()} className="add-to-bag-button">-</button>
                <div>{props.productAmount}</div>
                <button onClick={() => addToProduct()} className="add-to-bag-button">+</button>
            </div>
            <button onClick={() => addToBag(props.productAmount)} className="add-to-bag-btn">Add To Bag</button>
        </div>
    )
}

export default SelectedProduct;