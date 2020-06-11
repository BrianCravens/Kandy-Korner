import React, {useEffect, useState} from 'react';
import ProductsManager from "../../modules/ProductsManager"
import "./ProductForm.css"

const ProductForm = props => {
    const [types, setTypes] = useState([])
    const [product, setProduct] = useState({name: "", price: "", productTypeId: ""});
    const [isLoading, setIsLoading] = useState(false);

    const getTypes = () => {
        ProductsManager.getAllTypes().then((types) => {
            setTypes(types)
        })
    }

    const handleFieldChange = evt => {
        const stateToChange = { ...product };
        stateToChange[evt.target.id] = evt.target.value;
        setProduct(stateToChange);
    };

    const cancelForm = () => {
            props.history.push("/products")   
    };
    const addNewProduct = evt => {
        evt.preventDefault();
        if(product.name === "" || product.price === "" || product.productTypeId === ""){
            window.alert("Please fill out all fields")
        }else{
            setIsLoading(true);
            ProductsManager.post(product)
                .then(() => props.history.push("/products"));
        }

    }
    


    useEffect(() => {getTypes()}, [])

    return (
    <>
        <form>
            <fieldset>
                <div className = "formgrid">
                    <input type= "text" required className = "form-control" onChange={handleFieldChange} id= "name"/>
                    <label htmlFor= "name">Product Name</label>
                    <input type= "currency" onChange={handleFieldChange} id="price"/>
                    <label htmlFor= "price">Price</label>
                    <select id="productTypeSelect" value = {product.productTypeId} id= "productTypeId"onChange={handleFieldChange}>
                        <option value = "">Choose Product Type</option>
                        {types.map(type => <option key={type.id} value= {type.id}>{type.name}</option>)}
                    </select>
                    <label htmlFor="productType">Product Type</label>
                </div>
                <div className = "alignRight">
                    <button type= "button" disabled={isLoading} onClick= {cancelForm} className="btn-primary">Cancel</button>
                    <button type= "button" disabled={isLoading} onClick= {addNewProduct} className="btn-primary">Submit Product</button>
                </div>
            </fieldset>
        </form>
    </>
    )
} 
export default ProductForm