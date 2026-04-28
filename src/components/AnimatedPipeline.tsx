import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaGithub, FaDocker, FaAws, FaRocket } from 'react-icons/fa';
import { SiJenkins, SiApachemaven, SiRedhatopenshift } from 'react-icons/si';
import './styles/AnimatedPipeline.css';

const AnimatedPipeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });

      // Stage 1: GitHub -> Jenkins/Tekton
      tl.fromTo('.packet-1', { left: '12%', top: '50%', opacity: 1 }, { left: '23%', duration: 1, ease: 'power1.inOut' })
        .to('.icon-jenkins', { scale: 1.3, color: '#0F0', textShadow: '0 0 10px #0F0', duration: 0.2, yoyo: true, repeat: 1 })
        .set('.packet-1', { opacity: 0 });

      // Stage 2: Jenkins/Tekton -> Maven
      tl.fromTo('.packet-2', { left: '29%', top: '50%', opacity: 1 }, { left: '39%', duration: 1, ease: 'power1.inOut' })
        .to('.icon-maven', { scale: 1.3, color: '#0F0', textShadow: '0 0 10px #0F0', duration: 0.2, yoyo: true, repeat: 1 })
        .set('.packet-2', { opacity: 0 });

      // Stage 3: Maven -> Docker
      tl.fromTo('.packet-3', { left: '45%', top: '50%', opacity: 1 }, { left: '55%', duration: 1, ease: 'power1.inOut' })
        .to('.icon-docker', { scale: 1.3, color: '#0F0', textShadow: '0 0 10px #0F0', duration: 0.2, yoyo: true, repeat: 1 })
        .set('.packet-3', { opacity: 0 });

      // Stage 4: Docker -> Harness
      tl.fromTo('.packet-4', { left: '61%', top: '50%', opacity: 1 }, { left: '71%', duration: 1, ease: 'power1.inOut' })
        .to('.icon-harness', { scale: 1.3, color: '#0F0', textShadow: '0 0 10px #0F0', duration: 0.2, yoyo: true, repeat: 1 })
        .set('.packet-4', { opacity: 0 });

      // Stage 5: Harness -> OpenShift & AWS
      tl.fromTo('.packet-os', { left: '77%', top: '50%', opacity: 1 }, { left: '90%', top: '25%', duration: 1.2, ease: 'power1.inOut' }, 'deploy')
        .fromTo('.packet-aws', { left: '77%', top: '50%', opacity: 1 }, { left: '90%', top: '75%', duration: 1.2, ease: 'power1.inOut' }, 'deploy');
      
      tl.to('.icon-os', { scale: 1.3, color: '#0F0', textShadow: '0 0 10px #0F0', duration: 0.2, yoyo: true, repeat: 1 }, 'deploy+=1.2')
        .to('.icon-aws', { scale: 1.3, color: '#0F0', textShadow: '0 0 10px #0F0', duration: 0.2, yoyo: true, repeat: 1 }, 'deploy+=1.2')
        .set(['.packet-os', '.packet-aws'], { opacity: 0 }, 'deploy+=1.4');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pipeline-wrapper" ref={containerRef}>
      {/* Background connecting lines */}
      <svg className="pipeline-lines">
        <line x1="12%" y1="50%" x2="23%" y2="50%" className="pline" />
        <line x1="29%" y1="50%" x2="39%" y2="50%" className="pline" />
        <line x1="45%" y1="50%" x2="55%" y2="50%" className="pline" />
        <line x1="61%" y1="50%" x2="71%" y2="50%" className="pline" />
        <line x1="77%" y1="50%" x2="90%" y2="25%" className="pline" />
        <line x1="77%" y1="50%" x2="90%" y2="75%" className="pline" />
      </svg>

      {/* Packets */}
      <div className="data-packet packet-1"></div>
      <div className="data-packet packet-2"></div>
      <div className="data-packet packet-3"></div>
      <div className="data-packet packet-4"></div>
      <div className="data-packet packet-os"></div>
      <div className="data-packet packet-aws"></div>

      {/* Nodes */}
      <div className="p-node" style={{ left: '10%', top: '50%' }}>
        <div className="p-icon icon-github"><FaGithub /></div>
        <span className="p-label">GitHub</span>
      </div>
      <div className="p-node" style={{ left: '26%', top: '50%' }}>
        <div className="p-icon icon-jenkins"><SiJenkins /></div>
        <span className="p-label">CI (Tekton)</span>
      </div>
      <div className="p-node" style={{ left: '42%', top: '50%' }}>
        <div className="p-icon icon-maven"><SiApachemaven /></div>
        <span className="p-label">Maven</span>
      </div>
      <div className="p-node" style={{ left: '58%', top: '50%' }}>
        <div className="p-icon icon-docker"><FaDocker /></div>
        <span className="p-label">Docker</span>
      </div>
      <div className="p-node" style={{ left: '74%', top: '50%' }}>
        <div className="p-icon icon-harness"><FaRocket /></div>
        <span className="p-label">Harness CD</span>
      </div>
      
      {/* Deploy Targets */}
      <div className="p-node" style={{ left: '90%', top: '25%' }}>
        <div className="p-icon icon-os"><SiRedhatopenshift /></div>
        <span className="p-label">OpenShift</span>
      </div>
      <div className="p-node" style={{ left: '90%', top: '75%' }}>
        <div className="p-icon icon-aws"><FaAws /></div>
        <span className="p-label">AWS</span>
      </div>
    </div>
  );
};

export default AnimatedPipeline;
