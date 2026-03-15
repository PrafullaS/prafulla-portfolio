// import { useEffect, useRef } from "react";
// import "./styles/WhatIDo.css";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const WhatIDo = () => {
//   const containerRef = useRef<(HTMLDivElement | null)[]>([]);
//   const setRef = (el: HTMLDivElement | null, index: number) => {
//     containerRef.current[index] = el;
//   };
//   useEffect(() => {
//     if (ScrollTrigger.isTouch) {
//       containerRef.current.forEach((container) => {
//         if (container) {
//           container.classList.remove("what-noTouch");
//           container.addEventListener("click", () => handleClick(container));
//         }
//       });
//     }
//     return () => {
//       containerRef.current.forEach((container) => {
//         if (container) {
//           container.removeEventListener("click", () => handleClick(container));
//         }
//       });
//     };
//   }, []);
//   return (
//     <div className="whatIDO">
//       <div className="what-box">
//         <h2 className="title">
//           W<span className="hat-h2">HAT</span>
//           <div>
//             I<span className="do-h2"> DO</span>
//           </div>
//         </h2>
//       </div>
//       <div className="what-box">
//         <div className="what-box-in">
//           <div className="what-border2">
//             <svg width="100%">
//               <line
//                 x1="0"
//                 y1="0"
//                 x2="0"
//                 y2="100%"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeDasharray="7,7"
//               />
//               <line
//                 x1="100%"
//                 y1="0"
//                 x2="100%"
//                 y2="100%"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeDasharray="7,7"
//               />
//             </svg>
//           </div>
//           <div
//             className="what-content what-noTouch"
//             ref={(el) => setRef(el, 0)}
//           >
//             <div className="what-border1">
//               <svg height="100%">
//                 <line
//                   x1="0"
//                   y1="0"
//                   x2="100%"
//                   y2="0"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeDasharray="6,6"
//                 />
//                 <line
//                   x1="0"
//                   y1="100%"
//                   x2="100%"
//                   y2="100%"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeDasharray="6,6"
//                 />
//               </svg>
//             </div>
//             <div className="what-corner"></div>

//             <div className="what-content-in">
//               <h3>FRONTEND</h3>
//               <h4>Building Interactive UIs</h4>
//               <p>
//                 Crafting performant, responsive interfaces with modern frameworks.
//                 From SPAs to micro-frontends, I deliver pixel-perfect experiences.
//               </p>
//               <h5>Skillset & tools</h5>
//               <div className="what-content-flex">
//                 <div className="what-tags">AWS Cloud</div>
//                 <div className="what-tags">Docker</div>
//                 <div className="what-tags">Kubernetes</div>
//                 <div className="what-tags">Terraform</div>
//                 <div className="what-tags">Jenkins</div>
//                 <div className="what-tags">Ansible</div>
//                 <div className="what-tags">Git</div>
//                 <div className="what-tags">Bash</div>
//               </div>
//               <div className="what-arrow"></div>
//             </div>
//           </div>
//           <div
//             className="what-content what-noTouch"
//             ref={(el) => setRef(el, 1)}
//           >
//             <div className="what-border1">
//               <svg height="100%">
//                 <line
//                   x1="0"
//                   y1="100%"
//                   x2="100%"
//                   y2="100%"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeDasharray="6,6"
//                 />
//               </svg>
//             </div>
//             <div className="what-corner"></div>
//             <div className="what-content-in">
//               <h3>BACKEND</h3>
//               <h4>Scalable Server Architecture</h4>
//               <p>
//                 Designing robust APIs and microservices. From CMS platforms to
//                 complex business logic, I build backends that scale.
//               </p>
//               <h5>Skillset & tools</h5>
//               <div className="what-content-flex">
//                 <div className="what-tags">OpenShift</div>
//                 <div className="what-tags">Helm Chart</div>
//                 <div className="what-tags">AppDynamics</div>
//                 <div className="what-tags">RDS</div>
//                 <div className="what-tags">LightSpeed</div>
//                 <div className="what-tags">Harness</div>
//                 <div className="what-tags">Microservices</div>
//                 <div className="what-tags">Python</div>
//               </div>
//               <div className="what-arrow"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatIDo;

// function handleClick(container: HTMLDivElement) {
//   container.classList.toggle("what-content-active");
//   container.classList.remove("what-sibling");
//   if (container.parentElement) {
//     const siblings = Array.from(container.parentElement.children);

//     siblings.forEach((sibling) => {
//       if (sibling !== container) {
//         sibling.classList.remove("what-content-active");
//         sibling.classList.toggle("what-sibling");
//       }
//     });
//   }
// }

// My Content

import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          {/* SECTION 1: INFRASTRUCTURE & AUTOMATION */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AUTOMATION</h3>
              <h4>CI/CD & Infrastructure as Code</h4>
              <p>
                Streamlining software delivery through robust automation. I architect
                end-to-end pipelines and manage immutable infrastructure to ensure
                rapid, reliable, and repeatable deployments.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">AWS Cloud</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">Kubernetes</div>
                <div className="what-tags">Terraform</div>
                <div className="what-tags">Jenkins</div>
                <div className="what-tags">Ansible</div>
                <div className="what-tags">Git</div>
                <div className="what-tags">Bash</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* SECTION 2: CLOUD & ORCHESTRATION */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>OPERATIONS</h3>
              <h4>Scalable Cloud Orchestration</h4>
              <p>
                Managing high-availability enterprise environments. From container
                orchestration with OpenShift to proactive monitoring, I ensure
                system resilience and peak operational performance.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">OpenShift</div>
                <div className="what-tags">Helm Chart</div>
                <div className="what-tags">AppDynamics</div>
                <div className="what-tags">RDS</div>
                <div className="what-tags">LightSpeed</div>
                <div className="what-tags">Harness</div>
                <div className="what-tags">Microservices</div>
                <div className="what-tags">Python</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}