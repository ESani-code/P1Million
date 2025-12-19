// src/components/Navbar.tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/global.css";
import "../styles/navbar.css"; // Import the new specific CSS

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation(); // Gets current route (e.g., "/about")
  const logoImg =
    "https://res.cloudinary.com/don03rsnm/image/upload/v1765191801/Logo_iuqgfn.jpg";

  // Helper to check if link is active
  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <>
      {/* The Floating Pill Container */}
      <header className="pill-nav-container">
        {/* Logo Section */}
        <Link to="/" className="logo-link">
          <img src={logoImg} alt="Logo" className="nav-logo-pill" />
        </Link>

        {/* Navigation Links (The Pills) */}
        <ul className={`pill-links ${isNavOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/"
              className={`pill-link-item ${isActive("/")}`}
              onClick={() => setIsNavOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`pill-link-item ${isActive("/about")}`}
              onClick={() => setIsNavOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/outreaches"
              className={`pill-link-item ${isActive("/outreaches")}`}
              onClick={() => setIsNavOpen(false)}
            >
              Outreaches
            </Link>
          </li>

          <li>
            <Link
              to="/executives"
              className={`pill-link-item ${isActive("/executives")}`}
              onClick={() => setIsNavOpen(false)}
            >
              Meet the Team
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`pill-link-item ${isActive("/contact")}`}
              onClick={() => setIsNavOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/donate"
              className="pill-link-item pill-donate-btn"
              onClick={() => setIsNavOpen(false)}
            >
              Donate
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger (Only visible on small screens) */}
        <div
          className="pill-mobile-toggle"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <i className={`fas ${isNavOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </header>

      {/* Spacer: Since the header is "fixed" (floating), it doesn't take up space in the document flow.
         We add a hidden div or margin to prevent the Hero section from being hidden behind the navbar.
      */}
      <div style={{ height: "0px" }}></div>
    </>
  );
};

export default Navbar;
