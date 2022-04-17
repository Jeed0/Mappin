
import * as React from 'react';
import "./app.css";
import { useEffect, useState } from 'react';
import Map, {Marker, Popup} from 'react-map-gl';


import 'mapbox-gl/dist/mapbox-gl.css';
import token from './token';
import {Room, Star} from '@material-ui/icons';

import axios from "axios";
import {format} from "timeago.js";



function App() {

const currentUser = "jj";

const [pins, setPins] = useState([]);

const [currentPlaceId, setCurrentPlaceId] = useState(null);

const handleMarkerClick = (id) => {
  setCurrentPlaceId(id);
};

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
      
      style={{width: "50vw", height: "100vh"}}
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
      style={{
                  fontSize: "zoom*50",
                  color: p.username === currentUser ? "tomato " : "blue",
                  cursor: "pointer",
                }} 
      onClick={()=>handleMarkerClick(p._id)}
     />
    </Marker>
    {p._id === currentPlaceId && (
   
    <Popup
      key={p._id}
                latitude={p.lat}
                longitude={p.long}
                closeButton={true}
                closeOnClick={false}
                anchor="left"
                //onClose = {() => setCurrentPlaceId(null)}
                
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
      <span className="date"> {format(p.createdAt)} </span>
      </div>
    </Popup>  )
    } </>
   
    )  )} 
  </Map></>

  );
}

export default App;
