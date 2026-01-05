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
      quote: "Ubuntu- I am, because we are",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766173227/image18_rq9ha9.jpg",
    },
    {
      name: "Precious Edionwe",
      position: "Asst. Project Coordinator",
      quote: "",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766174422/image11_jpm92g.jpg",
    },
    {
      name: "Anjolaoluwa Adekomi",
      position: "Asst. Project Coordinator",
      quote: "Don't just pray for blessings, Be a blessing!!!❤️",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766174524/image8_vtc0zy.jpg",
    },
    {
      name: "Bolaji Oluwatobiloba",
      position: "General Secretary",
      quote: "I have received without cost and now I give without condition.",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766866135/photo_2025-10-16_17-45-45_ex2sms.jpg",
    },
    {
      name: "Christine Chineme",
      position: "Asst. General Secretary",
      quote: "",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766174612/image10_azcxv6.jpg",
    },
    {
      name: "Uduak Favour",
      position: "Financial Secretary",
      quote: "With God at the center, Excellence is sure",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766173197/image15_j5decl.jpg",
    },
    {
      name: "Ojeagbase Peace",
      position: "Asst. Financial Secretary",
      quote: "The world is tough but kindness makes it easier to breathe.",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766174695/image12_hnow7u.jpg",
    },
    {
      name: "Odunayo Ekunjesu",
      position: "Public Relations Officer",
      quote:
        "Every act of kindness reflects the love of Christ,let it shine through you",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766173501/image4_zxz991.jpg",
    },
    {
      name: "Oludamilola Olayinka-Davis",
      position: "Welfare Officer",
      quote: "",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766174804/image3_y2rluu.jpg",
    },
    {
      name: "Abisola Ojo",
      position: "Operations Officer",
      quote: "In all you do, do it for the love of God",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766173200/image17_jkbo6g.jpg",
    },
    {
      name: "Nifesimi Oke",
      position: "Special Cases Team Lead",
      quote: "",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766173196/image14_jn2b4q.jpg",
    },
    {
      name: "Favor Bigila",
      position: "Remand Home Team Lead",
      quote:
        "As you give, serve, and empower others, let the love of God radiate in and through you",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766173215/image7_bnbdng.jpg",
    },
    {
      name: "Maryam Abdulkarim",
      position: "Orphanage Team Lead",
      quote:
        "Every act of kindness is a bridge built between hearts, reflecting God’s love through our service to one another.",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766174913/image5_hoesrh.jpg",
    },
    {
      name: "Favour Esogban",
      position: "Primary & Secondary School Lead",
      quote: "",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766173196/image13_ppanxy.jpg",
    },
    {
      name: "Angel Nwokolo",
      position: "Hospital Support Team Lead",
      quote: "Passion fuels the journey but with faith success follows",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766175004/image16_eytafd.jpg",
    },
    {
      name: "Kamto Anigbogu",
      position: "Destitute Support Team Lead",
      quote: "Mercy given to the needy is credited by God",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766175064/image2_k8cypk.jpg",
    },
    {
      name: "Marvel Agi",
      position: "Home of the Aged Team Lead",
      quote: "Seek God first, trust Him fully, and walk in love and kindness.",
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1766866830/photo_2025-12-27_21-19-49_sew5fs.jpg",
    },
    {
      name: "Ajisafe Oluwatofunmi Mayokun",
      position: "Prison Support Team Lead",
      quote: "Don’t just love God in public, Love God in private too.",
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
                    <span className="badge-core">{`" ${exec.quote} "`}</span>
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
