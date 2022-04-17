
import Map, {Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import token from './token';
import {Room, Star} from '@material-ui/icons';



function App() {
  return (
    <>
    <Map 
      initialViewState={{
        //coordonnées GPS MADININA
        longitude: -61.024174,
        latitude: 14.641528,
        zoom: 9
      }}
      
      style={{width: 800, height: 800}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken= {token}
    >
     <Marker 
      longitude={-61.05113}
      latitude={14.55041}  
     >
     <Room 
      color="secondary" 
      fontSize="large" 
     />
    </Marker>
    <Popup
      longitude={-61.05113}
      latitude={14.55041}
      closeButton={true}
      closeOnClick={false}
      //onClose{() => togglePopup(false)}
      anchor="top"
    >
      <div className="card">
      <label>Lieu :</label>
      <h4 className="place">Ti kay Dous</h4>
      <label>Résumé :</label>
      <p>Notre appartement en location</p>
      <label>Note :</label>
      <div className="stars">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <label>informations :</label>
      <span className="username">Crée par <b>JeeDo</b></span>
      <span className="date"> 1 hour ago</span>
      </div>
    </Popup>
  </Map>;
    </>
  );
}

export default App;
