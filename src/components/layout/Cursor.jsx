import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor ring implementing DESIGN_SYSTEM §8.
 * Only rendered on fine pointers and when prefers-reduced-motion is not set.
 * Positioned directly from pointer coordinates in requestAnimationFrame (never lags).
 * Native cursor is never hidden.
 */
export default function Cursor() {
  const cursorRef = useRef(null);
  const [active, setActive] = useState(false);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    // Check fine pointer and reduced motion
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.classList.contains("reduced");

    if (!isFinePointer || isReduced) return;

    setActive(true);

    let mouseX = -100;
    let mouseY = -100;
    let rafId = null;

    const onPointerMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    const updatePosition = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      rafId = null;
    };

    const onPointerOver = (e) => {
      const target = e.target;
      if (!target) return;
      const isClickable =
        target.closest("a, button, input, textarea, select, [role='button'], summary, .cursor-pointer") !== null;
      setInteractive(isClickable);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (!active) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      aria-hidden="true"
    >
      <div
        className={`size-7 rounded-full border border-cyan-400 transition-all duration-150 ease-out ${
          interactive
            ? "scale-150 bg-cyan-400/15 shadow-[0_0_12px_rgba(46,211,240,0.6)]"
            : "scale-100 bg-transparent opacity-60"
        }`}
      />
    </div>
  );
}
