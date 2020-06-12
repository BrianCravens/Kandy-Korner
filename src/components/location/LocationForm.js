import React, {useEffect, useState} from 'react';
import LocationManager from "../../modules/LocationManager"
import "./Location.css"

const LocationForm = props => {
    const [location, setLocation] = useState({name: "", address: "", phone: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = () => {
        
        setIsLoading(true);
        LocationManager.delete(props.locationId).then(() =>
            props.history.push("/locations")
        );
    };

    const cancelForm = () => {
        props.history.push("/locations")
    }

    const handleFieldChange = event => {
        const stateToChange = {...location};
        stateToChange[event.target.id] = event.target.value;
        setLocation(stateToChange);
    };

    const updateExistingLocation = event => {
        event.preventDefault()
        setIsLoading(true);

        const editedLocation = {
            id: props.match.params.locationId,
            name: location.name,
            address: location.address,
            phone: location.phone,
        };

            LocationManager.update(editedLocation)
            .then(() => props.history.push("/locations"))
    }

    useEffect(() => {
        LocationManager.get(props.match.params.locationId)
            .then(location => {
                setLocation(location)
                setIsLoading(false)
            })
    }, [])

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
                    <button type= "button" disabled={isLoading} onClick= {handleDelete} className="btn-primary">Delete</button>
                    <button type= "button" disabled={isLoading} onClick= {updateExistingLocation} className="btn-primary">Submit</button>
                </div>
            </fieldset>
        </form>
    </>
    )
} 
export default LocationForm