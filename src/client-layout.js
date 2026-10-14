"use client";
import { useEffect, useRef } from "react";
import Menu from "./components/Menu/Menu";

export default function ClientLayout({ children }) {
  const pageRef = useRef();

  useEffect(() => {
    let lenis;
    let animationFrame;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;

      lenis = new Lenis({
        autoRaf: false,
        smoothWheel: true,
        lerp: 0.1,
        syncTouch: false,
      });

      const raf = (time) => {
        lenis.raf(time);
        animationFrame = window.requestAnimationFrame(raf);
      };

      animationFrame = window.requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <Menu pageRef={pageRef} />

      <div className="page" ref={pageRef}>
        {children}
      </div>
    </>
  );
}
