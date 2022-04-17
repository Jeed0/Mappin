
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import token from './token';



function App() {
  return (
    <>
    <Map
      initialViewState={{
        longitude: -61.024174,
        latitude: 14.641528,
        zoom: 8
      }}
      
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken= {token}
    />
    </>
  );
}

export default App;
