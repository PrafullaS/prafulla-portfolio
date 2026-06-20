import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Let's Connect</h3>
        <p className="contact-subtitle">
          Open to DevOps, Cloud Engineering & SRE opportunities. Let's build something great.
        </p>
        <div className="contact-cta-row">
          <a
            href="mailto:mazaawsdata@gmail.com"
            className="contact-cta-btn"
            data-cursor="disable"
          >
            ✉ Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/prafulla-shinde-devops"
            target="_blank"
            rel="noreferrer"
            className="contact-cta-btn contact-cta-secondary"
            data-cursor="disable"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="contact-flex">
          <div className="contact-box">
            <h4>Contact</h4>
            <div className="contact-detail-list">
              <div className="contact-detail-item">
                <span className="contact-detail-label">Email</span>
                <a href="mailto:mazaawsdata@gmail.com" data-cursor="disable">
                  mazaawsdata@gmail.com
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-label">Phone</span>
                <a href="tel:+919762154728" data-cursor="disable">
                  +91 9834196375
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-label">Location</span>
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>

            <h4 style={{ marginTop: "2rem" }}>Education</h4>
            <div className="education-list">
              <div className="edu-item">
                <div className="edu-degree">Bachelor of Engineering (BE)</div>
                <div className="edu-college">Savitribai Phule Pune University</div>
                <div className="edu-year">2016 – 2019</div>
              </div>
              <div className="edu-item">
                <div className="edu-degree">Diploma in Engineering</div>
                <div className="edu-college">K. K. Wagh Polytechnic</div>
                <div className="edu-year">2013 – 2016</div>
              </div>
            </div>

            <h4 style={{ marginTop: "2rem" }}>Languages</h4>
            <div className="lang-row">
              {["English", "Hindi", "Marathi"].map((l) => (
                <span className="lang-pill" key={l}>{l}</span>
              ))}
            </div>
          </div>

          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/prafullashinde"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/prafulla-shinde-devops"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://x.com/prafullashinde"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/prafullshinde55"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>

            <div className="contact-footer">
              <p>Designed & Developed by <span className="contact-footer-name">Prafulla Shinde</span></p>
              <p className="contact-copy">© {new Date().getFullYear()} · All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;