import './App.css';
import React from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import Menu from './Menu';
import json from './personalVisits.json'


function App() {


  return (
    <div id='map'>
      <Menu>
      </Menu>
      <MapContainer className='leaflet-container' center={[59.933, 10.750]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {json.map(element => {
          if (element.COUNT_VISITED !== undefined) {
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
              </Circle>)
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
                  {`${element.CENTER_NAME}, has been visited 0 times`}
                </Popup>
              </Circle>)
          }
        }
      )}
      </MapContainer>
    </div>
  );
}

export default App;
