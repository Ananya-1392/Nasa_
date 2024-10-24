import React, { useEffect, useState } from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Statistics from "../components/Statistics";
import AutoScroll from "../components/AutoScroll";
import Footer from "../components/Footer";

// Array of image paths
const images = [
  "./icons/CDSIMER 21.jpg",
  "./icons/CDSIMER 23.jpg",
  "./icons/DSU 1 .jpg",
  "./icons/CDSIMER 19.jpg",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Slideshow functionality
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Scroll-triggered animations using IntersectionObserver
    const introSection = document.querySelector(".introduction");
    const gallerySection = document.querySelector(".gallery");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (introSection) observer.observe(introSection);
    if (gallerySection) observer.observe(gallerySection);

    return () => {
      if (introSection) observer.unobserve(introSection);
      if (gallerySection) observer.unobserve(gallerySection);
    };
  }, []);

  return (
    <div className="main-content">
      <Navbar />
      <div className="slideshow-container">
        <img
          src={images[currentIndex]}
          alt="Slideshow"
          className={fade ? "fade-in" : "fade-out"}
        />
      </div>

      <div className="content-container">
        <div className="introduction">
          <h1 id="intro">INTRODUCTION</h1>
          <p className="intro">
            NASA Space Apps is an annual international hackathon that brings
            together global participants to tackle challenges in space
            exploration and Earth science. Organized by NASA, it encourages
            teamwork, creativity, and innovation using NASA's open data. This
            event unites experts and enthusiasts from diverse backgrounds,
            making it a hub for advancing science and technology. Join us in
            Harohalli to be part of this global movement with a unique local
            touch.
          </p>
          <p className="intro">
            The NASA International Space Apps Challenge is a hackathon for
            coders, scientists, designers, storytellers, makers, technologists,
            and innovators around the world to come together and use open data
            from NASA and its Space Agency Partners to create solutions to
            challenges we face on Earth and in space.
          </p>
        </div>
        <Gallery />
      </div>
      <About />
      <Statistics/>
      <Footer/>
      <AutoScroll/>
    </div>
  );
};

export default Home;
