import React, {useState} from 'react'
import json from './data-centers.json'



const LocationData = () => {

    const [location, setLocations] = useState([])
    setLocations(json)  
    
    console.log(json)
    //database()

    return (
        <div>
               {location.GEOLOCATION}
        </div> 
    )
}

export default LocationData;