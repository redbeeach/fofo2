"use client";

import { useEffect, useRef, useState } from "react";

export default function ForwardEditorialCopy({ children }) {
  const slotRef = useRef(null);
  const copyRef = useRef(null);
  const frameRef = useRef(null);
  const modeRef = useRef("normal");
  const fixedTopRef = useRef(0);
  const [mode, setMode] = useState("normal");

  useEffect(() => {
    const slot = slotRef.current;
    const copy = copyRef.current;
    if (!slot || !copy) return undefined;
    const layout = slot.closest(".forward-editorial-layout");
    const media = layout?.querySelector(".forward-editorial-media");
    if (!layout || !media) return undefined;

    const updateHeight = () => {
      slot.style.setProperty(
        "--forward-copy-height",
        `${copy.getBoundingClientRect().height}px`
      );
    };

    const updatePosition = () => {
      if (window.innerWidth <= 800) return;

      const viewportBottom = window.innerHeight - 24;
      const layoutRect = layout.getBoundingClientRect();
      const slotRect = slot.getBoundingClientRect();
      const copyRect = copy.getBoundingClientRect();
      const mediaRect = media.getBoundingClientRect();
      const copyHeight = copy.offsetHeight;
      const normalCopyBottom = slotRect.top + copyHeight;
      const naturalCopyTop = layoutRect.top;

      const currentMode = modeRef.current;

      const lockCopy = () => {
        modeRef.current = "locked";
        fixedTopRef.current = copyRect.top;
        slot.style.setProperty("--forward-copy-left", `${copyRect.left}px`);
        slot.style.setProperty("--forward-copy-width", `${copyRect.width}px`);
        slot.style.setProperty("--forward-copy-top", `${copyRect.top}px`);
        setMode("locked");
      };

      const unlockCopy = () => {
        modeRef.current = "normal";
        slot.style.removeProperty("--forward-copy-left");
        slot.style.removeProperty("--forward-copy-width");
        slot.style.removeProperty("--forward-copy-top");
        setMode("normal");
      };

      if (currentMode === "normal") {
        if (
          mediaRect.bottom > viewportBottom &&
          normalCopyBottom <= viewportBottom &&
          slotRect.top < viewportBottom
        ) {
          lockCopy();
        }
      } else if (currentMode === "locked" && mediaRect.bottom <= viewportBottom) {
        modeRef.current = "ended";
        slot.style.removeProperty("--forward-copy-left");
        slot.style.removeProperty("--forward-copy-width");
        slot.style.removeProperty("--forward-copy-top");
        setMode("ended");
      } else if (
        currentMode === "locked" &&
        naturalCopyTop >= fixedTopRef.current
      ) {
        unlockCopy();
      } else if (currentMode === "ended" && mediaRect.bottom > viewportBottom) {
        lockCopy();
      }
    };

    const requestUpdate = () => {
      if (frameRef.current) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updatePosition();
      });
    };

    const observer = new ResizeObserver(updateHeight);
    observer.observe(copy);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      ref={slotRef}
      className={`forward-editorial-copy-slot is-${mode}`}
    >
      <div ref={copyRef} className="forward-editorial-copy">
        {children}
      </div>
    </div>
  );
}
