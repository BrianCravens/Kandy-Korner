import {Route, Redirect} from "react-router-dom";
import React from "react";
import ProductList from "./components/products/ProductList"
import ProductDetail from "./components/products/ProductDetail"
import ProductForm from "./components/products/ProductForm"
import NewProduct from "./components/products/NewProduct"
import EmployeeList from "./components/employees/EmployeeList";
import EmployeeDetail from "./components/employees/EmployeeDetails";
import EmployeeForm from "./components/employees/EmployeeForm"
import NewEmployee from "./components/employees/NewEmployee"
import LocationList from "./components/location/LocationList"
import NewLocation from "./components/location/NewLocation"
import LocationForm from "./components/location/LocationForm"
import LocationDetail from "./components/location/LocationDetail"

const ApplicationViews = (props) => {
    const hasUser = props.hasUser;
    const setUser = props.setUser;
    const isSupervisor = props.isSupervisor;



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
            <Route exact path="/employees" render={(props) => {
                if (hasUser) {
                    return <EmployeeList {...props}/>
                }else{
                    return <Redirect to = "/login"/>;
                }
            }}/>
            <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                if (hasUser) {
                    return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props}/>
                }else{
                    return <Redirect to = "/login"/>;
                }
            }}/>
            <Route path="/employees/:employeeId(\d+)/edit" render={(props) => {
                if (hasUser) {
                    return <EmployeeForm isSupervisor={isSupervisor} employeeId={parseInt(props.match.params.employeeId)} {...props}/>;
                }else{
                    return <Redirect to ="/login"/>;
                }
            }}/>
            <Route path="/employees/new" render={(props) => {
                if (hasUser) {
                    return <NewEmployee {...props}/>;
                }else{
                    return <Redirect to ="/login"/>;
                }
            }}/>
             <Route exact path="/locations" render={(props) => {
                if (hasUser) {
                    return <LocationList locationId={parseInt(props.match.params.locationId)} {...props}/>;
                }else{
                    return <Redirect to ="/login"/>;
                }
            }}/>
             <Route path="/locations/:locationId(\d+)" render={(props) => {
                if (hasUser) {
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props}/>;
                }else{
                    return <Redirect to ="/login"/>;
                }
            }}/>
            <Route path="/locations/new" render={(props) => {
                if (hasUser) {
                    return <NewLocation locationId={parseInt(props.match.params.locationId)} {...props}/>;
                }else{
                    return <Redirect to ="/login"/>;
                }
            }}/>
            <Route path="/locations/:locationId(\d+)/edit" render={(props) => {
                if (hasUser) {
                    return <LocationForm locationId={parseInt(props.match.params.locationId)} {...props}/>;
                }else{
                    return <Redirect to ="/login"/>;
                }
            }}/>
        
        </React.Fragment>
    )
}
export default ApplicationViews;