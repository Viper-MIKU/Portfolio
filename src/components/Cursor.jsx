import { useEffect, useRef } from "react";

function Cursor() {

  // ✅ Detect touch device (mobile/tablet)
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  // ❌ Disable cursor on mobile
  if (isTouchDevice) return null;

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${mouse.current.x - 4}px, ${mouse.current.y - 4}px, 0)`;
      }
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${ring.current.x - 16}px, ${ring.current.y - 16}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };

  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

export default Cursor;