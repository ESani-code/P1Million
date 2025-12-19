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
        "https://ui-avatars.com/api/?name=Oyebanjo+Priscilla&background=5480de&color=fff&size=512",
    },
    {
      name: "Precious Edionwe",
      position: "Asst. Project Coordinator",
      role: "Administration",
      image:
        "https://ui-avatars.com/api/?name=Precious+Edionwe&background=1c2b4b&color=fff&size=512",
    },
    {
      name: "Anjolaoluwa Adekomi",
      position: "Asst. Project Coordinator",
      role: "Special Duties",
      image:
        "https://ui-avatars.com/api/?name=Anjolaoluwa+Adekomi&background=1c2b4b&color=fff&size=512",
    },
    {
      name: "Bolaji Oluwatobiloba",
      position: "General Secretary",
      role: "Secretariat",
      image:
        "https://ui-avatars.com/api/?name=Bolaji+Oluwatobiloba&background=e6effc&color=1c2b4b&size=512",
    },
    {
      name: "Christine Chineme",
      position: "Asst. General Secretary",
      role: "Secretariat",
      image:
        "https://ui-avatars.com/api/?name=Christine+Chineme&background=e6effc&color=1c2b4b&size=512",
    },
    {
      name: "Uduak Favour",
      position: "Financial Secretary",
      role: "Finance",
      image:
        "https://ui-avatars.com/api/?name=Uduak+Favour&background=53b940&color=fff&size=512",
    },
    {
      name: "Ojeagbase Peace",
      position: "Asst. Financial Secretary",
      role: "Finance",
      image:
        "https://ui-avatars.com/api/?name=Ojeagbase+Peace&background=53b940&color=fff&size=512",
    },
    {
      name: "Odunayo Ekunjesu",
      position: "Public Relations Officer",
      role: "Publicity & Media",
      image:
        "https://ui-avatars.com/api/?name=Odunayo+Ekunjesu&background=5480de&color=fff&size=512",
    },
    {
      name: "Oludamilola Olayinka-Davis",
      position: "Welfare Officer",
      role: "Member Welfare",
      image:
        "https://ui-avatars.com/api/?name=Oludamilola+O&background=5480de&color=fff&size=512",
    },
    {
      name: "Abisola Ojo",
      position: "Operations Officer",
      role: "Logistics & Operations",
      image:
        "https://ui-avatars.com/api/?name=Abisola+Ojo&background=5480de&color=fff&size=512",
    },
    {
      name: "Nifesimi Oke",
      position: "Team Lead",
      role: "Special Cases Team",
      image:
        "https://ui-avatars.com/api/?name=Nifesimi+Oke&background=7aa7ff&color=fff&size=512",
    },
    {
      name: "Favor Bigila",
      position: "Team Lead",
      role: "Remand Home Team",
      image:
        "https://ui-avatars.com/api/?name=Favor+Bigila&background=7aa7ff&color=fff&size=512",
    },
    {
      name: "Maryam Abdulkarim",
      position: "Team Lead",
      role: "Orphanage Team",
      image:
        "https://ui-avatars.com/api/?name=Maryam+Abdulkarim&background=7aa7ff&color=fff&size=512",
    },
    {
      name: "Favour Esogban",
      position: "Team Lead",
      role: "Primary & Secondary School",
      image:
        "https://ui-avatars.com/api/?name=Favour+Esogban&background=7aa7ff&color=fff&size=512",
    },
    {
      name: "Angel Nwokolo",
      position: "Team Lead",
      role: "Hospital Support Team",
      image:
        "https://ui-avatars.com/api/?name=Angel+Nwokolo&background=7aa7ff&color=fff&size=512",
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
