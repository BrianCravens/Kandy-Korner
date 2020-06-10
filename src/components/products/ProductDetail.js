import React, {useState, useEffect} from "react";
import ProductsManager from "../../modules/ProductsManager"
import "./Product.css"
import CurrencyFormat from "react-currency-format"

const ProductDetail = (props) => {
    const [types, setTypes] = useState([])
    const [product, setProduct] = useState ({name: "", price: "", productTypeId: ""})
    const [isLoading, setIsLoading] = useState(true)
    


    const getTypeById = (id) => {
            ProductsManager.getTypeById(id).then((types) => {
            setTypes(types)
        })
    }
    
    useEffect(() => {

        ProductsManager.get(props.productId).then((product) => {
            setProduct({
                name: product.name,
                price: product.price,
                productTypeId: product.productTypeId
            });
            setIsLoading(false)
            getTypeById(product.productTypeId);
        })
    }, [props.productId]);

    return (
        <div className="card">
        <div className="card-content">
          <h3>
            <span>{product.name}</span>
          </h3>
          <CurrencyFormat value={product.price} prefix = {'$'} displayType={'text'} thousandSeparator={true}/>
          <p>{types.name}</p>
        </div>

        <button type="button" disabled={isLoading} onClick={() => props.history.push(`/products/${props.productId}/edit`)}
        >Edit Product</button>
      </div>  
    )
}
export default ProductDetail