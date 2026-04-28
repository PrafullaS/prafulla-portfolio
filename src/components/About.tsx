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
              <span className="about-badge">💼 4+ Yrs XP</span>
              <span className="about-badge about-badge-green">🟢 Open to Work</span>
            </div>
          </div>
          <div className="about-text">
            <p className="para">
              DevOps Engineer with 4+ years of experience — a strategic DevOps lead
              specialising in <strong>microservices migration</strong> and{" "}
              <strong>enterprise-scale CI/CD automation</strong>. Expert in designing
              resilient, high-performance infrastructure using{" "}
              <strong>OpenShift, Ansible, and Docker</strong>. Proven track record of
              delivering measurable business value by integrating{" "}
              <strong>Harness, Tekton, and Jenkins</strong> within complex,
              high-compliance regulatory frameworks.
            </p>
            <p className="para">
              Currently at <strong>Citi India</strong>, spearheading cloud-native
              transformation. Previously at <strong>TCS</strong>, architecting
              end-to-end pipelines and managing resilient multi-cloud infrastructure.
            </p>
            <div className="about-links">
              <a
                href="https://www.linkedin.com/in/prafulla-shinde/"
                target="_blank"
                rel="noreferrer"
                className="about-link"
                data-cursor="disable"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/PrafullaS"
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
