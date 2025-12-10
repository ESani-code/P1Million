import { Link } from "react-router-dom";
import "../styles/global.css";

// 1. Updated Interface to accept Images
interface TeamCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const TeamCard = ({ imageSrc, title, description, link }: TeamCardProps) => {
  return (
    <div className="team-card">
      {/* 2. Image Wrapper */}
      <div className="team-img-wrapper">
        <img src={imageSrc} alt={title} />
      </div>

      <div className="team-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {/* 3. Blue "Learn More" Button */}
        <Link to={link} className="btn btn-secondary btn-sm">
          Learn More{" "}
          <i className="fas fa-arrow-right" style={{ marginLeft: "5px" }}></i>
        </Link>
      </div>
    </div>
  );
};

export default TeamCard;
