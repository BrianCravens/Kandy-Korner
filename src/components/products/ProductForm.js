import React, {useEffect, useState} from 'react';
import ProductsManager from "../../modules/ProductsManager"
import "./ProductForm.css"

const ProductForm = props => {
    const [types, setTypes] = useState([])
    const [product, setProduct] = useState({name: "", price: "", productTypeId: ""});
    const [isLoading, setIsLoading] = useState(false);

    const getTypes = () => {
        setIsLoading(true)
        ProductsManager.getAllTypes().then((types) => {
            setTypes(types)
        })
    }
    const handleDelete = () => {
        
        setIsLoading(true);
        ProductsManager.delete(props.productId).then(() =>
            props.history.push("/products")
        );
    };

    const handleFieldChange = event => {
        const stateToChange = {...product};
        stateToChange[event.target.id] = event.target.value;
        setProduct(stateToChange);
    };

    const updateExistingProduct = event => {
        event.preventDefault()
        setIsLoading(true);

        const editedProduct = {
            id: props.match.params.productId,
            name: product.name,
            price: product.price,
            productTypeId: product.productTypeId
        };

        ProductsManager.update(editedProduct)
            .then(() => props.history.push("/products"))
    }

    useEffect(() => {
        ProductsManager.get(props.match.params.productId)
            .then(product => {
                setProduct(product)
                setIsLoading(false)
            })
        getTypes()
    }, [])

    return (
    <>
        <form>
            <fieldset>
                <div className = "formgrid">
                    <input type= "text" required className = "form-control" onChange={handleFieldChange} id= "name" value= {product.name}/>
                    <label htmlFor= "name">Product Name</label>
                    <input type= "currency" value = {product.price} id="price" onChange={handleFieldChange}/>
                    <label htmlFor= "price">Price</label>
                    <select id="productType" value = {product.productTypeId} id="productTypeId" onChange={handleFieldChange}>
                        <option value = "">Choose Product Type</option>
                        {types.map(type => <option value= {type.id}>{type.name}</option>)}
                    </select>
                    <label htmlFor="productType">Product Type</label>
                </div>
                <div className = "alignRight">
                    <button type= "button" disabled={isLoading} onClick= {handleDelete} className="btn-primary">Delete Product</button>
                    <button type= "button" disabled={isLoading} onClick= {updateExistingProduct} className="btn-primary">Submit Product</button>
                </div>
            </fieldset>
        </form>
    </>
    )
} 
export default ProductForm