"use client";

import Footer from "@/components/Footer/Footer";
import ForwardEditorialCopy from "@/components/ProjectTemplates/ForwardEditorialCopy";
import Copy from "@/components/Copy/Copy";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ForwardProject({ project, nextProject, totalProjects }) {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(
        ".forward-editorial-hero h1, .forward-editorial-meta, .forward-editorial-lead, .forward-editorial-sections article, .forward-editorial-details, .forward-editorial-live",
        page
      );

      gsap.set(targets, { autoAlpha: 0, y: 24 });
      targets.forEach((target) => {
        gsap.to(target, {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: target,
            start: "top 88%",
            once: true,
          },
        });
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, page);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="project-page forward-editorial-page">
      <section className="forward-editorial-hero">
        <h1>{project.title}</h1>
        <div className="forward-editorial-meta">
          <span>{project.kicker}</span>
          <span>{project.year}</span>
        </div>
      </section>

      <section className="forward-editorial-layout">
        <ForwardEditorialCopy>
          <p className="forward-editorial-lead">
            클라이언트의 높은 디자인 완성도 요구와 실제 운영 편의성을 함께
            고려하여 제작한 프로젝트입니다.
          </p>

          <div className="forward-editorial-sections">
            <article>
              <h2>Overview</h2>
              <p>
                포워드피부과는 브랜드가 가진 신뢰감과 전문성을 웹 환경에서 효과적으로 전달하고, 방문자가 필요한 정보를 직관적으로 탐색할 수 있도록 구축한 웹사이트입니다. 디자인의 시각적 완성도뿐만 아니라 실제 운영 환경에서의 관리 편의성까지 함께 고려했습니다.
              </p>
            </article>
            <article>
              <h2>Challenge</h2>
              <p>
                클라이언트가 디자인에 굉장히 꼼꼼하고 세심한 편이어서 제작
                과정에서 전체적인 방향을 한 차례 수정했고, 메인 디자인 역시 여러
                차례 컨펌을 거친 후 퍼블리싱을 진행했습니다. 디자인의 작은
                디테일까지 놓치지 않는 것이 이번 프로젝트의 가장 중요한
                과제였습니다.
              </p>
            </article>
            <article>
              <h2>Our approach</h2>
              <p>
                디자인 시안을 기준으로 여백, 폰트, 이미지 배치 등을 1px 단위까지 세밀하게 검토하며 퍼블리싱을 진행했습니다. 
                정해진 일정 안에서 다양한 인터랙션을 구현해야 했기 때문에 애니메이션의 자연스러운 움직임과 성능 최적화에도 집중했습니다. <br /> <br />

                또한 장비 소개 페이지와 의료진 소개 등 운영 중 변경이 필요한 콘텐츠는 관리자가 직접 등록하고 수정할 수 있도록 개발하여, 
                클라이언트가 지속적으로 관리할 수 있는 구조를 마련했습니다.
              </p>
            </article>
            <article>
              <h2>Outcome</h2>
              <p>
                반복적인 디자인 수정과 피드백을 반영하면서도 정해진 일정 안에서 프로젝트를 완성했습니다. 
                디자인의 완성도와 인터랙션의 자연스러움을 유지하면서, 관리자가 직접 콘텐츠를 운영할 수 있는 웹사이트를 구축할 수 있었습니다. <br /> <br />

                특히 완성된 포워드피부과 웹사이트는 GDWEB 디자인 어워드에서 수상하며 웹사이트의 디자인 완성도를 대외적으로 인정받았습니다. <br /> <br />

                이번 프로젝트를 통해 클라이언트의 요구사항을 정확하게 이해하고, 디자인의 디테일과 개발 일정, 운영 편의성 사이에서 균형을 맞추는 실무 경험을 쌓을 수 있었습니다. </p>
            </article>
          </div>

          <div className="forward-editorial-details">
            <div><span>Role &amp; Scope</span><strong>{project.form}</strong></div>
            <div><span>CMS</span><strong>{project.medium}</strong></div>
            <div><span>Used Tools</span><strong>{project.studio}</strong></div>
          </div>
          {project.liveUrl && (
            <a
              className="forward-editorial-live"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open the Forward dermatology website"
            >
              <span>LIVE PROJECT</span>
              <span className="forward-editorial-live-icon" aria-hidden="true">↗</span>
            </a>
          )}
        </ForwardEditorialCopy>

        <div className="forward-editorial-media">

          {project.galleryImages.map((src, index) => (
            <figure
              key={`${project.slug}-editorial-image-${index}`}
              className={index === 0 ? "forward-editorial-media-primary" : undefined}
            >
              <img
                src={src}
                alt={`${project.name} preview ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </section>

      {nextProject && (
        <a className="next-project" href={nextProject.route}>
          <Copy animateOnScroll={true}>
            <p style={{ marginBottom: "1rem" }}>
              {nextProject.index} - {totalProjects}
            </p>
            <h2>Next</h2>
          </Copy>

          <div className="next-project-img">
            <div className="next-project-img-wrapper">
              <img src={nextProject.bannerImage} alt={nextProject.name} />
            </div>
          </div>

          <Copy animateOnScroll={true}>
            <h3>{nextProject.name}</h3>
          </Copy>
        </a>
      )}

      <Footer />
    </div>
  );
}
