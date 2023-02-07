import React from "react";

const AddToBag = (props) => {
    function addToProduct() {
        props.props.selectedProduct.amount = props.props.selectedProduct.amount + 1;
        props.props.setProductAmount(props.props.selectedProduct.amount);
    }
    function subToProduct() {
        if (props.props.selectedProduct.amount == 0) {
            return;
        }
        props.props.selectedProduct.amount = props.props.selectedProduct.amount - 1;
        props.props.setProductAmount(props.props.selectedProduct.amount);
    }


    return (    
        <div className="add-to-bag-container">
            <button onClick={() => subToProduct()} className="add-to-bag-button">-</button>
            <div>{props.props.productAmount}</div>
            <button onClick={() => addToProduct()} className="add-to-bag-button">+</button>
        </div>
    )

}

export default AddToBag;