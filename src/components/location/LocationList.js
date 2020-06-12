import React, { useEffect, useState} from 'react';
import LocationManager from "../../modules/LocationManager";
import LocationCard from "./LocationCard"
import "./Location.css"

const LocationList = (props) => {
    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        return LocationManager.getAll().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        });
    };

    useEffect(() => {
        getLocations();
    }, []);

    return(
        <>
        <section className="section-content">
            <div className="btn-add">
            <button className="add_button" type= "button" onClick={() => {props.history.push("/locations/new")}}>Add New Location</button>
            </div>
            <div className = "container-cards">
            {locations.map(location => <LocationCard loco = {location} key={location.id} {...props}/>)}
            </div>
        </section>
        </>
    );
}

export default LocationList