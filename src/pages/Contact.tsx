// src/pages/Contact.tsx
import { useEffect } from "react";
import { Link } from "react-router-dom"; // Added for the button at bottom
import "../styles/global.css";
import "../styles/contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* 1. Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>
            We are always open to hearing from you. Visit us, call us, or send
            an email.
          </p>
        </div>
      </section>

      {/* 2. The Single Info Card */}
      <div className="container">
        <div className="contact-single-card">
          <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
            Contact Information
          </h2>
          <p style={{ color: "#b0b8c6" }}>
            Reach out to us through any of the channels below.
          </p>

          {/* The 3-Column Grid */}
          <div className="contact-grid-items">
            {/* Location */}
            <div className="contact-item-box">
              <div className="contact-icon-lg">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Our Location</h3>
              <p>
                Room A-104, Covenant University Chapel,
                <br />
                Canaanland, Ota-Lagos.
              </p>
            </div>

            {/* Email */}
            <div className="contact-item-box">
              <div className="contact-icon-lg">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>
                info@onemillionsouls.org
                <br />
                support@p1million.org
              </p>
            </div>

            {/* Phone */}
            <div className="contact-item-box">
              <div className="contact-icon-lg">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Call Us</h3>
              <p>
                +234 800 000 0000
                <br />
                +234 900 000 0000
              </p>
            </div>
          </div>

          {/* Bottom Section: Scripture & Socials */}
          <div className="contact-footer-area">
            <div className="contact-scripture">
              "Iron sharpeneth iron; so a man sharpeneth the countenance of his
              friend."
              <br />
              <span
                style={{ color: "var(--primary-green)", fontWeight: "bold" }}
              >
                - Proverbs 27:17
              </span>
            </div>

            <div
              className="social-links"
              style={{ justifyContent: "center", marginTop: "10px" }}
            >
              <a
                href="https://www.instagram.com/p1millionsouls_cu/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/project-one-million-souls/"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Simple CTA at the bottom */}
      <section
        className="section-padding"
        style={{
          textAlign: "center",
          background: "#fafafa",
          paddingBottom: "80px",
        }}
      >
        <div className="container">
          <h2 style={{ color: "var(--primary-blue)", marginBottom: "15px" }}>
            Want to Join the Family?
          </h2>
          <p style={{ marginBottom: "30px", color: "var(--text-light)" }}>
            You don't just have to contact us, you can become one of us.
          </p>
          <Link
            to="https://bit.ly/P1Membership"
            target="_blank"
            className="btn btn-secondary"
          >
            Volunteer Form
          </Link>
        </div>
      </section>
    </>
  );
};

export default Contact;
