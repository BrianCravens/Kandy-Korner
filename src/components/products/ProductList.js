import React, {useEffect, useState} from 'react';
import ProductManager from "../../modules/ProductsManager"
import ProductCard from "./ProductCard"

const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        return ProductManager.getAll().then(productsFromAPI => {
            setProducts(productsFromAPI)
        });
    };

    const deleteProduct = id => {
        ProductManager.delete(id)
        .then(() => ProductManager.getAll().then (setProducts));
    }
    useEffect(() => {
        getProducts();
    }, []);


    return(
        <>
        <section className="section-content">
            <div className="container-cards">
                {products.map(product => <ProductCard key={product.id} product={product} deleteProduct={deleteProduct} {...props}/>)}
            </div>
        </section>
        </>
    )
}
export default ProductList