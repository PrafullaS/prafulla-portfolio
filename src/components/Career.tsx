// import "./styles/Career.css";

// const Career = () => {
//   return (
//     <div className="career-section section-container">
//       <div className="career-container">
//         <h2>
//           My career <span>&</span>
//           <br /> experience
//         </h2>
//         <div className="career-info">
//           <div className="career-timeline">
//             <div className="career-dot"></div>
//           </div>
//           <div className="career-info-box">
//             <div className="career-info-in">
//               <div className="career-role">
//                 <h4>Senior DevOps Engineer</h4>
//                 <h5>Tata Consultancy Services</h5>
//               </div>
//               <h3>2020</h3>
//             </div>
//             <p>
//               Led two development teams on Mpro, a large-scale insurance
//               operations platform. Developed multiple modules using React.js &
//               migrated critical functionalities to Node.js microservices.
//             </p>
//           </div>
//           <div className="career-info-box">
//             <div className="career-info-in">
//               <div className="career-role">
//                 <h4>DevOps Engineer</h4>
//                 <h5>Citi India</h5>
//               </div>
//               <h3>NOW</h3>
//             </div>
//             <p>
//               Building Solid, a proprietary low-code platform using Angular,
//               Next.js & NestJS. Delivering production-ready CMS-based projects
//               including e-commerce, CRM, and import-export automation systems.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Career;


import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Current Role: Citi India */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer</h4>
                <h5>Citi India</h5>
              </div>
              <h4>NOW</h4>
            </div>
            <p>
              Spearheading microservices migration and CI/CD automation for enterprise
              applications. Optimizing scalable infrastructure using OpenShift,
              Ansible, and Harness to ensure high-performance delivery within
              stringent regulatory frameworks.
            </p>
          </div>

          {/* Previous Role: TCS */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Consultant</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h5>2020 - 25</h5>
            </div>
            <p>
              Pioneered cloud-native solutions leveraging AWS, Terraform (IaC), and Jenkins
              to architect end-to-end CI/CD pipelines. Managed resilient infrastructure
              across EC2, S3, and RDS while automating configurations with Chef and
              proactive monitoring Cloud watch & Trail, AppDynamics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;