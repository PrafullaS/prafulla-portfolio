import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import {
  MdArrowBack,
  MdArrowForward,
  MdSpeed,
  MdCloudQueue,
  MdSettingsSuggest,
  MdTerminal,
  MdAnalytics
} from "react-icons/md";
import AnimatedPipeline from "./AnimatedPipeline";

const achievements = [
  {
    title: "Enterprise CI/CD Architect",
    category: "Automation & Orchestration",
    icon: <MdSpeed />,
    tools: "Jenkins, Docker, Maven, Terraform, Harness",
    impact: "Accelerated deployment frequency by 40% and reduced manual intervention by 75% across enterprise workflows.",
    description: "Architected end-to-end pipelines using Infrastructure as Code (IaC) to streamline build, test, and deployment cycles for global financial systems.",
    image: "/prafulla-portfolio/images/architecture.png",
  },
  {
    title: "Cloud Infrastructure Optimization",
    category: "AWS Cloud Engineering",
    icon: <MdCloudQueue />,
    tools: "EC2, S3, RDS, VPC, Auto Scaling, ELB",
    impact: "Achieved 99.99% system availability while optimizing cloud spend through strategic Auto Scaling and VPC architecture.",
    description: "Engineered highly resilient AWS environments, ensuring peak performance and security compliance for mission-critical applications.",
    image: "/prafulla-portfolio/images/Cloud-Infrastructure-Optimization.png",
  },
  {
    title: "Containerization Leadership",
    category: "Kubernetes & OpenShift",
    icon: <MdSettingsSuggest />,
    tools: "OpenShift, Helm Charts, Kubernetes, Docker",
    impact: "Migrated legacy monoliths to microservices, improving resource utilization by 50% and enabling seamless scaling.",
    description: "Spearheaded enterprise container strategies, managing cluster orchestration and automated scaling via OpenShift and Helm.",
    image: "/prafulla-portfolio/images/Kubernetes.png",
  },
  {
    title: "Proactive Monitoring & Analytics",
    category: "System Reliability",
    icon: <MdAnalytics />,
    tools: "AppDynamics, Kibana, ElasticSearch, Nagios",
    impact: "Reduced Mean Time to Recovery (MTTR) by 60% through real-time fault detection and advanced log analytics.",
    description: "Designed comprehensive monitoring dashboards providing critical insights into system performance and proactive incident management.",
    image: "/prafulla-portfolio/images/Proactive-monitoring.jpeg",
  },
  {
    title: "Automation & Shell Scripting",
    category: "Operational Efficiency",
    icon: <MdTerminal />,
    tools: "Bash, Python, Unix/Linux, Ansible",
    impact: "Automated 100+ repetitive environment management tasks, saving 20+ engineering hours per week.",
    description: "Developed robust automation scripts and configuration management playbooks to drive operational excellence and eliminate human error.",
    image: "/prafulla-portfolio/images/bash-function-tutorial-with-examples.png",
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? achievements.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === achievements.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header">
          <h2>Technical <span>Impact</span> & Excellence</h2>
          <p className="subtitle">Delivering scalable, resilient, and automated enterprise solutions.</p>
        </div>

        {/* Updated Awards Banner: Flex container matching your CSS */}
        {/* <div className="awards-banner">
          <div className="award-item">
            <MdEmojiEvents className="award-icon" />
            <span className="award-name">Ownership Award (Citi)</span>
          </div>
          <div className="award-divider"></div>
          <div className="award-item">
            <MdEmojiEvents className="award-icon" />
            <span className="award-name">Migration Excellence (Citi)</span>
          </div>
          <div className="award-divider"></div>
          <div className="award-item">
            <MdEmojiEvents className="award-icon" />
            <span className="award-name">Star Performer (TCS)</span>
          </div>
          <div className="award-divider"></div>
          <div className="award-item">
            <MdEmojiEvents className="award-icon" />
            <span className="award-name">Service Commitment (TCS)</span>
          </div>
        </div> */}

        <AnimatedPipeline />

        <div className="carousel-wrapper">
          <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev} data-cursor="disable">
            <MdArrowBack />
          </button>
          <button className="carousel-arrow carousel-arrow-right" onClick={goToNext} data-cursor="disable">
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {achievements.map((item, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content glass-card hover-glow">
                    <div className="carousel-info">
                      <div className="carousel-top-meta">
                        <span className="slide-num">0{index + 1}</span>
                        <span className="category-tag">{item.category}</span>
                      </div>

                      <div className="carousel-details">
                        <div className="title-area">
                          <span className="feature-icon">{item.icon}</span>
                          <h4>{item.title}</h4>
                        </div>

                        <p className="carousel-description">{item.description}</p>

                        <div className="impact-box">
                          <h5>Measurable Technical Impact</h5>
                          <p>{item.impact}</p>
                        </div>

                        <div className="carousel-tools">
                          <span className="tools-label">Tech Stack</span>
                          <p>{item.tools}</p>
                        </div>
                      </div>
                    </div>

                    {/* Image Wrapper: Matches "Bleed Fix" CSS */}
                    <div className="carousel-image-wrapper">
                      <WorkImage image={item.image} alt={item.title} />
                      <div className="image-overlay-gradient"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {achievements.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;