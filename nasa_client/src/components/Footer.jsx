import React from "react";

function Footer() {
  return (
    <section id="foot" className="footer">
      <div className="details">
        <div className="socials">
          <button className="social-icon">
            <a href="https://www.instagram.com/nasa.spaceappsharohalli/">
              <img src="./icons/instagram.png" alt="instagram icon" />
            </a>
          </button>
          <button className="social-icon">
            <a href="https://t.me/+qA5CpmKRdQVmMGY1">
              <img src="./icons/telegram-footer.png" alt="linked in icon" />
            </a>
          </button>
        </div>
        <p>
          Developed by{" "}
          <strong>
            <span className="t-orange devs">
              <a href="https://www.linkedin.com/in/ananyashankhdhar/">
                Ananya Shankhdhar
              </a>
            </span>
          </strong>
        </p>
        <p>
          Email:{" "}
          <strong>
            <span className="t-orange">international-relations@dsu.edu.in</span>
          </strong>
        </p>
      </div>
      <div className="footer-box">
        <img src="./icons/hyperlink.png" alt="hyperlink icon" />
        <a
          href="https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/harohalli/"
          className="footer-link"
        >
          NASA Space Apps Challenge 2024
        </a>
      </div>
      <div className="footer-box">
        <img src="./icons/pin.png" alt="location pin icon" />
        <a
          href="https://maps.app.goo.gl/TooMk6KBsYGgSG7X7"
          className="footer-link location"
        >
          DSU Main Campus - HAROHALLI
        </a>
      </div>
    </section>
  );
}

export default Footer;
