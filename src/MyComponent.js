import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 35.839462,
  lng:  10.596641
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD-1m2lSHwh5yeopIrWovvawsNaj7UayJs"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)