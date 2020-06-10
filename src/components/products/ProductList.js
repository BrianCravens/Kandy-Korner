import React, {useEffect, useState} from 'react';
import ProductsManager from "../../modules/ProductsManager"
import ProductCard from "./ProductCard"
import "./Product.css"

const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        return ProductsManager.getAll().then(productsFromAPI => {
            setProducts(productsFromAPI)
        });
    };

    const deleteProduct = id => {
        ProductsManager.delete(id)
        .then(() => ProductsManager.getAll().then (setProducts));
    }
    useEffect(() => {
        getProducts();
    }, []);


    return(
        <>
        <section className="section-content">
            <div className="btn-add">
            <button className="add_button" type= "button" onClick={() => {props.history.push("/products/new")}}>Add New Product</button>
            </div>
            <div className="container-cards">
                {products.map(product => <ProductCard key={product.id} product={product} deleteProduct={deleteProduct} {...props}/>)}
            </div>
        </section>
        </>
    )
}
export default ProductList