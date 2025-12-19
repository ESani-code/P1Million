// src/pages/NotFound.tsx
import { Link } from "react-router-dom";
import "../styles/global.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="container">
        {/* Big 404 Text */}
        <h1 className="error-code">404</h1>

        {/* Message */}
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-text">
          Oops! The page you are looking for might have been removed, had its
          name changed, or is temporarily unavailable.
        </p>

        {/* Back to Home Button */}
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
