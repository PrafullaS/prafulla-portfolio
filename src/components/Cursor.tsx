import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hover = false;
    const cursorDot = cursorDotRef.current!;
    const cursorOutline = cursorOutlineRef.current!;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };
    
    document.addEventListener("mousemove", (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      
      // Dot moves instantly
      gsap.to(cursorDot, { x: mousePos.x, y: mousePos.y, duration: 0 });
    });

    requestAnimationFrame(function loop() {
      if (!hover) {
        const delay = 6;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;
        // Outline trails behind
        gsap.to(cursorOutline, { x: cursorPos.x, y: cursorPos.y, duration: 0.1 });
      }
      requestAnimationFrame(loop);
    });

    const addHoverEffect = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((item) => {
        const element = item as HTMLElement;
        element.addEventListener("mouseover", () => {
          if (element.dataset.cursor === "disable") {
            cursorDot.classList.add("cursor-disable");
            cursorOutline.classList.add("cursor-disable");
            return;
          }
          cursorOutline.classList.add("cursor-hover");
        });
        element.addEventListener("mouseout", () => {
          cursorDot.classList.remove("cursor-disable");
          cursorOutline.classList.remove("cursor-hover", "cursor-disable");
          hover = false;
        });
      });
    };
    
    addHoverEffect();
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={cursorDotRef}></div>
      <div className="cursor-outline" ref={cursorOutlineRef}></div>
    </>
  );
};

export default Cursor;
