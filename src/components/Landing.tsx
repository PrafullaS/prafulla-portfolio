import { PropsWithChildren, useEffect, useRef } from "react";
import "./styles/Landing.css";

const roles = ["DevOps Engineer", "Cloud Architect", "Automation Expert"];

const Landing = ({ children }: PropsWithChildren) => {
  const roleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = roles[roleIndex];
      if (!roleRef.current) return;

      if (!isDeleting) {
        roleRef.current.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        roleRef.current.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      timeout = setTimeout(type, isDeleting ? 60 : 90);
    };

    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1 className="landing-name">Prafulla Shinde</h1>
            <div className="landing-subtitle">
              <span className="landing-role-label">A </span>
              <span className="landing-role-type" ref={roleRef}></span>
              <span className="landing-cursor">|</span>
            </div>
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
            <div className="landing-meta">
              <div className="landing-available">
                <span className="landing-dot"></span>
                Available for opportunities
              </div>
              <div className="landing-location">📍 Pune, India</div>
            </div>
            <div className="landing-stats-row">
              <div className="landing-stat">
                <span className="landing-stat-val">6+</span>
                <span className="landing-stat-lbl">Yrs XP</span>
              </div>
              <div className="landing-stat-divider" />
              <div className="landing-stat">
                <span className="landing-stat-val">2</span>
                <span className="landing-stat-lbl">AWS Certs</span>
              </div>
              <div className="landing-stat-divider" />
              <div className="landing-stat">
                <span className="landing-stat-val">50+</span>
                <span className="landing-stat-lbl">Pipelines</span>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
