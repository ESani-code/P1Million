// src/pages/Outreaches.tsx
import { useEffect } from "react";
import "../styles/outreaches.css";
import "../styles/global.css";

const Outreaches = () => {
  // Ensure page starts at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const outreachesData = [
    {
      id: 1,
      title: "Destitute Support Group (DSG)",
      label: "Humanitarian Relief",
      description: [
        "Catering to the homeless, disabled, and displaced families through relief materials.",
        "Providing personal care services like haircuts and baths to restore dignity.",
        "Distributing food, clothing, and essential survival supplies.",
      ],
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1765369309/PRISON_OUTREACH_yt2w1v.jpg",
      reverse: false,
    },
    {
      id: 2,
      title: "Home of the Aged Team (HDA)",
      label: "Elderly Care",
      description: [
        "Providing companionship and love to the elderly in care homes.",
        "Serving as replacements for distant family members through regular visits.",
        "Meeting their emotional and spiritual needs with compassion.",
      ],
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1765369330/HOME_OF_THE_AGED_OUTREACH_rb0oq4.jpg",
      reverse: true,
    },
    {
      id: 3,
      title: "Hospital Support Team (HST)",
      label: "Medical Support",
      description: [
        "Focusing resources on indigent patients who cannot afford medical bills.",
        "Carrying out hospital evangelism to share hope and faith.",
        "Renovating medical facilities and donating necessary hospital equipment.",
      ],
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1765369639/HOSPITAL_OUTREACH_jrdart.jpg",
      reverse: false,
    },
    {
      id: 4,
      title: "Orphanage Support Team (OST)",
      label: "Child Welfare",
      description: [
        "Meeting the spiritual and material needs of orphans in various homes.",
        "Creating public awareness for the importance of adoption.",
        "Ensuring every child feels loved, valued, and part of a family.",
      ],
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1765369312/ORPHANAGE_OUTREACH_m9hhbv.jpg",
      reverse: true,
    },
    {
      id: 5,
      title: "Primary & School Team (PSS)",
      label: "Educational Development",
      description: [
        "Partnering with schools to improve academic standards.",
        "Providing scholarships, establishing libraries, and organizing tutorials.",
        "Mentoring young students to see God's plan for their future.",
      ],
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1765369312/PRIMARY_SCHOOL_OUTREACH_ynnniv.png",
      reverse: false,
    },
    {
      id: 6,
      title: "Remand Home Team (RHT)",
      label: "Youth Rehabilitation",
      description: [
        "Giving hope to teenagers with abusive childhoods through mentorship.",
        "Providing rehabilitation materials and counseling.",
        "Encouraging future ambitions through scholarships and spiritual guidance.",
      ],
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1765369502/REMAND_HOME_OUTREACH_igcixn.jpg",
      reverse: true,
    },
    {
      id: 7,
      title: "Prison Outreach Team (POT)",
      label: "Spiritual Freedom & Reform",
      description: [
        "Taking the gospel of love and hope to inmates in correctional centers.",
        "Providing welfare packages, toiletries, and legal aid where possible.",
        "Facilitating rehabilitation and preparing inmates for reintegration into society.",
      ],
      // Correctly assigned the Prison Outreach image here
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1765369309/PRISON_OUTREACH_yt2w1v.jpg",
      reverse: false,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>Our Outreaches</h1>
          <p>
            We are dedicated to touching lives through various specialized
            units. Explore how we are making a difference.
          </p>
        </div>

        <div className="outreaches-list">
          {outreachesData.map((outreach) => (
            <div
              key={outreach.id}
              /* We rely on CSS Grid now, but 'reverse' class flips the order in CSS */
              className={`outreach-row ${outreach.reverse ? "reverse" : ""}`}
              /* Removed inline grid-template-columns to allow CSS to handle mobile stacking */
            >
              {/* Text Section */}
              <div className="outreach-content">
                <span className="outreach-label">{outreach.label}</span>
                <h2>{outreach.title}</h2>
                <div>
                  {outreach.description.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Image Section */}
              <div className="outreach-visual">
                <img src={outreach.image} alt={outreach.title} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Spacer at bottom */}
      <div style={{ marginBottom: "100px" }}></div>
    </>
  );
};

export default Outreaches;
