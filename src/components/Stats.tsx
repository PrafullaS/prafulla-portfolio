import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Stats.css";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Pipelines Built" },
  { value: 3, suffix: "", label: "Cloud Platforms" },
  { value: 100, suffix: "+", label: "Deployments / Month" },
];

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counters = sectionRef.current?.querySelectorAll(".stats-number");
    counters?.forEach((counter, i) => {
      const target = statsData[i].value;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        onUpdate: () => {
          counter.textContent = Math.floor(obj.val).toString();
        },
      });
    });
  }, []);

  return (
    <div className="stats-section" ref={sectionRef}>
      {statsData.map((stat, i) => (
        <div className="stats-card" key={i}>
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
