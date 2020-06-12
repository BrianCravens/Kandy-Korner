import React, {useEffect, useState} from 'react';
import EmployeeManager from "../../modules/EmployeeManager"
import LocationManager from "../../modules/LocationManager"
import "./Employee.css"

const EmployeeForm = props => {
    const [locations, setLocations] = useState([])
    const [employee, setEmployee] = useState({firstName: "", lastName: "", address: "", phone: "", username: "", password: "", locationId: "", isSupervisor: false});
    const [isLoading, setIsLoading] = useState(false);


    const getLocations = () => {
        setIsLoading(true)
        LocationManager.getAll().then((locations) => {
            setLocations(locations)
        })
        
    }
    const handleDelete = () => {
        
        setIsLoading(true);
        EmployeeManager.delete(props.employeeId).then(() =>
            props.history.push("/employees")
        );
    };

    const cancelForm = () => {
        props.history.push("/employees")
    }

    const handleFieldChange = event => {
        const stateToChange = {...employee};
        stateToChange[event.target.id] = event.target.value;
        setEmployee(stateToChange);
    };

    const updateExistingEmployee = event => {
        event.preventDefault()
        setIsLoading(true);

        const editedEmployee = {
            id: props.match.params.employeeId,
            firstName: employee.firstName,
            lastName: employee.lastName,
            address: employee.address,
            phone: employee.phone,
            username: employee.username,
            password: employee.password,
            locationId: employee.locationId,
            isSupervisor: employee.isSupervisor
        };

            EmployeeManager.update(editedEmployee)
            .then(() => props.history.push("/employees"))
    }

    useEffect(() => {
        EmployeeManager.get(props.match.params.employeeId)
            .then(employee => {
                setEmployee(employee)
                setIsLoading(false)
            })
            getLocations()
    }, [])

    return (
    <>
        <form>
            <fieldset>
                <div className = "formgrid">
                    <input type= "text" required className = "form-control" onChange={handleFieldChange} id= "firstName" value= {employee.firstName}/>
                    <label htmlFor= "firstName">First Name</label>
                    <input type= "text" required className = "form-control" onChange={handleFieldChange} id= "lastName" value= {employee.lastName}/>
                    <label htmlFor= "lastName">Last Name</label>
                    <input type= "text" required className = "form-control" onChange={handleFieldChange} id= "address" value= {employee.address}/>
                    <label htmlFor= "address">Address</label>
                    <input type= "text" required className = "form-control" onChange={handleFieldChange} id= "phone" value= {employee.phone}/>
                    <label htmlFor= "phone">Phone</label>
                    <input type= "text" required className = "form-control" onChange={handleFieldChange} id= "username" value= {employee.username}/>
                    <label htmlFor= "username">Username</label>
                    <input type= "text" required className = "form-control" onChange={handleFieldChange} id= "password" value= {employee.password}/>
                    <label htmlFor= "password">Password</label>
                    
                    <select id="locationId" value = {employee.locationId} id="locationId" onChange={handleFieldChange}>
                        <option value = "">Choose Location</option>
                        {locations.map(location => <option value= {location.id}>{location.name}</option>)}
                    </select>
                    <label htmlFor="productType">Product Type</label>
                </div>
                <div className = "alignRight">
                    <button type= "button" disabled={isLoading} onClick= {cancelForm} className="btn-primary">Cancel</button>
                    {props.isSupervisor && <button type= "button" disabled={isLoading} onClick= {handleDelete} className="btn-primary">Delete</button>}
                    <button type= "button" disabled={isLoading} onClick= {updateExistingEmployee} className="btn-primary">Submit</button>
                </div>
            </fieldset>
        </form>
    </>
    )
} 
export default EmployeeForm