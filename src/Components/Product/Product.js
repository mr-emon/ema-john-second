import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { name, img, stock ,price} = props.product;
    return (
        <div className="product">
            <div className="for-img">
                <img src={img} alt="" />
            </div>
            <div className="for-name">
                <h1>{name}</h1>
                <p>Price:{price}</p>
                <p><small>By:</small></p>
                <p><small>By:{stock} only available</small></p>
<button onClick = {() => props.handleAddProduct(props.product)} className = "name-button"> Add to cart</button>
            </div>

        </div>
    );
};

export default Product;