
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import token from './token';



function App() {
  return (
    <>
    <Map
      initialViewState={{
        longitude: -61.024174,
        latitude: 14.641528,
        zoom: 9
      }}
      
      style={{width: 400, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken= {token}
    >
     <Marker longitude={-61.024174} latitude={14.641528} anchor="bottom" >
      <div>Vous êtes ici</div>
    </Marker>
  </Map>;
    </>
  );
}

export default App;
