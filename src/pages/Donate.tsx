// src/pages/Donate.tsx
import "../styles/donate.css";
import "../styles/global.css";

const Donate = () => {
  return (
    <>
      <section className="hero-sm">
        <div className="container">
          <h1>
            Great futures built
            <br />
            with a small charity
          </h1>
        </div>
      </section>

      <div className="container">
        <div className="donation-split-card">
          <div className="donate-left"></div>
          <div className="donate-right">
            <h2>Donations</h2>
            <div className="bank-item">
              <i className="fas fa-university bank-icon"></i>
              <div className="bank-details">
                <h3>2261152020</h3>
                <span>Eco Bank</span>
                <p>Project One Million Souls</p>
              </div>
            </div>
            {/* Add second bank item here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
