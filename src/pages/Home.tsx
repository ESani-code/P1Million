// src/pages/Home.tsx
import { useEffect, useRef } from "react";
import TeamCard from "../components/TeamCard";
import "../styles/index.css";
import "../styles/global.css"; // Specific styles for home

const Home = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollSpeedRef = useRef(1); // Controls speed and direction
  const isPausedRef = useRef(false); // NEW: Tracks if user is hovering/touching

  const teamsData = [
    {
      title: "Destitute Support Group (DSG)",
      description:
        "Catering to the homeless, disabled, and displaced families through relief materials.",
      imageSrc:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80",
      link: "/outreaches",
    },
    {
      title: "Home of the Aged Team (HDA)",
      description:
        "Providing companionship and love to the elderly, serving as replacements for distant loved ones.",
      imageSrc:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1765369330/HOME_OF_THE_AGED_OUTREACH_rb0oq4.jpg",
      link: "/outreaches",
    },
    {
      title: "Hospital Support Team (HST)",
      description:
        "Focusing resources on patients, paying bills, and renovating medical facilities.",
      imageSrc:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1765369639/HOSPITAL_OUTREACH_jrdart.jpg",
      link: "/outreaches",
    },
    {
      title: "Orphanage Support Team (OST)",
      description:
        "Meeting spiritual and material needs of orphans and creating awareness for adoption.",
      imageSrc:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1765369312/ORPHANAGE_OUTREACH_m9hhbv.jpg",
      link: "/outreaches",
    },
    {
      title: "Primary & School Team (PSS)",
      description:
        "Partnering with schools to provide scholarships, libraries, and tutorials.",
      imageSrc:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1765369312/PRIMARY_SCHOOL_OUTREACH_ynnniv.png",
      link: "/outreaches",
    },
    {
      title: "Remand Home Team (RHT)",
      description:
        "Giving hope to teenagers with abusive childhoods through mentoring.",
      imageSrc:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1765369502/REMAND_HOME_OUTREACH_igcixn.jpg",
      link: "/outreaches",
    },
    {
      title: "Prison Outreach Team (POT)",
      description:
        "Taking the gospel of love and hope to inmates in correctional centers.",
      imageSrc:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1765369309/PRISON_OUTREACH_yt2w1v.jpg",
      link: "/outreaches",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let animationFrameId: number;

    const scroll = () => {
      // ONLY scroll if the user is NOT interacting
      if (scrollContainer && !isPausedRef.current) {
        scrollContainer.scrollLeft += scrollSpeedRef.current;

        // Bounce logic: if hit end, reverse; if hit start, go forward
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollSpeedRef.current = -1;
        } else if (scrollContainer.scrollLeft <= 0) {
          scrollSpeedRef.current = 1;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <h1>
            Become a Beacon of Hope
            <br />- Let Love Lead
          </h1>
          <p>
            Dedicated to transforming lives... Dedicated to opening doors to
            people by acts of love and meeting a million souls per time.
          </p>
          <div className="hero-btns">
            <a
              href="https://bit.ly/P1Membership"
              target="_blanks"
              className="btn btn-primary"
            >
              Become a Volunteer
            </a>
            <a href="#outreaches" className="btn btn-secondary">
              Explore our Impact
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section-padding">
        <div className="container">
          <div className="about-split">
            <div className="about-images">
              <img
                src="https://res.cloudinary.com/don03rsnm/image/upload/v1765229280/ORPHANAGE_OUTREACH_ireaed.jpg"
                alt="Orphanage Outreach"
                className="about-img-1"
              />
              <img
                src="https://res.cloudinary.com/don03rsnm/image/upload/v1765229230/PRISON_OUTREACH_wlgpk9.jpg"
                alt="Prison Outreach"
                className="about-img-2"
              />
            </div>
            <div className="about-content">
              <h4>Who are we?</h4>
              <h2>A Family United in God's Love</h2>
              <p>
                A dynamic community of students committed to a powerful mission:
                Raising material gifts to minister to the physical and spiritual
                needs of the less fortunate in society.
              </p>

              {/* NEW: Scripture Box (Replaces old blockquote) */}
              <div className="scripture-box">
                <h3>"Let all things be done in love."</h3>
                <span>- 1st Corinthians 16:14</span>
              </div>

              <a href="/Donate" className="btn btn-primary">
                Support Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION GRID SECTION */}
      <section
        className="section-padding"
        style={{ backgroundColor: "#f9fbff" }}
      >
        <div className="container">
          <div className="vm-grid-container">
            <div className="section-title" style={{ textAlign: "left" }}>
              <h2>
                Vision & Mission
                <br />
                of our Organization
              </h2>
              <p>
                Meeting both spiritual and physical needs through love and
                service.
              </p>
            </div>

            <div className="vm-grid">
              {/* 2x2 Colored Grid */}

              <div className="vm-card bg-blue-main">
                <i className="fas fa-users"></i>
                <h3>Meeting a million souls per time.</h3>
              </div>

              <div className="vm-card bg-green-main">
                <i className="fas fa-door-open"></i>
                <h3>Opening doors to the people by acts of love and care.</h3>
              </div>

              <div className="vm-card bg-green-main">
                <i className="fas fa-hand-holding-heart"></i>
                <h3>Providing the needs of the less fortunate in society.</h3>
              </div>

              <div className="vm-card bg-blue-main">
                <i className="fas fa-pray"></i>
                <h3>
                  Ministering grace of God to reveal His love to people we help.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS SECTION (Updated with Cards & Text) */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Our Pillars</h2>
            <p>The core values that define our mission</p>
          </div>

          <div className="pillars-grid">
            {/* Pillar 1 */}
            <div className="pillar-card">
              <i className="far fa-heart" />
              <h3>Love</h3>
              <p>
                The driving force behind every action, outreach, and interaction
                within our organization.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="pillar-card">
              <i className="fas fa-users-cog" />
              <h3>People Development</h3>
              <p>
                Building the spiritual and physical capacity of our members and
                those we serve.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="pillar-card">
              <i className="fas fa-hand-holding-medical" />
              <h3>Community Development</h3>
              <p>
                Impactful projects that improve the living conditions of our
                immediate society.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="pillar-card">
              <i className="fas fa-user-friends" />
              <h3>Sacrifice</h3>
              <p>
                Going the extra mile, giving our time, resources, and energy for
                the sake of the gospel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <div className="quote-banner">
        <div className="container">
          <div className="quote-wrapper">
            <div className="quote-text">
              <h3>
                "You are not a millionaire by the millions you have in your
                account but by the souls you have touched"
              </h3>
              <span className="quote-author">- Bishop David Oyedepo</span>
            </div>
            <img
              src="https://res.cloudinary.com/don03rsnm/image/upload/v1765193379/Papa_zwzkdj.jpg"
              alt="Bishop David Oyedepo"
              className="quote-img"
            />
          </div>
        </div>
      </div>

      {/* OUTREACHES / TEAMS SECTION - AUTO SCROLLING */}
      <section id="outreaches" className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Outreaches & Events</h2>
            <p>Join a Team that fits your passion and skills</p>
          </div>

          {/* Auto-scrolling container */}
          <div
            ref={scrollContainerRef}
            className="team-grid"
            onMouseEnter={() => {
              isPausedRef.current = true;
            }}
            onMouseLeave={() => {
              isPausedRef.current = false;
            }}
            onTouchStart={() => {
              isPausedRef.current = true;
            }}
            onTouchEnd={() => {
              isPausedRef.current = false;
            }}
          >
            {teamsData.map((team, index) => (
              <div key={index}>
                <TeamCard
                  title={team.title}
                  description={team.description}
                  imageSrc={team.imageSrc}
                  link={team.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP & DONATION CTA */}
      <section className="membership-cta">
        <div className="container">
          <div className="cta-grid">
            <div className="cta-image-collage">
              {/* Abstract collage effect */}
              <img
                src="https://res.cloudinary.com/don03rsnm/image/upload/v1765229275/HOSPITAL_OUTREACH_sewlm3.jpg"
                style={{ width: 290, top: 20, left: 20, zIndex: 2 }}
                alt="Volunteers"
              />
              <img
                src="https://res.cloudinary.com/don03rsnm/image/upload/v1765229230/PRISON_OUTREACH_wlgpk9.jpg"
                style={{ width: 250, bottom: 10, right: 50, zIndex: 1 }}
                alt="Happy Kids"
              />
            </div>
            <div className="cta-content">
              <h4>Membership &amp; Donations</h4>
              <h2>Ready to Support?</h2>
              <p>
                We remain committed to spreading God's love for mankind through
                giving, acts of service, and sharing God's word. Join the
                Movement Today!
              </p>
              <div className="cta-btns">
                <a
                  href="https://bit.ly/P1Membership"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Membership
                </a>
                <a
                  href="/Donate"
                  className="btn btn-secondary"
                  style={{ background: "var(--dark-blue)" }}
                >
                  Donations
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
