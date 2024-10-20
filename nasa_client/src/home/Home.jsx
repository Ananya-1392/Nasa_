import React, { useState, useEffect } from "react";
import "../index.css";
import Navbar from "../components/Navbar";

// Array of image paths
const images = [
  './icons/CDSIMER 21.jpg',
  './icons/CDSIMER 23.jpg',
  './icons/DSU 1.jpg',
  './icons/DSU 2.jpg',
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="slideshow-container">
        <img
          src={images[currentIndex]}
          alt="Slideshow"
          className={fade ? "fade-in" : "fade-out"}
        />
      </div>
    </>
  );
};

export default Home;
