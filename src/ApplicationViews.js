import {Route, Redirect} from "react-router-dom";
import React from "react";
import ProductList from "./components/products/ProductList"
import ProductDetail from "./components/products/ProductDetail"
import ProductForm from "./components/products/ProductForm"
import NewProduct from "./components/products/NewProduct"

const ApplicationViews = (props) => {
    const hasUser = props.hasUser;
    const setUser = props.setUser;



    return(
        <React.Fragment>
            <Route exact path="/products" render={(props) => {
                if (hasUser) {
                    return <ProductList {...props}/>;
                }else{
                    return <Redirect to ="/login"/>;
                }
            }}/>
            <Route path="/products/new" render={(props) => {
                if (hasUser) {
                    return <NewProduct {...props}/>;
                }else{
                    return <Redirect to ="/login"/>;
                }
            }}/>
            <Route exact path="/products/:productId(\d+)" render={(props) => {
                if (hasUser) {
                    return <ProductDetail productId={parseInt(props.match.params.productId)} {...props}/>;
                }else{
                    return <Redirect to ="/login"/>;
                }
            }}/>
            <Route path="/products/:productId(\d+)/edit" render={(props) => {
                if (hasUser) {
                    return <ProductForm productId={parseInt(props.match.params.productId)} {...props}/>;
                }else{
                    return <Redirect to ="/login"/>;
                }
            }}/>
        
        </React.Fragment>
    )
}
export default ApplicationViews;