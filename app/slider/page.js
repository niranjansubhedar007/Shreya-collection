"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    // "/model5.jpg",
    // "/model9.jpg",
    // "/model10.jpg",
    // "/model11.jpg",
    // "/model8.jpg",

   
    "/model9.jpg",
    "/newmodel2.jpg",
    "/newmodel3.jpg",
    "/newmodel4.jpg",
    "/newmodel1.jpg",
   
   
  ];
  const imageCount = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [imageCount]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageCount - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageCount - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative lg:h-screen md:h-96  bg-white overflow-hidden mt-10 lg:mt-0 md:mt-0 font">
      <div
        className="w-full flex transition-transform duration-1000 ease-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / imageCount)}%)`,
          width: `${imageCount * 100}%`, objectFit:"cover"
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-1 w-1 lg:h-3 lg:w-3 md:h-2 md:w-2 rounded-full ${
              index === currentIndex ? "bg-gray-900" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
      <div className="absolute lg:top-96 md:top-52 top-32 left-0 p-3 w-full  justify-between transform -translate-y-1/2 flex items-center space-x-4">
        <button
          className="text-white bg-gray-500 p-2 h-10 w-10 rounded-full transition duration-300 hover:bg-gray-800 lg:block hidden"
          onClick={goToPrevious}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
        </button>
        <button
          className="text-white right-0 bg-gray-500 p-2 h-10 w-10 rounded-full transition duration-300 hover:bg-gray-800 lg:block hidden"
          onClick={goToNext}
        >
          <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4"/>
        </button>
      </div>
    </div>
  );
};

export default Slider;
