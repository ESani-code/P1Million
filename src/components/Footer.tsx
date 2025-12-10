// src/components/Footer.tsx
import { Link } from "react-router-dom";
import "../styles/global.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/don03rsnm/image/upload/v1765191801/Logo_iuqgfn.jpg"
                alt="Logo Picture"
                className="footer-logo-img"
              />
            </Link>
            <h4>Location</h4>
            <p style={{ color: "#b0b8c6", fontSize: "0.9rem" }}>
              Room A-104, Covenant University Chapel,
              <br />
              Canaanland, Ota-Lagos, Nigeria.
            </p>
          </div>
          <div className="footer-col">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/about">About Us</a>
              </li>

              <li>
                <a href="/outreaches">Outreaches</a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>

              <li>
                <a href="/donate">Donate</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Socials</h4>
            <ul className="social-list-text">
              <li>
                <a href="#">
                  <i className="fab fa-instagram" /> Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-telegram" /> Telegram
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; {currentYear} Project One Million Souls. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
