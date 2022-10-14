import './App.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import LocationData from './LocationData';
import json from './data-centers.json'


function App() {
  //const [location, setLocations] = useState([])
  const [geoLocation, setGeoLocations] = useState([])
  const [center, setCenters] = useState([])

  const centerr = [59.933, 10.750]
  const fillBlueOptions = { fillColor: 'blue' }
  const location=json

  // const setLatitude = () => {
  //   setLocations(json)
    
  //   return (
  //     location.map(element => {
  //     <Circle center={element.GEOLOCATION}/>
  //   })
  //   )
  // }

  //setLatitude()

  return (
    <div id='map'>
     
      <MapContainer className='leaflet-container' center={[59.933, 10.750]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Circle center={centerr} pathOptions={fillBlueOptions} radius={200} />

  
  {location.map(element => 
  <Circle 
      center={element.GEOLOCATION}
      key={element.CENTER_NAME}
      label={"hello"}
      radius={200}
    />)}
    
</MapContainer>
</div>
  );
}

export default App;
