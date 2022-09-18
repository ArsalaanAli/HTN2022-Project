import { React, useEffect, useState } from "react";
import "./Detector.css";

function Detector() {
  const [currentLocation, setCurrentLocation] = useState([]);

  useEffect(() => {
    console.log(currentLocation, currentLocation[0], currentLocation[1]);
    setInterval(CheckLocationChange, 4000);
    // eslint-disable-next-line
  }, [currentLocation]);

  const DetectLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          setCurrentLocation([
            location.coords.longitude,
            location.coords.latitude,
          ]);
        },
        null,
        {
          maximumAge: 0,
          timeout: 5000,
          enableHighAccuracy: true,
        }
      );
    }
  };

  const CheckLocationChange = () => {
    if (currentLocation.length === 0) {
      return;
    }
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          GetLocationDifference(
            location.coords.longitude,
            location.coords.latitude
          );
        },
        null,
        {
          maximumAge: 0,
          timeout: 5000,
          enableHighAccuracy: true,
        }
      );
    }
  };

  const GetLocationDifference = (long, lat) => {
    console.log(long, lat, "latlong");
    console.log(currentLocation);
    const longDif = long - currentLocation[0];
    const latDif = lat - currentLocation[1];
    console.log(longDif, latDif);
  };

  return (
    <div className="home">
      <h1>Is Your Head Ouchie Wowchie?</h1>
      <button
        onClick={() => {
          DetectLocation();
        }}
      >
        Detect Location
      </button>
    </div>
  );
}
export default Detector;
