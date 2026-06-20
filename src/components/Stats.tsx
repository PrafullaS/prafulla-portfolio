import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Stats.css";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { value: 6, suffix: "+", label: "Years of Experience", decimals: 1 },
  { value: 50, suffix: "+", label: "Pipelines Built", decimals: 0 },
  { value: 40, suffix: "%", label: "Faster Deployments", decimals: 0 },
  { value: 99.9, suffix: "%", label: "Uptime Maintained", decimals: 1 },
];

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counters = sectionRef.current?.querySelectorAll(".stats-number");
    counters?.forEach((counter, i) => {
      const { value, decimals } = statsData[i];
      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        onUpdate: () => {
          counter.textContent =
            decimals > 0 ? obj.val.toFixed(decimals) : Math.floor(obj.val).toString();
        },
      });
    });
  }, []);

  return (
    <div className="stats-section" ref={sectionRef}>
      {statsData.map((stat, i) => (
        <div className="stats-card glass-card hover-glow" key={i}>
          <div className="stats-value">
            <span className="stats-number">0</span>
            <span className="stats-suffix">{stat.suffix}</span>
          </div>
          <p className="stats-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
