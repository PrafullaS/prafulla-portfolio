import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1 className="landing-name">
              Prafulla Shinde
            </h1>
          </div>
          <div className="landing-info">
            <h3>A DevOps</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Consultant</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>
            <p className="landing-tagline">
              Building pipelines. Shipping faster. Scaling smarter.
            </p>
            <div className="landing-available">
              <span className="landing-dot"></span>
              Available for opportunities
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
