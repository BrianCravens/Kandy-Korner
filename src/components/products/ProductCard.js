import React from "react";
import {Link} from "react-router-dom";
import "./Product.css";

const ProductCard = (props) => {
    return (
        <div className="card">
            <h3>
    <span className = "card-name">{props.product.name}</span>
            </h3>
        </div>


    );
}
export default ProductCard