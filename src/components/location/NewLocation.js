import React, {useEffect, useState} from 'react';
import LocationManager from "../../modules/LocationManager"
import "./Location.css"

const LocationForm = props => {
    const [location, setLocation] = useState({name: "", address: "", phone: ""});
    const [isLoading, setIsLoading] = useState(false);

    const cancelForm = () => {
        props.history.push("/locations")
    }

    const handleFieldChange = event => {
        const stateToChange = {...location};
        stateToChange[event.target.id] = event.target.value;
        setLocation(stateToChange);
    };

    const addNewLocation = evt => {
        evt.preventDefault();
        if(location.name === "" || location.address === "" || location.phone ===""){
            window.alert("Please fill out all fields")
        }else{
            setIsLoading(true);
            LocationManager.post(location)
                .then(() => props.history.push("/locations"));
        }
    }
    useEffect(() => {}, [])

    return (
    <>
        <form>
            <fieldset>
                <div className = "formgrid">
                    <input type= "text" required className = "form-control" onChange={handleFieldChange} id= "name" value= {location.name}/>
                    <label htmlFor= "name">Name</label>
                    <input type= "text" required className = "form-control" onChange={handleFieldChange} id= "address" value= {location.address}/>
                    <label htmlFor= "address">Address</label>
                    <input type= "text" required className = "form-control" onChange={handleFieldChange} id= "phone" value= {location.phone}/>
                    <label htmlFor= "phone">Phone</label>
                </div>
                <div className = "alignRight">
                    <button type= "button" disabled={isLoading} onClick= {cancelForm} className="btn-primary">Cancel</button>
                    <button type= "button" disabled={isLoading} onClick= {addNewLocation} className="btn-primary">Submit</button>
                </div>
            </fieldset>
        </form>
    </>
    )
} 
export default LocationForm