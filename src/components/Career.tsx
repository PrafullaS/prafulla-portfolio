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
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer</h4>
                <h5>Tata Consultancy Service</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Implemented CI/CD pipelines using Jenkins, Docker, Maven,
              and Terraform (IaC) to automate build, test, and deployment processes.
              Managed scalable AWS infrastructure including EC2, S3, RDS, VPC, ELB, EBS,
              and Auto Scaling. Built and deployed applications to Apache Tomcat using Maven-generated WAR files
              and maintained Apache web servers. Automated operational tasks with Bash scripting and
              Dockerized workloads across Dev, Pre-Prod, and UAT environments.
              Monitored systems with Cloud Watch - Cloud Trail, Appdynamics and used GitHub for version control,
              configuration management, and release coordination.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer</h4>
                <h5>CITI India</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designed and maintained CI/CD pipelines using Jenkins, Harness, Tekton, Docker, Maven,
              and Helm to automate build, test, and deployment workflows across multiple environments.
              Built and deployed WAR-based applications on Apache Tomcat and managed static content on Apache web servers.
              Led platform migrations including Jenkins to Lightspeed, Bitbucket to GitHub Enterprise,
              and workload transitions to OpenShift, improving automation and scalability.
              Developed UNIX/Linux shell scripts and containerized applications using Docker,
              deploying them on OpenShift across Dev, SIT, UAT, and Production environments.
              Also managed on-prem infrastructure, release processes, and monitoring using Elasticsearch, AppDynamics,
              and Kibana to ensure high availability and operational stability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
