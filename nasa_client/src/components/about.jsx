import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    const flexContainers = document.querySelectorAll(".flex-container");
    const circles = document.querySelectorAll(".circle");

    // Observer callback function
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-flex");
          entry.target.classList.add("animate-circle");
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    flexContainers.forEach((container) => {
      observer.observe(container);
    });

    circles.forEach((circle)=>{
      observer.observe(circle);
    })

    return () => {
      // Clean up the observer when the component unmounts
      flexContainers.forEach((container) => {
        observer.unobserve(container);
      });

      circles.forEach((circle) => {
        observer.unobserve(circle);
      });
    };
  }, []);

  return (
    <div id="about" className="abt-section">
      <h2>About DSU</h2>
      <h1>
        Your Only Place for <br />
        Innovation
      </h1>
      <p className="dsu">
        Dayananda Sagar University has ideally positioned itself in providing
        value-based education, research and healthcare is now all set to take
        forward its 6 decades legacy of providing world-class quality education
        in its sprawling campus at Harohalli, Bengaluru. This main campus is
        thoughtfully planned on 130 acres, with a picturesque site and a
        blossoming green environment, making it free from city crowds and
        pollution.
      </p>
      <div className="container">
        <img className="right-section" src="./icons/CDSIMER 24.jpg" alt="" />

        <div className="left-section">
          <div className="flex-container">
            <p className="number">1800</p>
            <p className="text">Students on campus</p>
          </div>

          <div className="flex-container">
            <p className="number">NAAC A+</p>
            <p className="text">Aggregated</p>
          </div>

          <div className="flex-container">
            <p className="number">130</p>
            <p className="text">Acres of land, for the building</p>
          </div>

          <div className="flex-container">
            <p className="number">Bosch &amp; DERBI</p>
            <p className="text">Foundations on campus</p>
          </div>

          <div className="flex-container">
            <p className="number">4</p>
            <p className="text">
              Villages adopted in Kanakpura with <br /> free treatment at Sagar
              Hospitals
            </p>
          </div>
        </div>
      </div>

      <h2 className="subsection-title">Community At A Glance</h2>
      <div className="circle-container">
        <div className="circle visible" id="circle1">
          <span className="number visible">57,999</span>
          <span className="label visible">Registrants</span>
        </div>
        <div className="circle visible" id="circle2">
          <span className="number visible">387</span>
          <span className="label visible">Local Leads</span>
        </div>
        <div className="circle visible" id="circle3">
          <span className="number visible">135</span>
          <span className="label visible">Subject Matter Experts</span>
        </div>
        <div className="circle visible" id="circle4">
          <span className="number visible">26</span>
          <span className="label visible">Amplification Collaborations</span>
        </div>
        <div className="circle visible" id="circle5">
          <span className="number visible">24</span>
          <span className="label visible">Navigators</span>
        </div>
        <div className="circle visible" id="circle6">
          <span className="number visible">13</span>
          <span className="label visible">Initial BFR Trainers</span>
        </div>
      </div>
    </div>
  );
}

export default About;
