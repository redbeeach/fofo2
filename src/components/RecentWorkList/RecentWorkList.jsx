"use client";
import "./RecentWorkList.css";
import { useEffect, useRef } from "react";
import { recentWorkProjects } from "./recentWorkProjects";
import { useViewTransition } from "@/hooks/useViewTransition";

export default function RecentWorkList() {
  const sectionRef = useRef(null);
  const previewRef = useRef(null);
  const previewImgRef = useRef(null);
  const { navigateWithTransition } = useViewTransition();

  useEffect(() => {
    const section = sectionRef.current;
    const preview = previewRef.current;
    const previewImg = previewImgRef.current;
    const table = section?.querySelector(".recent-work-table");
    if (!section || !preview || !previewImg || !table) return;

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { x: pointer.x, y: pointer.y };
    let activeRow = null;
    let rafId = null;
    let switchTimeout = null;
    let hasPointer = false;

    const render = () => {
      current.x += (pointer.x - current.x) * 0.18;
      current.y += (pointer.y - current.y) * 0.18;
      preview.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;

      const distance = Math.abs(pointer.x - current.x) + Math.abs(pointer.y - current.y);
      if (activeRow || distance > 0.2) {
        rafId = requestAnimationFrame(render);
        return;
      }

      rafId = null;
    };

    const startRender = () => {
      if (!rafId) rafId = requestAnimationFrame(render);
    };

    const setActiveRow = (row) => {
      if (!row || row === activeRow) return;

      activeRow?.classList.remove("is-active");
      activeRow = row;
      activeRow.classList.add("is-active");

      const img = row.getAttribute("data-img");
      if (img && previewImg.getAttribute("src") !== img) {
        if (switchTimeout) window.clearTimeout(switchTimeout);
        preview.classList.add("is-switching");
        switchTimeout = window.setTimeout(() => {
          previewImg.src = img;
          preview.classList.remove("is-switching");
          switchTimeout = null;
        }, 90);
      }
    };

    const showPreview = (row) => {
      setActiveRow(row);
      preview.classList.add("is-visible");
      startRender();
    };

    const hidePreview = () => {
      activeRow?.classList.remove("is-active");
      activeRow = null;
      preview.classList.remove("is-visible", "is-switching");
      startRender();
    };

    const syncRowUnderPointer = () => {
      if (!hasPointer) return;

      const target = document.elementFromPoint(pointer.x, pointer.y);
      const row = target instanceof Element ? target.closest(".recent-work-row") : null;

      if (row && table.contains(row)) {
        showPreview(row);
        return;
      }

      hidePreview();
    };

    const handlePointerMove = (event) => {
      hasPointer = true;
      pointer.x = event.clientX;
      pointer.y = event.clientY;

      syncRowUnderPointer();
    };

    const handlePointerLeave = () => {
      hidePreview();
    };

    const handleClick = (event) => {
      const target = event.target;
      const row = target instanceof Element ? target.closest(".recent-work-row") : null;
      if (!row || !table.contains(row)) return;

      event.preventDefault();
      const href = row.getAttribute("href");
      if (href) navigateWithTransition(href);
    };

    table.addEventListener("pointermove", handlePointerMove);
    table.addEventListener("pointerleave", handlePointerLeave);
    table.addEventListener("click", handleClick);
    window.addEventListener("scroll", syncRowUnderPointer, { passive: true });
    window.addEventListener("wheel", syncRowUnderPointer, { passive: true });
    window.addEventListener("touchstart", hidePreview, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (switchTimeout) window.clearTimeout(switchTimeout);
      activeRow?.classList.remove("is-active");
      table.removeEventListener("pointermove", handlePointerMove);
      table.removeEventListener("pointerleave", handlePointerLeave);
      table.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", syncRowUnderPointer);
      window.removeEventListener("wheel", syncRowUnderPointer);
      window.removeEventListener("touchstart", hidePreview);
    };
  }, [navigateWithTransition]);

  return (
    <section className="recent-work-list" ref={sectionRef}>
      <div className="recent-work-kicker">Recent Work</div>

      <div className="recent-work-preview" ref={previewRef}>
        <img ref={previewImgRef} src={recentWorkProjects[0]?.img} alt="" />
      </div>

      <div className="recent-work-table">
        {recentWorkProjects.map((project) => (
          <a
            className="recent-work-row"
            href={project.route}
            data-img={project.img}
            key={project.name}
          >
            <span className="recent-work-title">{project.name}</span>
            <span className="recent-work-meta">
              <span>{project.service}</span>
              <span>{project.year}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
