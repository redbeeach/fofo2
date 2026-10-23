"use client";
import "./studio.css";
import TeamCards from "@/components/TeamCards/TeamCards";
import Spotlight from "@/components/Spotlight/Spotlight";
import CTACard from "@/components/CTACard/CTACard";
import Footer from "@/components/Footer/Footer";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "@/components/Copy/Copy";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad, { passive: true });

    const historyRows = document.querySelectorAll(".about-history-reveal");
    const historyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            historyObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12%" }
    );

    historyRows.forEach((row) => historyObserver.observe(row));

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", onLoad);
      historyObserver.disconnect();
    };
  }, []);

  return (
    <div className="studio-page">
      <section className="studio-header">
        <div className="container">
          <div className="studio-header-row">
            <Copy delay={0.8}>
              <h1>BEYOND</h1>
            </Copy>
          </div>

          <div className="studio-header-row">
            <Copy delay={0.95}>
              <h1>THE INTERFACE</h1>
            </Copy>
          </div>
        </div>
      </section>

      <section className="studio-copy">
        <div className="container">
          <div className="about-section-label">About</div>
          <Copy animateOnScroll={true}>
            <h2 className="about-greeting-title">
              보이는 화면을 넘어, 실제로 작동하는 웹을 만듭니다.
            </h2>
            <p className="lg about-greeting-copy">
              안녕하세요. 웹 퍼블리셔 윤홍비입니다. <br />
              웹 에이전시에서 다양한 브랜드와 의료기관의 웹사이트를 구축하며,<br />
              정교한 UI 구현부터 PHP·MySQL 기반 기능 개발, GNUboard CMS 커스터마이징까지 경험했습니다.
              <br /> 디자인을 코드로 구현하는 데 그치지 않고, 사용자의 경험과
              관리자의 운영 효율을 함께 고민합니다.<br /> 최근에는 Next.js와 AI 기술을
              결합한 SEO 자동화 시스템을 직접 기획하고 개발하며 웹 개발의 새로운
              가능성을 탐구하고 있습니다.
            </p>
          </Copy>
        </div>
      </section>


      <section className="about-services">
        <div className="container">
          <div className="about-section-label">What I do</div>
          <div className="about-service-list">
            <Copy animateOnScroll={true}><article>
              <span>01 / EXPERTISE</span>
              <h2>Web Publishing</h2>
              <p className="about-service-copy">반응형 웹 · 시맨틱 마크업 · 웹 접근성</p>
              <p>시안을 정확한 반응형 화면으로 구현하고, 다양한 디바이스에서 안정적으로 동작하도록 퍼블리싱합니다.</p>
            </article></Copy>
            <Copy animateOnScroll={true}><article>
              <span>02 / EXPERTISE</span>
              <h2>CMS Development</h2>
              <p className="about-service-copy">GNUboard · PHP · MySQL · AJAX</p>
              <p>그누보드 기반의 게시판, 예약, 상담, 관리자 기능을 실제 운영 환경에 맞춰 설계하고 개발합니다.</p>
            </article></Copy>
            <Copy animateOnScroll={true}><article>
              <span>03 / EXPERTISE</span>
              <h2>Creative Interaction</h2>
              <p className="about-service-copy">GSAP · ScrollTrigger · Swiper</p>
              <p>GSAP와 Swiper.js를 활용해 브랜드의 성격을 전달하는 인터랙션과 자연스러운 움직임을 구현합니다.</p>
            </article></Copy>
            <Copy animateOnScroll={true}><article>
              <span>04 / EXPERTISE</span>
              <h2>AI &amp; Automation</h2>
              <p className="about-service-copy">Next.js · AI Integration · SEO/GEO</p>
              <p>Next.js, TypeScript, Supabase를 기반으로 SEO 자동화 서비스처럼 실제 사용할 수 있는 제품을 만듭니다.</p>
            </article></Copy>
          </div>
        </div>
      </section>

      <section className="about-history about-history-current">
        <div className="container">
          <div className="about-section-label">History</div>
          <div className="about-history-list">
            <div className="about-history-reveal">
              <div className="about-history-row">
                <Copy animateOnScroll={true}>
                  <span className="about-history-index">01</span>
                </Copy>
                <Copy animateOnScroll={true}>
                  <span className="about-history-period">2020.10 — 2023.04</span>
                </Copy>
                <div className="about-history-content">
                  <Copy animateOnScroll={true}>
                    <h2>모든세븐</h2>
                    <h3>웹 에이전시 | 개발팀 대리</h3>
                    <ul>
                    <li>기업, 쇼핑몰, 교육기관 등 다양한 산업군의 웹사이트 구축 및 GNUboard·Youngcart 기반 CMS 커스터마이징</li>
                    <li>HTML, CSS, JavaScript를 활용한 웹 퍼블리싱 및 PHP·MySQL 기반 게시판, 회원, 상품 관리 등 동적 기능 개발</li>
                    <li>클라이언트 요구사항 분석부터 개발, 테스트, 배포까지 프로젝트 전반의 개발 업무 수행</li>
                    <li>카페24 호스팅 환경의 서버 설정, 도메인 연결, 웹사이트 배포 및 운영 관리</li>
                    <li>웹사이트 오픈 이후 유지보수, 기능 고도화 및 운영 과정에서 발생하는 기술적 이슈 대응</li>
                    </ul>
                  </Copy>
                </div>
              </div>
            </div>

            <div className="about-history-reveal">
              <div className="about-history-row">
                <Copy animateOnScroll={true}>
                  <span className="about-history-index">02</span>
                </Copy>
                <Copy animateOnScroll={true}>
                  <span className="about-history-period">2024.04 — 2026.05</span>
                </Copy>
                <div className="about-history-content">
                  <Copy animateOnScroll={true}>
                    <h2>파인애플피티엘</h2>
                    <h3>웹 에이전시 | 개발팀 주임 · 파트장</h3>
                    <ul>
                    <li>병원 및 의료기관 중심의 웹사이트 구축, GNUboard5 기반 맞춤형 예약·상담·콘텐츠 관리 기능 설계 및 개발</li>
                    <li>PC·Tablet·Mobile 환경을 고려한 반응형 웹 구현 및 프로젝트별 UI 구조 설계</li>
                    <li>GSAP, ScrollTrigger, Swiper.js 등을 활용한 인터랙티브 UI 및 고도화된 모션 인터랙션 구현</li>
                    <li>디자인 시안의 정밀한 구현과 브랜드별 사용자 경험 개선에 기여, 참여 프로젝트 GDWEB DESIGN AWARDS 수상</li>
                    <li>Open Graph, 시맨틱 마크업, 웹 표준 및 SEO 기술 요소 개선을 통한 검색 친화적 웹사이트 구축</li>
                    <li>PHP·MySQL 기반 레거시 시스템의 기능 개선, 코드 리팩토링 및 서버 환경 변경에 따른 호환성 이슈 대응</li>
                    <li>개발 파트 업무 조율, 프로젝트 일정 관리 및 클라이언트 요구사항에 따른 기술적 해결 방안 제시</li>
                    </ul>
                  </Copy>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamCards showCards={false} />

   

      <Spotlight />

      <CTACard />

      <Footer />
    </div>
  );
};

export default Page;
