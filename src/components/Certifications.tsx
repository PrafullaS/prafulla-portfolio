import "./styles/Certifications.css";
import { FaAws } from "react-icons/fa";
import { FaTrophy, FaStar, FaMedal } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";

const certs = [
  {
    icon: <FaAws />,
    name: "AWS Certified DevOps Engineer – Professional",
    issuer: "Amazon Web Services",
    year: "2025",
    color: "#ff9900",
    verifyUrl: "https://www.credly.com/badges/89ce7450-8d09-4661-b358-6998f97809d9/public_url",
    badge: "Professional",
  },
  {
    icon: <FaAws />,
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: "2025",
    color: "#ff9900",
    verifyUrl: "https://www.credly.com/badges/02c40d58-f81e-4fb4-acf4-824a9dd49ac0/public_url",
    badge: "Associate",
  },
];

const awards = [
  { icon: <FaTrophy />, title: "Migration Excellence Award", org: "Citi India", color: "#fbbf24" },
  { icon: <FaStar />, title: "Ownership Award", org: "Citi India", color: "#a855f7" },
  { icon: <SiGoogle />, title: "Google Arcade Champion", org: "Google Cloud", color: "#4285F4" },
  { icon: <FaMedal />, title: "Star Performer Award", org: "Tata Consultancy Services", color: "#5eead4" },
  { icon: <FaMedal />, title: "Best Team Award", org: "Tata Consultancy Services", color: "#34d399" },
  { icon: <FaMedal />, title: "Service Commitment Award", org: "Tata Consultancy Services", color: "#6ee7b7" },
];

const Certifications = () => {
  return (
    <div className="certs-section section-container">
      <div className="certs-container">
        <h3 className="title">Certifications</h3>
        <p className="certs-subtitle">
          Industry-recognized credentials validating expertise across cloud, containers, and infrastructure.
        </p>
        <div className="certs-grid">
          {certs.map((cert, i) => (
            <a
              key={i}
              href={cert.verifyUrl}
              target="_blank"
              rel="noreferrer"
              className="cert-card glass-card hover-glow"
              data-cursor="disable"
              style={{ "--cert-color": cert.color } as React.CSSProperties}
            >
              <div className="cert-icon" style={{ color: cert.color }}>
                {cert.icon}
              </div>
              <div className="cert-info">
                <div className="cert-badge-row">
                  <span className="cert-level-badge">{cert.badge}</span>
                </div>
                <h4>{cert.name}</h4>
                <p>{cert.issuer}</p>
                <span className="cert-year">{cert.year}</span>
              </div>
              <div className="cert-arrow">↗</div>
            </a>
          ))}
        </div>

        {/* Awards Section */}
        <h3 className="title awards-title">Accomplishments</h3>
        <p className="certs-subtitle">Recognition for excellence, leadership, and delivery across organizations.</p>
        <div className="awards-grid">
          {awards.map((award, i) => (
            <div className="award-card glass-card" key={i} style={{ "--award-color": award.color } as React.CSSProperties}>
              <div className="award-icon" style={{ color: award.color }}>{award.icon}</div>
              <div className="award-info">
                <h4>{award.title}</h4>
                <p>{award.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
