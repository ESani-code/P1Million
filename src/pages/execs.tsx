// src/pages/Execs.tsx
import { useEffect } from "react";
import "../styles/global.css";
import "../styles/execs.css";

const Execs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data transcribed from "Exec list.docx"
  // Note: Using UI Avatars for placeholders. Replace image URLs with real photos later.
  const executives = [
    {
      name: "Oyebanjo Priscilla",
      position: "Project Coordinator",
      role: "Overall Leadership",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766173227/image18_rq9ha9.jpg",
    },
    {
      name: "Precious Edionwe",
      position: "Asst. Project Coordinator",
      role: "Administration",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766174422/image11_jpm92g.jpg",
    },
    {
      name: "Anjolaoluwa Adekomi",
      position: "Asst. Project Coordinator",
      role: "Administration",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766174524/image8_vtc0zy.jpg",
    },
    {
      name: "Bolaji Oluwatobiloba",
      position: "General Secretary",
      role: "Administration",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766173213/image6_d0a2il.jpg",
    },
    {
      name: "Christine Chineme",
      position: "Asst. General Secretary",
      role: "Administration",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766174612/image10_azcxv6.jpg",
    },
    {
      name: "Uduak Favour",
      position: "Financial Secretary",
      role: "Administration",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766173197/image15_j5decl.jpg",
    },
    {
      name: "Ojeagbase Peace",
      position: "Asst. Financial Secretary",
      role: "Administration",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766174695/image12_hnow7u.jpg",
    },
    {
      name: "Odunayo Ekunjesu",
      position: "Public Relations Officer",
      role: "Publicity & Media",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766173501/image4_zxz991.jpg",
    },
    {
      name: "Oludamilola Olayinka-Davis",
      position: "Welfare Officer",
      role: "Administration",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766174804/image3_y2rluu.jpg",
    },
    {
      name: "Abisola Ojo",
      position: "Operations Officer",
      role: "Administration",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766173200/image17_jkbo6g.jpg",
    },
    {
      name: "Nifesimi Oke",
      position: "Team Lead",
      role: "Special Cases Team",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766173196/image14_jn2b4q.jpg",
    },
    {
      name: "Favor Bigila",
      position: "Team Lead",
      role: "Remand Home Team",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766173215/image7_bnbdng.jpg",
    },
    {
      name: "Maryam Abdulkarim",
      position: "Team Lead",
      role: "Orphanage Team",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766174913/image5_hoesrh.jpg",
    },
    {
      name: "Favour Esogban",
      position: "Team Lead",
      role: "Primary & Secondary School",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766173196/image13_ppanxy.jpg",
    },
    {
      name: "Angel Nwokolo",
      position: "Team Lead",
      role: "Hospital Support Team",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766175004/image16_eytafd.jpg",
    },
    {
      name: "Kamto Anigbogu",
      position: "Team Lead",
      role: "Destitute Support Team Lead",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766175064/image2_k8cypk.jpg",
    },
    {
      name: "Marvel Agi",
      position: "Team Lead",
      role: "Home of the Aged Team Lead",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766173205/image1_hzegtb.jpg",
    },
    {
      name: "Ajisafe Tofunmi",
      position: "Team Lead",
      role: "Prison Support Team Lead",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766173216/image9_d3ara3.jpg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="exec-hero">
        <div className="container">
          <h1>Meet The Leaders</h1>
          <p>
            The dedicated students working behind the scenes to drive the vision
            of Project One Million Souls.
          </p>
        </div>
      </section>

      {/* Executives Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="exec-grid">
            {executives.map((exec, index) => (
              <div key={index} className="exec-card">
                <div className="exec-img-wrapper">
                  <img src={exec.image} alt={exec.name} loading="lazy" />
                </div>
                <div className="exec-content">
                  <span className="exec-role">{exec.position}</span>
                  <h3 className="exec-name">{exec.name}</h3>
                  <div className="exec-team">
                    <span className="badge-core">{exec.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Execs;
