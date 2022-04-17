
import Map, {Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import token from './token';
import {Room, Star} from '@material-ui/icons';
import "./app.css";
import { useEffect, useState } from 'react';
import axios from "axios";



function App() {

const [pins, setPins] = useState([]);

useEffect(() => {
  const getPins = async () => {
    try {
      const allPins = await axios.get("/pins");
      setPins(allPins.data);
    } catch (err) {
      console.log(err);
    }
  };
  getPins();
}, []);

  return (
    <>
    <Map 
      initialViewState={{
        //coordonnées GPS MADININA
        longitude: -61.024174,
        latitude: 14.641528,
        zoom: 10
      }}
      
      style={{width: 800, height: 800}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken= {token}
    >
    
    {pins.map((p) => (
      <>
     <Marker 
      //longitude={-61.05113}
      //latitude={14.55041}
      longitude={p.long}
      latitude={p.lat}
      offsetLeft={-20}
      offsetTop={-10}  
     >
     <Room 
      color="secondary" 
      fontSize="large" 
     />
    </Marker>
   
    <Popup
      className='popup'
      longitude={p.long}
      latitude={p.lat}
      closeButton={true}
      closeOnClick={false}
      //onClose={() => setCurrentPlaceId(null)}
      anchor="left"
    >
      <div className="card">
      <label>Lieu :</label>
      <h4 className="place">{p.title}</h4>
      <label >Résumé :</label>
      <p className="description">{p.desc}</p>
      <label>Note :</label>
      <div className="stars">
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />   
      </div>
      <label>informations :</label>
      <span className="username">Crée par <b>{p.username}</b></span>
      <span className="date"> 1 hour ago</span>
      </div>
    </Popup> </>
    ))} 
  </Map>;
    </>
  );
}

export default App;
