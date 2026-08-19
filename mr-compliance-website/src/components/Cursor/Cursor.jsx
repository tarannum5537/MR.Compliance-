import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Cursor.scss";

/**
 * Custom desktop cursor: a small sharp dot plus a slower trailing ring.
 * GSAP quickTo() gives smooth interpolation without any per-frame React state.
 * Disabled entirely on touch / coarse-pointer devices.
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("mc-custom-cursor");

    // quickTo = pre-compiled tween, cheapest way to ease a value toward a target
    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3" });

    const onMove = (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const interactive = "a, button, [data-cursor='hover']";

    const onOver = (e) => {
      const target = e.target;
      if (target?.closest?.(interactive)) {
        gsap.to(ring, { scale: 1.9, borderColor: "#b6ff00", duration: 0.3 });
        gsap.to(dot, { scale: 0.5, duration: 0.3 });
      }
    };

    const onOut = (e) => {
      const target = e.target;
      if (target?.closest?.(interactive)) {
        gsap.to(ring, { scale: 1, borderColor: "#3a3a3a", duration: 0.3 });
        gsap.to(dot, { scale: 1, duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.body.classList.remove("mc-custom-cursor");
    };
  }, []);

  return (
    <div className="mc-cursor" aria-hidden="true">
      <div className="mc-cursor__ring" ref={ringRef} />
      <div className="mc-cursor__dot" ref={dotRef} />
    </div>
  );
}
