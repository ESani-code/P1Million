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
      {/* 1. The Main Wrapper (Centers everything) */}
      <div className="navbar-centered-wrapper">
        {/* 2. Independent Circular Logo (Left) */}
        <Link to="/" className="nav-logo-circle">
          <img src={logoImg} alt="Logo" />
        </Link>

        {/* 3. The Navigation Pill (Right) */}
        <nav className="nav-pill-container">
          {/* Desktop Links */}
          <ul className={`nav-links-list ${isNavOpen ? "mobile-open" : ""}`}>
            <li>
              <Link
                to="/"
                className={`nav-link-item ${isActive("/")}`}
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link-item ${isActive("/about")}`}
                onClick={() => setIsNavOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/outreaches"
                className={`nav-link-item ${isActive("/outreaches")}`}
                onClick={() => setIsNavOpen(false)}
              >
                Outreaches
              </Link>
            </li>
            <li>
              <Link
                to="/executives"
                className={`nav-link-item ${isActive("/executives")}`}
                onClick={() => setIsNavOpen(false)}
              >
                Meet the Team
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link-item ${isActive("/contact")}`}
                onClick={() => setIsNavOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/donate"
                className="nav-link-item donate-btn"
                onClick={() => setIsNavOpen(false)}
              >
                Donate
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle (Hamburger) - Lives inside the pill on mobile */}
          <div
            className="mobile-menu-toggle"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <i className={`fas ${isNavOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
        </nav>
      </div>

      {/* Spacer to prevent content overlap */}
      <div style={{ height: "0px" }}></div>
    </>
  );
};

export default Navbar;
