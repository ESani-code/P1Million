import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/about.css"; // Import the new styles

const About = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* 1. Page Header */}
      <section className="page-hero">
        <div className="container">
          <h1>About Our Organization</h1>
          <p>
            One Indivisible and Indissoluble Christian Organization Under God
          </p>
        </div>
      </section>

      {/* 2. History & Introduction */}
      <section className="section-padding">
        <div className="container">
          <div className="history-grid">
            <div className="history-content">
              <h4
                style={{
                  color: "var(--primary-green)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Our History
              </h4>
              <h2
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "20px",
                  color: "var(--dark-blue)",
                }}
              >
                Established in Faith,
                <br />
                Driven by Love.
              </h2>
              <p style={{ marginBottom: "20px" }}>
                Project One Million Souls was founded on{" "}
                <strong>April 22, 2005</strong>, by{" "}
                <strong>Mr. Reginald Bassey</strong>. What started as a vision
                has grown into a dynamic community of students and volunteers
                dedicated to the promotion of soul winning and humanitarian
                service.
              </p>
              <p>
                We are governed by a constitution that binds us to work in peace
                and harmony, adhering to the principles of Covenant University
                and, most importantly, the tenets of the Christian faith.
              </p>

              <div className="scripture-box">
                <h3>"Let all things be done in love."</h3>
                <span>- 1st Corinthians 16:14 (Anchor Scripture)</span>
              </div>
            </div>
            <div className="history-img">
              {/* Using a placeholder meeting image - replace with actual history photo if available */}
              <img
                src="https://res.cloudinary.com/don03rsnm/image/upload/v1765369502/REMAND_HOME_OUTREACH_igcixn.jpg"
                alt="Group Meeting"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4 Pillars */}
      <section className="section-padding" style={{ background: "#fafafa" }}>
        <div className="container">
          <div className="section-title">
            <h2>Our Four Pillars</h2>
            <p>
              The foundational values that uphold our constitution and
              operations.
            </p>
          </div>

          <div className="pillars-grid-about">
            <div className="pillar-card">
              <i className="fas fa-heart"></i>
              <h3>Love</h3>
              <p>
                The driving force behind every action, outreach, and interaction
                within our organization.
              </p>
            </div>
            <div className="pillar-card">
              <i className="fas fa-users"></i>
              <h3>People Development</h3>
              <p>
                Building the spiritual and physical capacity of our members and
                those we serve.
              </p>
            </div>
            <div className="pillar-card">
              <i className="fas fa-city"></i>
              <h3>Community Development</h3>
              <p>
                Impactful projects that improve the living conditions of our
                immediate society.
              </p>
            </div>
            <div className="pillar-card">
              <i className="fas fa-hand-holding-heart"></i>
              <h3>Sacrifice</h3>
              <p>
                Going the extra mile, giving our time, resources, and energy for
                the sake of the gospel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Structure (Teams) */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Our Organizational Structure</h2>
            <p>
              Divided into functional arms to effectively carry out the mandate.
            </p>
          </div>

          <div className="teams-layout">
            {/* Left Col: Outreach Teams */}
            <div className="team-category">
              <h3>Outreach Teams</h3>

              <div className="team-list-item">
                <div className="team-list-icon">
                  <i className="fas fa-wheelchair"></i>
                </div>
                <div className="team-list-text">
                  <h4>Destitute Support Group (DSG)</h4>
                  <p>
                    Catering to the homeless, disabled, and displaced families
                    through relief materials, haircuts, and baths.
                  </p>
                </div>
              </div>

              <div className="team-list-item">
                <div className="team-list-icon">
                  <i className="fas fa-blind"></i>
                </div>
                <div className="team-list-text">
                  <h4>Home of the Aged Team (HDA)</h4>
                  <p>
                    Providing companionship and love to the elderly, serving as
                    replacements for distant loved ones.
                  </p>
                </div>
              </div>

              <div className="team-list-item">
                <div className="team-list-icon">
                  <i className="fas fa-hospital-user"></i>
                </div>
                <div className="team-list-text">
                  <h4>Hospital Support Team (HST)</h4>
                  <p>
                    Paying bills for indigent patients, hospital evangelism, and
                    facility renovation.
                  </p>
                </div>
              </div>

              <div className="team-list-item">
                <div className="team-list-icon">
                  <i className="fas fa-child"></i>
                </div>
                <div className="team-list-text">
                  <h4>Orphanage Support Team (OST)</h4>
                  <p>
                    Meeting spiritual and material needs of orphans and creating
                    awareness for adoption.
                  </p>
                </div>
              </div>

              <div className="team-list-item">
                <div className="team-list-icon">
                  <i className="fas fa-school"></i>
                </div>
                <div className="team-list-text">
                  <h4>Primary & School Team (PSS)</h4>
                  <p>
                    Partnering with schools to provide scholarships, libraries,
                    and academic tutorials.
                  </p>
                </div>
              </div>

              <div className="team-list-item">
                <div className="team-list-icon">
                  <i className="fas fa-dungeon"></i>
                </div>
                <div className="team-list-text">
                  <h4>Remand Home Team (RHT)</h4>
                  <p>
                    Giving hope, rehabilitation, and mentorship to teenagers
                    with abusive childhoods.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Col: Functional Teams */}
            <div className="team-category">
              <h3>Functional Teams</h3>

              <div className="team-list-item">
                <div className="team-list-icon">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <div className="team-list-text">
                  <h4>Evangelism Team</h4>
                  <p>
                    Responsible for organizing outreaches, follow-up of souls,
                    and coordinating spiritual activities.
                  </p>
                </div>
              </div>

              <div className="team-list-item">
                <div className="team-list-icon">
                  <i className="fas fa-box-open"></i>
                </div>
                <div className="team-list-text">
                  <h4>Welfare Team</h4>
                  <p>
                    Ensures the well-being of members and manages the
                    distribution of relief materials.
                  </p>
                </div>
              </div>

              <div className="team-list-item">
                <div className="team-list-icon">
                  <i className="fas fa-user-md"></i>
                </div>
                <div className="team-list-text">
                  <h4>Medical Team</h4>
                  <p>
                    Provides medical aid during outreaches and attends to health
                    emergencies within the group.
                  </p>
                </div>
              </div>

              <div className="team-list-item">
                <div className="team-list-icon">
                  <i className="fas fa-theater-masks"></i>
                </div>
                <div className="team-list-text">
                  <h4>Drama & Variety Team</h4>
                  <p>
                    Uses creative arts (drama, dance, music) to communicate the
                    message of hope and love.
                  </p>
                </div>
              </div>

              <div className="team-list-item">
                <div className="team-list-icon">
                  <i className="fas fa-truck-loading"></i>
                </div>
                <div className="team-list-text">
                  <h4>Logistics Team</h4>
                  <p>
                    Handles transportation, venue setup, and equipment
                    management for all events.
                  </p>
                </div>
              </div>

              <div className="team-list-item">
                <div className="team-list-icon">
                  <i className="fas fa-pray"></i>
                </div>
                <div className="team-list-text">
                  <h4>Prayer Team</h4>
                  <p>
                    The spiritual engine room, interceding for the success of
                    the organization and its members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section
        className="section-padding"
        style={{
          background: "var(--primary-blue)",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 style={{ marginBottom: "20px", fontSize: "2.5rem" }}>
            Join the Movement
          </h2>
          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto 30px",
              fontSize: "1.1rem",
              opacity: "0.9",
            }}
          >
            We invite you to be a part of this great vision. Whether through
            volunteering your time or supporting us financially.
          </p>
          <div
            style={{ display: "flex", gap: "20px", justifyContent: "center" }}
          >
            <div className="cta-btns">
              <a
                href="https://bit.ly/P1Membership"
                className="btn"
                target="_blank"
                style={{
                  background: "white",
                  color: "var(--primary-blue)",
                }}
              >
                Become a Member
              </a>
            </div>

            <Link
              to="/donate"
              className="btn"
              style={{ background: "var(--dark-blue)", color: "white" }}
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
