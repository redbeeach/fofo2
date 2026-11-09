"use client";

import { useEffect, useRef } from "react";
import Footer from "@/components/Footer/Footer";
import Copy from "@/components/Copy/Copy";


const metaItems = [
  { label: "Year / Timeline", value: "2025 - 2026" },
  { label: "Role & Scope", value: "Development · Publishing (100%)" },
  { label: "Target CMS", value: "Gnuboard 5 (PHP)" },
  { label: "Used Tools", tools: true },
];

const briefs = [
  {
    title: "Overview",
    subtitle: "의료 콘텐츠의 접근성과 운영 효율성을 함께 설계합니다.",
    paragraphs: [
      "힐링백반증은 백반증에 대한 전문적인 의학 정보를 제공하고, 환자들이 정보를 공유하며 소통할 수 있도록 구축한 의료 전문 커뮤니티입니다.",
      "일반적인 게시판 형태에서 벗어나 의료 콘텐츠의 전문성과 가독성을 강조하면서도, 내부 운영자가 지속적으로 콘텐츠를 관리할 수 있는 환경을 목표로 했습니다.",
      "그누보드5를 기반으로 PHP·MySQL을 활용한 맞춤형 기능을 개발하고, 콘텐츠 검색부터 의료진 프로필 연동, 치료병원 찾기까지 사용자 중심의 플랫폼으로 확장했습니다.",
    ],
  },
  {
    title: "Challenge",
    subtitle: "CMS의 관리 편의성과 전문 콘텐츠 구조를 동시에 유지해야 했습니다.",
    paragraphs: [
      "일반적인 게시판의 구조를 벗어나면서도 CMS의 관리 편의성을 유지하는 것이 가장 큰 과제였습니다.",
      "클라이언트는 전문 매거진처럼 구성된 콘텐츠 페이지를 원했지만, 동시에 내부 마케팅팀이 게시글과 의료진 정보를 직접 등록하고 수정할 수 있어야 했습니다.",
      "하나의 게시글에 여러 의료진이 참여하는 공동 작성 구조와 본문 색인, 관련 콘텐츠 연결, SEO 최적화 등 기존 게시판에서 제공하지 않는 기능도 필요했습니다.",
      "프로젝트 진행 중에는 약 700개 병원 데이터를 활용한 치료병원 찾기 기능이 추가되면서, 사용자 위치와 치료 장비 보유 여부에 따라 검색 결과를 제공하고 복잡한 필터 및 정렬 조건을 처리해야 하는 개발 과제가 발생했습니다.",
    ],
  },
  {
    title: "Our Approach",
    subtitle: "요구사항을 구조로 바꾸고, 기능을 실제 운영 환경에 맞게 구현했습니다.",
    paragraphs: [
      "그누보드5의 기존 구조를 확장하고, PHP·MySQL과 JavaScript를 활용해 콘텐츠 관리 및 검색 기능을 맞춤형으로 개발했습니다.",
      "게시글과 의료진 정보를 연결하는 데이터 처리 로직을 구현해 여러 의료진의 프로필이 하나의 콘텐츠에 표시되도록 구성했습니다. 또한 에디터에 제목 태그 설정과 글자 수 확인 기능을 추가하고, 본문 제목을 기반으로 자동 생성되는 색인(TOC), 태그 및 검색 기능을 개발해 콘텐츠 탐색 경험을 개선했습니다.",
      "SEO를 고려해 게시글별 메타데이터와 오픈그래프 이미지를 동적으로 처리하고, 운영자가 별도의 코드 수정 없이 콘텐츠를 관리할 수 있도록 관리자 기능을 확장했습니다.",
      "추가 요구사항이었던 치료병원 찾기는 카카오맵 API와 병원 DB를 연동해 구현했습니다. 현재 위치를 기준으로 병원을 탐색하고, 치료 장비별 필터와 검색 조건에 따른 정렬 로직을 적용했습니다. 지도 마커와 병원 리스트를 양방향으로 연결하고, 관리자 페이지에서도 병원 데이터를 직접 수정할 수 있도록 개선했습니다.",
    ],
  },
];

const workflow = [
  {
    eyebrow: "01 / Interpretation",
    title: "Requirement Analysis",
    description:
      "클라이언트의 요구를 단순한 게시판 운영이 아니라, 의료 전문 콘텐츠와 커뮤니티 참여를 함께 지원하는 구조로 해석했습니다.",
    note: "REQUIREMENT: Content + trust + operations",
  },
  {
    eyebrow: "02 / CMS Structure",
    title: "Content & Profile Integration",
    description:
      "게시글, 의료진, 관련 콘텐츠를 연결하는 데이터 구조를 설계해 전문 매거진형 콘텐츠와 운영 편의성을 동시에 확보했습니다.",
    note: "CMS: Readability + admin usability",
  },
  {
    eyebrow: "03 / Search & Discovery",
    title: "Search, Indexing & SEO",
    description:
      "본문 색인, 태그, 제목 태그, 메타데이터 자동화 및 검색 로직을 구현해 사용자 탐색성과 콘텐츠 관리 효율성을 개선했습니다.",
    note: "SYSTEM: TOC / tags / metadata / search",
  },
  {
    eyebrow: "04 / Map Integration",
    title: "Location-Based Hospital Discovery",
    description:
      "카카오맵 API와 병원 DB를 연동해 위치 기반 검색, 필터, 정렬, 마커 연결까지 구현해 실사용성 높은 의료 정보 탐색을 제공했습니다.",
    note: "TECH: Kakao Maps API + PHP + MySQL",
  },
];

const metrics = [
  {
    title: "01. Requirement interpretation",
    note: "Problem understanding",
    tone: "neutral",
    points: [
      "전문 의료 콘텐츠와 운영 편의성의 균형 설계",
      "기존 게시판 구조의 한계를 해결하는 문제 정의",
      "사용자 경험과 관리자 운영 흐름을 함께 고려",
    ],
  },
  {
    title: "02. CMS architecture",
    note: "Content system design",
    tone: "sky",
    points: [
      "게시글 · 의료진 · 관련 콘텐츠 연결 구조",
      "운영자가 직접 관리 가능한 콘텐츠 모델 설계",
      "전문 매거진형 UI와 CMS 운영 편의성 조화",
    ],
  },
  {
    title: "03. Search and discoverability",
    note: "Technology implementation",
    tone: "emerald",
    points: [
      "TOC, 태그, 검색, 메타데이터 자동화 구현",
      "SEO 및 콘텐츠 탐색 경험 개선",
      "검색 조건에 따른 정보 접근성 향상",
    ],
  },
  {
    title: "04. Service expansion",
    note: "Map-based utility",
    tone: "indigo",
    points: [
      "위치 기반 병원 검색 기능 설계",
      "카카오맵 API 연동과 필터 정렬 로직 구현",
      "관리자 페이지에서 데이터 수정 및 운영 대응 강화",
    ],
  },
];

const capabilities = [
  {
    eyebrow: "Requirement mapping",
    tone: "indigo",
    title: "문제 해석과 구조 설계",
    description:
      "단순한 게시판 기능이 아니라, 전문 의료 콘텐츠와 운영 효율성을 동시에 만족해야 하는 문제를 정의하고 구조적으로 재설계했습니다.",
    code: "Requirement → CMS → UX",
  },
  {
    eyebrow: "Technical execution",
    tone: "sky",
    title: "실제 기능 구현",
    description:
      "게시글, 의료진, 검색, 메타데이터, 지도 연동까지 PHP·MySQL·JavaScript 기반으로 직접 구현하며 운영 가능한 기능으로 연결했습니다.",
    code: "PHP / MySQL / Kakao Maps API",
  },
  {
    eyebrow: "Service value",
    tone: "emerald",
    title: "사용자와 운영자의 가치 동시에 확보",
    description:
      "콘텐츠 탐색의 편의성과 관리자 운영 편의성을 함께 개선해 의료 커뮤니티가 실제로 기능하도록 만드는 데 초점을 맞췄습니다.",
    code: "User value / admin efficiency",
  },
];

const highlights = [
  {
    title: "Requirement-Driven CMS Customization",
    description:
      "전문 의료 콘텐츠를 게시판형 구조로 무리 없이 재구성하면서, 운영자가 직접 관리할 수 있는 CMS 환경을 유지하도록 설계했습니다.",
  },
  {
    title: "Content Discovery and SEO Structure",
    description:
      "게시글 구조, 태그, 검색, 메타데이터를 연결해 의료 정보를 더 빠르게 찾고 가독성 있게 전달할 수 있는 구조로 개선했습니다.",
  },
  {
    title: "Location-Based Medical Utility",
    description:
      "병원 정보를 지도와 검색 결과를 연결하는 사용자 흐름을 구축해, 단순한 정보 제공을 넘어 실제 의사결정을 돕는 기능으로 확장했습니다.",
  },
  {
    title: "Operational Readiness",
    description:
      "관리자 페이지에서 병원 데이터와 콘텐츠를 직접 수정할 수 있도록 구성해 실서비스 운영에 필요한 유지보수성을 확보했습니다.",
  },
];

function VscodeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M17.2 3.2 8.4 11l-4-3.1-1.6.8v6.6l1.6.8 4-3.1 8.8 7.8 4-1.6V4.8l-4-1.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M17.2 8.1v7.8L11.3 12l5.9-3.9Z" fill="currentColor" opacity="0.22" />
    </svg>
  );
}

function FigmaIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M7.8 3.5h4.1a3 3 0 0 1 3 3v1.2a3 3 0 0 1-3 3H7.8a3 3 0 0 1-3-3V6.5a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.8 10.7h4.1a3 3 0 0 1 3 3v1.2a3 3 0 0 1-3 3H7.8a3 3 0 0 1-3-3v-1.2a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.8 17.9h4.1a3 3 0 0 1 3 3v.2a3 3 0 0 1-3 3H7.8a3 3 0 0 1-3-3v-.2a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14.7 6.5h2.2a2.6 2.6 0 1 1 0 5.2h-2.2V6.5Zm0 7.3h2.5a2.6 2.6 0 1 1 0 5.2h-2.5v-5.2Z" fill="currentColor" opacity="0.25" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 21s6.5-5.9 6.5-11.2A6.5 6.5 0 0 0 5.5 9.8C5.5 15.1 12 21 12 21Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="9.8" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function SystemIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="5" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 9.5h7M8.5 12h7M8.5 14.5h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SectionHeading({ index, label, title, description }) {
  return (
    <div className="ax-case-sticky-col">
      <div className="ax-case-sticky">
        <Copy animateOnScroll={true}>
          <span>
            ({index}) {label}
          </span>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </Copy>
      </div>
    </div>
  );
}


export default function BrandCommunityProject({ project, nextProject, totalProjects }) {
  return (
    <div className="project-page ax-case-page brand-community-page">
      <main>
        <section className="ax-case-hero ax-case-container">
          <div className="ax-case-title-block">
            <Copy animateOnScroll={false} delay={0.4}>
              <p>
                <span></span>
                GB5 & Community Experience
              </p>
              <h1>
                Healing
                <br />
                <span>Community</span>
              </h1>
            </Copy>
            <div className="ax-case-hero-actions">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live Service ↗
              </a>
              <a href={project.adminUrl} target="_blank" rel="noreferrer">
                Community Overview ↗
              </a>
            </div>
          </div>

          <div className="ax-case-meta-grid br-grid">
            {metaItems.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                {item.tools ? (
                  <div className="ax-case-tool-list">
                    <div className="ax-case-tool">
                      <VscodeIcon aria-hidden="true" />
                      <Copy animateOnScroll={true}>
                        <p>Visual Studio</p>
                      </Copy>
                    </div>
                    <div className="ax-case-tool">
                      <FigmaIcon aria-hidden="true" />
                      <Copy animateOnScroll={true}>
                        <p>Figma</p>
                      </Copy>
                    </div>
                    <div className="ax-case-tool">
                      <MapPinIcon aria-hidden="true" />
                      <Copy animateOnScroll={true}>
                        <p>KakaoMap API</p>
                      </Copy>
                    </div>
                  </div>
                ) : (
                  <Copy animateOnScroll={true}>
                    <p>{item.value}</p>
                  </Copy>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="ax-case-statement ax-case-container">
          <div className="ax-case-statement-title">
            <i></i>
            <Copy animateOnScroll={true}>
              <h2>
                전문 의료 콘텐츠의 접근성과 운영 효율성을 함께 고려하여, 
                <br />
                콘텐츠 관리부터 위치 기반 치료병원 검색까지 구현한 의료 전문 커뮤니티 프로젝트입니다.
              </h2>
            </Copy>
          </div>

          <div className="ax-case-brief-grid">
            {briefs.map((brief) => (
              <article key={brief.title}>
                <Copy animateOnScroll={true}>
                  <h3>{brief.title}</h3>
                  <h4>{brief.subtitle}</h4>
                  {brief.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </Copy>
              </article>
            ))}
          </div>
        </section>

        <section className="ax-case-showcase ax-case-container">
          <div className="ax-case-browser">
            <div className="ax-case-browser-top">
              <div className="ax-case-traffic" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="ax-case-url">
                <span>https://brand-community.example</span>
                <strong>Brand Experience</strong>
              </div>
              <div className="ax-case-sync">
                <span></span>
                Community Ready
              </div>
            </div>

            <div className="ax-case-screen">
              <img
                src={project.galleryImages?.[0] || project.bannerImage}
                alt="Brand Community preview"
                loading="eager"
              />
            </div>

            <div className="ax-case-browser-foot">
              <p>Target: Brand community and member engagement</p>
              <p>Resolution: 1920 x 1080 (Responsive Layout)</p>
            </div>
          </div>

        </section>

        <section className="ax-case-section ax-case-container">
          <SectionHeading index="01" label="Overview & Challenge" title="The Brand Community Shift" />
          <div className="ax-case-content">
            <Copy animateOnScroll={true}>
              <p className="ax-case-lead">
                의료 정보는 단순히 많이 보여주는 것보다, <strong>어떤 정보를 누구에게 어떻게 전달할 것인지</strong>가 중요합니다.
                커뮤니티 플랫폼은 전문성, 신뢰, 운영 편의성을 함께 담아야 하며, 이 문제를 구조적으로 풀어내는 것이 핵심이었습니다.
              </p>
            </Copy>

            <div className="ax-case-problem-grid">
              <article>
                <Copy animateOnScroll={true}>
                  <span className="is-rose">The Problem</span>
                  <h3>CMS 구조와 콘텐츠 전문성이 충돌함</h3>
                  <p>
                    일반적인 게시판은 관리 편의성은 좋지만 전문 의료 콘텐츠를 효과적으로 전달하기에는 구조적으로 부족했습니다.
                    동시에 브랜드와 운영팀은 콘텐츠를 직접 관리해야 했기 때문에, 단순한 템플릿 중심의 구현으로는 한계가 있었습니다.
                  </p>
                </Copy>
              </article>
              <article>
                <Copy animateOnScroll={true}>
                  <span className="is-emerald">The Objective</span>
                  <h3>정보 전달과 운영성을 동시에 개선</h3>
                  <p>
                    의료 콘텐츠를 매거진처럼 읽기 쉽게 구성하면서도, 운영자가 게시글과 의료진 정보를 자유롭게 관리할 수 있는 구조를 설계했습니다.
                    사용자와 관리자 모두에게 실용적인 가치를 제공하는 것이 목표였습니다.
                  </p>
                </Copy>
              </article>
            </div>
          </div>
        </section>

        <section className="ax-case-section ax-case-container">
          <SectionHeading index="02" label="Process Architecture" title="Technical Problem Solving" />
          <div className="ax-case-card-grid">
            {workflow.map((item) => (
              <article className="ax-case-card" key={item.eyebrow}>
                <Copy animateOnScroll={true}>
                  <span>{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <small>{item.note}</small>
                </Copy>
              </article>
            ))}
          </div>
        </section>

        <section className="ax-case-section ax-case-container">
          <SectionHeading
            index="03"
            label="Experience Diagnostics"
            title="The Community System"
            description="브랜드와 커뮤니티 경험을 함께 강화하기 위해, 참여 흐름과 정보 전달력을 기준으로 설계의 우선순위를 정리했습니다."
          />
          <div className="ax-case-metric-list">
            {metrics.map((metric) => (
              <article className="ax-case-metric" key={metric.title}>
                <div>
                  <Copy animateOnScroll={true}>
                    <h3>{metric.title}</h3>
                    <span className={`is-${metric.tone}`}>{metric.note}</span>
                  </Copy>
                </div>
                <ul>
                  {metric.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="ax-case-capabilities ax-case-container">
          <div className="ax-case-capabilities-head">
            <SectionHeading index="04" label="Advanced Capabilities" title="Technical Value Creation" />
            <Copy animateOnScroll={true}>
              <p>
                전문 의료 서비스의 성격상 단순한 시각적 구현이 아니라, 실제 운영을 지원하는 기술적 구조가 중요했습니다.
              </p>
            </Copy>
          </div>
          <div className="ax-case-capability-grid">
            {capabilities.map((capability) => (
              <article className="ax-case-card ax-case-capability" key={capability.title}>
                <Copy animateOnScroll={true}>
                  <span className={`is-${capability.tone}`}>{capability.eyebrow}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <code>{capability.code}</code>
                </Copy>
              </article>
            ))}
          </div>
        </section>

        <section className="ax-case-section ax-case-container">
          <SectionHeading index="05" label="Design Highlights" title="Operational and Service Impact" />
          <div className="ax-case-highlight-grid">
            {highlights.map((highlight) => (
              <article key={highlight.title}>
                <Copy animateOnScroll={true}>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </Copy>
              </article>
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
      </main>

      <Footer />
    </div>
  );
}
