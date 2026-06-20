import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="about-body">
          <div className="about-photo-wrap">
            <img
              src="/prafulla-portfolio/my_face.png"
              alt="Prafulla Shinde"
              className="about-photo"
            />
            <div className="about-badges">
              <span className="about-badge">📍 Pune, India</span>
              <span className="about-badge">💼 6+ Yrs XP</span>
              <span className="about-badge about-badge-green">🟢 Open to Work</span>
            </div>
            <div className="about-contact-pills">
              <a href="mailto:mazaawsdata@gmail.com" className="about-pill" data-cursor="disable">
                ✉ mazaawsdata@gmail.com
              </a>
              <a href="tel:+919834196375" className="about-pill" data-cursor="disable">
                📞 +91 9834196375
              </a>
            </div>
          </div>
          <div className="about-text">
            <p className="para">
              DevOps Engineer with 6+ years of experience specializing in building
              secure, high-performance AWS cloud infrastructures and automating
              end-to-end CI/CD pipelines. Proficient in managing scalable containerized
              applications with Kubernetes (EKS), orchestrating Infrastructure as Code via
              Terraform, and streamlining configuration management.
            </p>
            <p className="para">
              Currently at Citi India as a DevOps/Cloud Engineer, spearheading
              cloud-native transformation — migrating on-premises applications to AWS,
              building multi-tenant EKS clusters, and designing GitLab CI/CD pipelines
              with integrated vulnerability scanning. Previously at Tata Consultancy
              Services (TCS), architecting Jenkins pipelines and managing resilient
              multi-cloud infrastructure.
            </p>
            <div className="about-highlights">
              <div className="about-highlight-item">
                <span className="about-hl-num">25%</span>
                <span className="about-hl-txt">Infrastructure overhead reduced</span>
              </div>
              <div className="about-highlight-item">
                <span className="about-hl-num">35%</span>
                <span className="about-hl-txt">Faster release delivery</span>
              </div>
              <div className="about-highlight-item">
                <span className="about-hl-num">40%</span>
                <span className="about-hl-txt">MTTR improvement</span>
              </div>
            </div>
            <div className="about-links">
              <a
                href="https://www.linkedin.com/in/prafulla-shinde-devops"
                target="_blank"
                rel="noreferrer"
                className="about-link"
                data-cursor="disable"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/prafullashinde"
                target="_blank"
                rel="noreferrer"
                className="about-link"
                data-cursor="disable"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
