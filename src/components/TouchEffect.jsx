import { useEffect } from "react";

function TouchEffect() {

  useEffect(() => {

    const createRipple = (e) => {

      const ripple = document.createElement("span");
      ripple.className = "ripple";

      const size = 80;
      const x = e.touches[0].clientX - size / 2;
      const y = e.touches[0].clientY - size / 2;

      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      window.addEventListener("touchstart", createRipple);
    }

    return () => {
      window.removeEventListener("touchstart", createRipple);
    };

  }, []);

  return null;
}

export default TouchEffect;