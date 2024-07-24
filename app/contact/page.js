"use client";
import React, { useState, useEffect } from "react";

const Contact = () => {
  const [mapUrl, setMapUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.permissions && navigator.permissions.query) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then((permissionStatus) => {
            if (permissionStatus.state === "granted") {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const { latitude, longitude } = position.coords;
                  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&output=embed`;
                  setMapUrl(mapUrl);
                },
                (error) => {
                  console.error("Error getting current location:", error);
                  setErrorMessage("Error getting current location. Showing default location (Mumbai).");
                  setMapUrl("https://maps.google.com/maps?q=Mumbai&output=embed"); // Default location Mumbai
                }
              );
            } else if (permissionStatus.state === "denied") {
              console.error("Geolocation permission denied.");
              setErrorMessage("Geolocation permission denied. Showing default location (Mumbai).");
              setMapUrl("https://maps.google.com/maps?q=Mumbai&output=embed"); // Default location Mumbai
            } else if (permissionStatus.state === "prompt") {
              console.error("Geolocation permission prompt.");
              setErrorMessage("Please allow geolocation access. Showing default location (Mumbai) if denied.");
              setMapUrl("https://maps.google.com/maps?q=Mumbai&output=embed"); // Default location Mumbai
            }
          })
          .catch((error) => {
            console.error("Error checking geolocation permission:", error);
            setErrorMessage("Error checking geolocation permission. Showing default location (Mumbai).");
            setMapUrl("https://maps.google.com/maps?q=Mumbai&output=embed"); // Default location Mumbai
          });
      } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&output=embed`;
            setMapUrl(mapUrl);
          },
          (error) => {
            console.error("Error getting current location:", error);
            setErrorMessage("Error getting current location. Showing default location (Mumbai).");
            setMapUrl("https://maps.google.com/maps?q=Mumbai&output=embed"); // Default location Mumbai
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        setErrorMessage("Geolocation is not supported by this browser. Showing default location (Mumbai).");
        setMapUrl("https://maps.google.com/maps?q=Mumbai&output=embed"); // Default location Mumbai
      }
    };

    getCurrentLocation();
  }, []);

  return (
    <section className="text-gray-600 body-font relative lg:pt-4 bg-white min-h-screen font">
      <div className="justify-center flex w-full">
        <p className="lg:text-3xl md:text-2xl text-2xl font-bold text-orange-500 -mt-2 mb-9">
          CONTACT
        </p>
      </div>
      <div className="map-container" style={{ position: 'relative', height: '500px' }}>
        {mapUrl ? (
          <iframe
            title="map"
            src={mapUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            style={{ filter: "contrast(1) opacity(1)" }}
          ></iframe>
        ) : (
          <p>Loading map...</p>
        )}
       
      </div>
    </section>
  );
};

export default Contact;
