import React from "react";

const EditInBag = (props) => {
    function addToProduct() {
        props.props.currentProduct.amount = props.props.currentProduct.amount + 1;
        props.props.props.setProductAmount(props.props.currentProduct.amount);
    }
    function subToProduct() {
        if (props.props.currentProduct.amount == 0) {
            return;
        }
        props.props.currentProduct.amount = props.props.currentProduct.amount - 1;
        props.props.props.setProductAmount(props.props.currentProduct.amount);
    }

    return (    
        <div className="add-to-bag-container">
            <button onClick={() => subToProduct()} className="add-to-bag-button">-</button>
            <div>{props.props.currentProduct.amount}</div>
            <button onClick={() => addToProduct()} className="add-to-bag-button">+</button>
        </div>
    )

}

export default EditInBag;