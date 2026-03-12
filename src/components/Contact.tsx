import { MdArrowOutward } from "react-icons/md";
// import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:maaawsdata@gmail.com" data-cursor="disable">
                maaawsdata@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>Bachelor's Degree in Engineering</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/raxx21"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/prafulla-shinde/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/prafullashinde"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/prafullashinde55"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          {/* <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Rajesh Chityal</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
