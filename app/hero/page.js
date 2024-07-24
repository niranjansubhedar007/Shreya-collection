"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { url: "/demo1.jpg", text: "50% Discount", subText: "TAB TO VIEW" },
    { url: "/demo.webp", text: "New Collection", subText: "Explore Now" },
    { url: "/demo2.jpg", text: "Limited Stock", subText: "Shop Now" },
  ];

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const back = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div
        className="w-full relative overflow-hidden object-cover bg-white pt-10"
        style={{ height: "770px" }}
      >
        <div className="justify-center items-center w-full h-full relative  object-contain">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={images[currentIndex].url}
              src={images[currentIndex].url}
              alt=""
              className="object-cover w-full h-full absolute"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            />
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          className="absolute flex justify-start items-center left-5 bottom-10"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-8xl font-bold text-white"
            >
              {images[currentIndex].text}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-lg text-white"
            >
              {images[currentIndex].subText}
            </motion.p>
          </div>
        </motion.div>
      </div>
      
    </>
  );
};

export default Hero;
