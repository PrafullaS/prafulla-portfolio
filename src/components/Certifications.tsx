import "./styles/Certifications.css";
import { FaAws } from "react-icons/fa";
import { SiKubernetes, SiLinux, SiDocker } from "react-icons/si";

const certs = [
  {
    icon: <FaAws />,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    color: "#ff9900",
    verifyUrl: "https://aws.amazon.com/certification/",
  },
  {
    icon: <SiKubernetes />,
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: "2022",
    color: "#326ce5",
    verifyUrl: "https://www.cncf.io/certification/cka/",
  },
  {
    icon: <SiDocker />,
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    year: "2022",
    color: "#2496ed",
    verifyUrl: "https://www.docker.com/certification/",
  },
  {
    icon: <SiLinux />,
    name: "Linux Foundation Certified Engineer",
    issuer: "The Linux Foundation",
    year: "2021",
    color: "#f7c519",
    verifyUrl: "https://training.linuxfoundation.org/certification/",
  },
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
              className="cert-card"
              data-cursor="disable"
              style={{ "--cert-color": cert.color } as React.CSSProperties}
            >
              <div className="cert-icon" style={{ color: cert.color }}>
                {cert.icon}
              </div>
              <div className="cert-info">
                <h4>{cert.name}</h4>
                <p>{cert.issuer}</p>
                <span className="cert-year">{cert.year}</span>
              </div>
              <div className="cert-arrow">↗</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
