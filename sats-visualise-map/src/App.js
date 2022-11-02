import './App.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import LocationData from './LocationData';
import json from './personalVisits.json'
import checkins from './CHECKINS.json'


function App() {
  //const [location, setLocations] = useState([])
  const [geoLocation, setGeoLocations] = useState([])

  const location=json
  const checkinsData=checkins


    {checkinsData.map(el =>{
      if(el.CHECKIN_CENTER === json.CENTER_ID){
        console.log(json.CENTER_NAME)
      } else{
        console.log('no')
      }
    })}
 

  return (
    <div id='map'>
     
  <MapContainer className='leaflet-container' center={[59.933, 10.750]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  
  {location.map(element => {
  if(element.COUNT_VISITED != undefined){

  
  return (
    <Circle
      center={element.GEOLOCATION}
      key={element.CENTER_NAME}
      radius={100}
      color={'green'}
      >
      <Popup>
        {`${element.CENTER_NAME}, has been visited ${element.COUNT_VISITED} times`}
      </Popup>
    </Circle> )
    }
  else {
    return (
      <Circle
        center={element.GEOLOCATION}
        key={element.CENTER_NAME}
        radius={100}
        color={'red'}
        >
        <Popup>
          {`${element.CENTER_NAME}, has been visited ${element.COUNT_VISITED} times`}
        </Popup>
      </Circle> )
  }
  }
  
  )}
    
</MapContainer>
</div>
  );
}

export default App;
