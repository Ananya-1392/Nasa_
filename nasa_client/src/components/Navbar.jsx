import React, { useEffect } from "react";
import "../index.css";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();

      const targetId = e.target.getAttribute("href");
      if (targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Calculate the offset for scrolling
          const offsetTop =
            targetElement.getBoundingClientRect().top + window.pageYOffset;
          const navbarHeight = document.querySelector(".navbar").offsetHeight;

          // Smooth scroll to the calculated position
          window.scrollTo({
            top: offsetTop - navbarHeight, // Adjust for the navbar height
            behavior: "smooth",
          });
        }
      }
    };

    // Attach scroll event to all navbar links
    const scrollLinks = document.querySelectorAll(".navbar-item a");

    scrollLinks.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    // Clean up the event listeners on unmount
    return () => {
      scrollLinks.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="nav-dsu-logo">
          <img src="./icons/DSU LOGO IN BLUE_270-x-95 PX.png" alt="logo" />
        </div>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#intro">Introduction</a>
          </li>
          <li className="navbar-item">
            <a href="#about">About DSU</a>
          </li>
          <li className="navbar-item">
            <a href="#stats">Statistics</a>
          </li>
          <li className="navbar-item">
            <a href="#teams">Teams</a>
          </li>
        </ul>

        <div className="nav-nasa-logo">
          <img src="./icons/logo-dark.png" alt="logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
