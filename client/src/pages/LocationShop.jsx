import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';
import { FaMapMarkerAlt } from 'react-icons/fa';

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
    <>
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Our Location</h1>
      <p 
  className="
    text-lg 
    sm:text-xl 
    md:text-2xl 
    lg:text-3xl 
    xl:text-4xl 
    font-bold 
    text-red-800 
    text-center 
    mb-6
  "
>
  If the map is not working, please click the button below to view the shop location on Google Maps.
</p>
<div className='mt-16 justify-center items-center flex mb-10'>
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-green-500 text-2xl mr-3" />
            <h2 className="text-xl font-bold text-gray-800">Our Location</h2>
          </div>
          <p className="text-gray-600 font-medium mb-4">
            Opp. Madhav Furniture, Near Sangh Petrol Pump, Kodinar
          </p>

          <a
            href="https://maps.app.goo.gl/SVZvcYWQJ1m9Y3Zf9"
            target="_blank"
            rel="noopener noreferrer"
            className="border-4 p-2 rounded-lg border-blue-500 hover:text-green-600"
          >
            See Direction/ Show On Map
          </a>
        </div>
      </div>
      
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
    </>
  );
};

export default LocationShop;
