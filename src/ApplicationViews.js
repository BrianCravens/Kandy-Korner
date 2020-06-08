import {Route, Redirect} from "react-router-dom";
import React from "react";
import ProductList from "./components/products/ProductList"
import Login from "./components/auth/Login"

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
            }}
            />
        {/* <Route path="/login" render={props => {
            return <Login setUser={setUser} {...props}/>
        }}/> */}
        </React.Fragment>
    )
}
export default ApplicationViews;