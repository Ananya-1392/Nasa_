import React, { useEffect, useState } from "react";
import "../index.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();

      const targetId = e.target.getAttribute("href");
      if (targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          const offsetTop =
            targetElement.getBoundingClientRect().top + window.pageYOffset;
          const navbarHeight = document.querySelector(".navbar").offsetHeight;

          window.scrollTo({
            top: offsetTop - navbarHeight,
            behavior: "smooth",
          });
        }
      }
    };

    const scrollLinks = document.querySelectorAll(".navbar-item a");
    scrollLinks.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

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
      
        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <a href="#intro" onClick={() => setIsMenuOpen(false)}>Introduction</a>
          </li>
          <li className="navbar-item">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About DSU</a>
          </li>
          <li className="navbar-item">
            <a href="#stats" onClick={() => setIsMenuOpen(false)}>Statistics</a>
          </li>
          <li className="navbar-item">
            <a href="#teams" onClick={() => setIsMenuOpen(false)}>Teams</a>
          </li>
        </ul>

        <div className="nav-nasa-logo">
          <img src="./icons/logo-dark.png" alt="logo" />
        </div>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
