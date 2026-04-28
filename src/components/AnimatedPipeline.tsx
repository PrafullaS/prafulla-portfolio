import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaGithub, FaDocker, FaAws } from 'react-icons/fa';
import { SiJenkins, SiKubernetes } from 'react-icons/si';
import './styles/AnimatedPipeline.css';

const AnimatedPipeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });

      // Stage 1: GitHub -> Jenkins
      tl.fromTo('.packet-1', { left: '12%', top: '50%', opacity: 1 }, { left: '35%', duration: 1.5, ease: 'power1.inOut' })
        .to('.icon-jenkins', { scale: 1.3, color: '#0F0', textShadow: '0 0 10px #0F0', duration: 0.2, yoyo: true, repeat: 1 })
        .set('.packet-1', { opacity: 0 });

      // Stage 2: Jenkins -> Docker
      tl.fromTo('.packet-2', { left: '39%', top: '50%', opacity: 1 }, { left: '66%', duration: 1.5, ease: 'power1.inOut' })
        .to('.icon-docker', { scale: 1.3, color: '#0F0', textShadow: '0 0 10px #0F0', duration: 0.2, yoyo: true, repeat: 1 })
        .set('.packet-2', { opacity: 0 });

      // Stage 3: Docker -> K8s & AWS
      tl.fromTo('.packet-k8s', { left: '70%', top: '50%', opacity: 1 }, { left: '85%', top: '80%', duration: 1.5, ease: 'power1.inOut' }, 'deploy')
        .fromTo('.packet-aws', { left: '70%', top: '50%', opacity: 1 }, { left: '85%', top: '20%', duration: 1.5, ease: 'power1.inOut' }, 'deploy');
      
      tl.to('.icon-k8s', { scale: 1.3, color: '#0F0', textShadow: '0 0 10px #0F0', duration: 0.2, yoyo: true, repeat: 1 }, 'deploy+=1.5')
        .to('.icon-aws', { scale: 1.3, color: '#0F0', textShadow: '0 0 10px #0F0', duration: 0.2, yoyo: true, repeat: 1 }, 'deploy+=1.5')
        .set(['.packet-k8s', '.packet-aws'], { opacity: 0 }, 'deploy+=1.7');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pipeline-wrapper" ref={containerRef}>
      {/* Background connecting lines */}
      <svg className="pipeline-lines">
        <line x1="12%" y1="50%" x2="35%" y2="50%" className="pline" />
        <line x1="39%" y1="50%" x2="66%" y2="50%" className="pline" />
        <line x1="70%" y1="50%" x2="85%" y2="80%" className="pline" />
        <line x1="70%" y1="50%" x2="85%" y2="20%" className="pline" />
      </svg>

      {/* Packets */}
      <div className="data-packet packet-1"></div>
      <div className="data-packet packet-2"></div>
      <div className="data-packet packet-k8s"></div>
      <div className="data-packet packet-aws"></div>

      {/* Nodes */}
      <div className="p-node" style={{ left: '10%', top: '50%' }}>
        <div className="p-icon icon-github"><FaGithub /></div>
        <span className="p-label">Source</span>
      </div>
      <div className="p-node" style={{ left: '37.5%', top: '50%' }}>
        <div className="p-icon icon-jenkins"><SiJenkins /></div>
        <span className="p-label">Build</span>
      </div>
      <div className="p-node" style={{ left: '68.75%', top: '50%' }}>
        <div className="p-icon icon-docker"><FaDocker /></div>
        <span className="p-label">Registry</span>
      </div>
      <div className="p-node" style={{ left: '87.5%', top: '80%' }}>
        <div className="p-icon icon-k8s"><SiKubernetes /></div>
        <span className="p-label">K8s Cluster</span>
      </div>
      <div className="p-node" style={{ left: '87.5%', top: '20%' }}>
        <div className="p-icon icon-aws"><FaAws /></div>
        <span className="p-label">AWS Cloud</span>
      </div>
    </div>
  );
};

export default AnimatedPipeline;
