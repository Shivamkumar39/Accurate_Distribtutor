import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';

const LocationShop = () => {
  const [center, setCenter] = useState({ lat: 21.1767, lng: 72.8777 }); // Initial center
  const [selectedPlace, setSelectedPlace] = useState(null); // To track which marker is selected

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.GOOGLE_MAPS_API_KEY, // Access the API key from environment variables
  });

  const shopDetails = {
    name: "Mayur Barad's Accurate Distributor",
    address: 'Opp. Madhav Furniture, Near Sangh Petrol Pump, Kodinar',
    contact: '+91 9274219999',
  };

  if (loadError) return <p>Error loading maps</p>;

  return (
    <div className="location-shop-container">
      {isLoaded ? (
        <GoogleMap
          id="map"
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={center}
          zoom={15}
          zoomControl={false}
          mapTypeControl={false}
          streetViewControl={false}
          fullscreenControl={false}
        >
          <Marker
            position={center}
            onClick={() => setSelectedPlace(shopDetails)} // Set the details when marker is clicked
          />

          {selectedPlace && (
            <InfoWindow
              position={center} // Place the info window at the marker location
              onCloseClick={() => setSelectedPlace(null)} // Close the info window
            >
              <div>
                <h3>{selectedPlace.name}</h3>
                <p>{selectedPlace.address}</p>
                <p>Contact: {selectedPlace.contact}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default LocationShop;
