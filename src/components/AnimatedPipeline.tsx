import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaGithub, FaRocket, FaServer } from 'react-icons/fa';
import { SiJenkins, SiBitbucket, SiRedhatopenshift, SiHelm, SiTekton } from 'react-icons/si';
import './styles/AnimatedPipeline.css';

const AnimatedPipeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Migrations Timeline
      const tlMigrations = gsap.timeline({ repeat: -1 });

      // Bitbucket -> Github
      tlMigrations.fromTo('.packet-m1', { left: '25%', top: '15%', opacity: 1 }, { left: '75%', duration: 1.5, ease: 'power1.inOut' }, 0)
        .to('.icon-github', { scale: 1.2, color: '#14b8a6', textShadow: '0 0 10px #14b8a6', duration: 0.3, yoyo: true, repeat: 1 }, 1.3)
        .set('.packet-m1', { opacity: 0 }, 1.5);

      // Jenkins -> Tekton + Harness
      tlMigrations.fromTo('.packet-m2', { left: '25%', top: '35%', opacity: 1 }, { left: '53%', duration: 1, ease: 'power1.inOut' }, 0.5)
        .to('.icon-tekton-m', { scale: 1.2, color: '#14b8a6', textShadow: '0 0 10px #14b8a6', duration: 0.3, yoyo: true, repeat: 1 }, 1.3)
        .set('.packet-m2', { opacity: 0 }, 1.5)
        .fromTo('.packet-m2-split', { left: '63%', top: '35%', opacity: 1 }, { left: '75%', duration: 0.8, ease: 'power1.inOut' }, 1.5)
        .to('.icon-harness-m', { scale: 1.2, color: '#14b8a6', textShadow: '0 0 10px #14b8a6', duration: 0.3, yoyo: true, repeat: 1 }, 2.1)
        .set('.packet-m2-split', { opacity: 0 }, 2.3);

      // Physical -> Baremetal
      tlMigrations.fromTo('.packet-m3', { left: '25%', top: '55%', opacity: 1 }, { left: '75%', duration: 1.5, ease: 'power1.inOut' }, 1)
        .to('.icon-baremetal', { scale: 1.2, color: '#14b8a6', textShadow: '0 0 10px #14b8a6', duration: 0.3, yoyo: true, repeat: 1 }, 2.3)
        .set('.packet-m3', { opacity: 0 }, 2.5);

      // Deployment Timeline
      const tlDeploy = gsap.timeline({ repeat: -1, delay: 0.5 });
      
      // Github -> Tekton
      tlDeploy.fromTo('.packet-d1', { left: '15%', top: '85%', opacity: 1 }, { left: '27%', duration: 1, ease: 'power0' })
        .to('.icon-tekton-d', { scale: 1.2, color: '#0F0', textShadow: '0 0 10px #0F0', duration: 0.2, yoyo: true, repeat: 1 })
        .set('.packet-d1', { opacity: 0 });

      // Tekton -> Harness
      tlDeploy.fromTo('.packet-d2', { left: '37%', top: '85%', opacity: 1 }, { left: '47%', duration: 1, ease: 'power0' })
        .to('.icon-harness-d', { scale: 1.2, color: '#0F0', textShadow: '0 0 10px #0F0', duration: 0.2, yoyo: true, repeat: 1 })
        .set('.packet-d2', { opacity: 0 });

      // Harness -> Helm
      tlDeploy.fromTo('.packet-d3', { left: '57%', top: '85%', opacity: 1 }, { left: '67%', duration: 1, ease: 'power0' })
        .to('.icon-helm', { scale: 1.2, color: '#0F0', textShadow: '0 0 10px #0F0', duration: 0.2, yoyo: true, repeat: 1 })
        .set('.packet-d3', { opacity: 0 });

      // Helm -> Baremetal
      tlDeploy.fromTo('.packet-d4', { left: '77%', top: '85%', opacity: 1 }, { left: '87%', duration: 1, ease: 'power0' })
        .to('.icon-deploy-target', { scale: 1.2, color: '#0F0', textShadow: '0 0 10px #0F0', duration: 0.2, yoyo: true, repeat: 1 })
        .set('.packet-d4', { opacity: 0 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pipeline-wrapper" ref={containerRef}>
      <div className="section-title title-migration">Tool Migrations</div>
      
      {/* Background connecting lines for Migrations */}
      <svg className="pipeline-lines">
        <line x1="25%" y1="15%" x2="75%" y2="15%" className="pline" />
        <line x1="25%" y1="35%" x2="53%" y2="35%" className="pline" />
        <line x1="63%" y1="35%" x2="75%" y2="35%" className="pline" />
        <line x1="25%" y1="55%" x2="75%" y2="55%" className="pline" />
      </svg>

      {/* Migration Packets */}
      <div className="data-packet packet-migration packet-m1"></div>
      <div className="data-packet packet-migration packet-m2"></div>
      <div className="data-packet packet-migration packet-m2-split"></div>
      <div className="data-packet packet-migration packet-m3"></div>

      {/* Migration Nodes (Legacy Left, Modern Right) */}
      <div className="p-node" style={{ left: '20%', top: '15%' }}>
        <div className="p-icon"><SiBitbucket /></div>
        <span className="p-label">Bitbucket</span>
      </div>
      <div className="p-node" style={{ left: '80%', top: '15%' }}>
        <div className="p-icon p-icon-modern icon-github"><FaGithub /></div>
        <span className="p-label">GitHub</span>
      </div>

      <div className="p-node" style={{ left: '20%', top: '35%' }}>
        <div className="p-icon"><SiJenkins /></div>
        <span className="p-label">Jenkins</span>
      </div>
      <div className="p-node" style={{ left: '58%', top: '35%' }}>
        <div className="p-icon p-icon-modern icon-tekton-m"><SiTekton /></div>
        <span className="p-label">Tekton CI</span>
      </div>
      <div className="p-node" style={{ left: '80%', top: '35%' }}>
        <div className="p-icon p-icon-modern icon-harness-m"><FaRocket /></div>
        <span className="p-label">Harness CD</span>
      </div>

      <div className="p-node" style={{ left: '20%', top: '55%' }}>
        <div className="p-icon"><FaServer /></div>
        <span className="p-label">Physical Servers<br/>(OpenShift)</span>
      </div>
      <div className="p-node" style={{ left: '80%', top: '55%' }}>
        <div className="p-icon p-icon-modern icon-baremetal"><SiRedhatopenshift /></div>
        <span className="p-label">Baremetal Cluster<br/>(OpenShift)</span>
      </div>

      <div className="divider"></div>
      <div className="section-title title-deployment">Modern Deployment Pipeline</div>

      {/* Background connecting lines for Deployment */}
      <svg className="pipeline-lines">
        <line x1="15%" y1="85%" x2="27%" y2="85%" className="pline pline-flow" />
        <line x1="37%" y1="85%" x2="47%" y2="85%" className="pline pline-flow" />
        <line x1="57%" y1="85%" x2="67%" y2="85%" className="pline pline-flow" />
        <line x1="77%" y1="85%" x2="87%" y2="85%" className="pline pline-flow" />
      </svg>

      {/* Deployment Packets */}
      <div className="data-packet packet-d1"></div>
      <div className="data-packet packet-d2"></div>
      <div className="data-packet packet-d3"></div>
      <div className="data-packet packet-d4"></div>

      {/* Deployment Nodes */}
      <div className="p-node" style={{ left: '10%', top: '85%' }}>
        <div className="p-icon p-icon-modern"><FaGithub /></div>
        <span className="p-label">GitHub</span>
      </div>
      <div className="p-node" style={{ left: '32%', top: '85%' }}>
        <div className="p-icon p-icon-modern icon-tekton-d"><SiTekton /></div>
        <span className="p-label">Tekton</span>
      </div>
      <div className="p-node" style={{ left: '52%', top: '85%' }}>
        <div className="p-icon p-icon-modern icon-harness-d"><FaRocket /></div>
        <span className="p-label">Harness</span>
      </div>
      <div className="p-node" style={{ left: '72%', top: '85%' }}>
        <div className="p-icon p-icon-modern icon-helm"><SiHelm /></div>
        <span className="p-label">Helm Charts</span>
      </div>
      <div className="p-node" style={{ left: '92%', top: '85%' }}>
        <div className="p-icon p-icon-modern icon-deploy-target"><SiRedhatopenshift /></div>
        <span className="p-label">Baremetal</span>
      </div>
    </div>
  );
};

export default AnimatedPipeline;
