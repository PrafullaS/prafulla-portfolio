import { useEffect, useRef } from "react";
import "./styles/Career.css";

const experiences = [
  {
    role: "DevOps / Cloud Engineer",
    company: "Citi India",
    location: "Pune, Maharashtra",
    period: "July 2021 – Present",
    tag: "NOW",
    tagClass: "career-tag-now",
    bullets: [
      "Spearheaded migration of on-premises applications to AWS, provisioning infrastructure with Terraform — reducing infrastructure overhead by 25%.",
      "Designed, deployed, and managed multi-tenant Kubernetes (EKS) clusters with Helm-based packaging and auto-scaling, maintaining 99.9% uptime.",
      "Built secure GitLab CI/CD pipelines with integrated vulnerability scanning, cutting release delivery timelines by 35% under strict compliance.",
      "Automated AWS resource provisioning using modular Terraform blueprints, enforcing organizational security baselines and unified IAM role structures.",
      "Constructed unified monitoring with Prometheus & Grafana across AWS and EKS, decreasing Mean Time to Resolution (MTTR) by 40%.",
    ],
    tech: ["AWS", "Kubernetes", "GitLab CI", "Terraform", "Prometheus", "Helm", "EKS"],
  },
  {
    role: "System Engineer / DevOps Engineer",
    company: "Tata Consultancy Services (TCS)",
    location: "Pune, Maharashtra",
    period: "Sept 2019 – July 2021",
    tag: "2019–2021",
    tagClass: "career-tag-prev",
    bullets: [
      "Re-architected Jenkins master-slave pipeline clusters with declarative & freestyle configs, compressing deployment cycle time by 40%.",
      "Engineered S3 lifecycle policies and storage-class tiering rules that cut annual cloud storage spend by 20%.",
      "Implemented Chef-driven configuration management across enterprise nodes with structured Git branching strategies.",
      "Deployed Nagios, CloudWatch, and CloudTrail monitoring across the full AWS stack for proactive defect detection.",
      "Mentored junior engineers on Terraform & AWS IaC standards via structured code reviews and architectural guidance.",
      "Automated Maven-driven build pipelines to produce production-ready WAR artifacts for Tomcat deployment.",
    ],
    tech: ["Jenkins", "AWS", "Chef", "Ansible", "Nagios", "CloudWatch", "Maven", "Terraform"],
  },
];

const Career = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.maxHeight = "100%";
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline" ref={timelineRef}>
            <div className="career-dot"></div>
          </div>

          {experiences.map((exp, i) => (
            <div className="career-info-box" key={i}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.role}</h4>
                  <h5>{exp.company}</h5>
                  <span className="career-location">{exp.location}</span>
                </div>
                <div className={`career-tag ${exp.tagClass}`}>{exp.tag}</div>
              </div>
              <div className="career-details">
                <p className="career-period">{exp.period}</p>
                <ul className="career-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="career-tech-row">
                  {exp.tech.map((t, k) => (
                    <span className="career-tech-tag" key={k}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;