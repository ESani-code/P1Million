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
          <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum...</p>
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
                <h3>99999999999</h3>
                <span>Access Bank</span>
                <p>P1 Million Souls</p>
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
