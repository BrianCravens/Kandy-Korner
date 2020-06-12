import React from "react";
import "./Location.css"

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
     
        <h3>
          <span className="card-location">{props.loco.name}</span>
        </h3>
        <p>Address: {props.loco.address}</p>
        <p>Phone: {props.loco.phone}</p>
      </div>
      <button type= "button" onClick= {() => props.history.push (`/locations/${props.loco.id}`) }>Details</button>      
    </div>
  );
};

export default LocationCard;
