import { useEffect, useRef } from "react";

function Cursor() {

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  if (isTouchDevice) return null;

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${mouse.current.x - 4}px, ${mouse.current.y - 4}px, 0)`;
      }
    };

    const animate = () => {
      // 🔥 tighter follow (0.25 instead of 0.15)
      ring.current.x += (mouse.current.x - ring.current.x) * 0.25;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.25;

      // ✅ clamp to viewport (fix corner bug)
      const maxX = window.innerWidth;
      const maxY = window.innerHeight;

      ring.current.x = Math.max(0, Math.min(ring.current.x, maxX));
      ring.current.y = Math.max(0, Math.min(ring.current.y, maxY));

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${ring.current.x - 16}px, ${ring.current.y - 16}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafRef.current);
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