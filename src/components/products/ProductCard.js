import React from "react";
import {Link} from "react-router-dom";
import "./Product.css";
import CurrencyFormat from 'react-currency-format';

// var CurrencyFormat = require('react-currency-format')
const ProductCard = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    <span className = "card-name">{props.product.name}</span>
                </h3>
                    <CurrencyFormat value={props.product.price} prefix={'$'} displayType={'text'} thousandSeparator={true}/>
            </div>
            <button type = "button" onClick={() => props.history.push(`/products/${props.product.id}`)}>Details</button>
        </div>


    );
}
export default ProductCard