import React, {useState, useEffect} from "react";
import LocationManager from "../../modules/LocationManager"
import "./Location.css"

const LocationDetail = (props) => {
    const [locations, setlocations] = useState ({name: "", address: "", phone: ""})
    const [isLoading, setIsLoading] = useState(true)
    
    
    useEffect(() => {

        LocationManager.get(props.locationId).then((location) => {
            setlocations({
                name: location.name,
                address: location.address,
                phone: location.phone,
            });
            setIsLoading(false)
        })
    }, [props.locationId]);

    return (
        <div className="card">
        <div className="card-content">
          <h3>
            <span>{locations.name}</span>
          </h3>
          <p>{locations.address}</p>
          <p>{locations.phone}</p>
        </div>

        <button type="button" disabled={isLoading} onClick={() => props.history.push(`/locations/${props.locationId}/edit`)}
        >Edit Location</button>
      </div>
  
    )
}
export default LocationDetail