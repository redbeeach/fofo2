"use client";

import { useEffect, useRef } from "react";
import Footer from "@/components/Footer/Footer";
import Copy from "@/components/Copy/Copy";

const KAKAO_MAP_APP_KEY = "YOUR_KAKAO_APP_KEY";

const metaItems = [
  { label: "Year / Timeline", value: "2025" },
  { label: "Role & Scope", value: "Development · Publishing (100%)" },
  { label: "Target CMS", value: "Gnuboard 5 (PHP)" },
  { label: "Used Tools", tools: true },
];

const briefs = [
  {
    title: "Overview",
    subtitle: "브랜드와 커뮤니티를 하나의 경험으로 연결합니다.",
    paragraphs: [
      "브랜드 커뮤니티는 단순한 게시판이 아니라, 팬과 멤버가 함께 이야기를 만들고 참여하며 브랜드에 대한 신뢰를 쌓는 장으로 설계되었습니다.",
      "회원 스토리, 업데이트, 이벤트, 참여 유도 흐름이 각각 분리되지 않고 하나의 브랜드 이야기 안에서 자연스럽게 연결되도록 구성했습니다.",
      "모든 인터랙션은 브랜드의 톤을 유지하면서도, 사용자가 다음 행동으로 이어지기 쉬운 구조로 설계했습니다.",
    ],
  },
  {
    title: "Challenge",
    subtitle: "정보는 많지만, 참여로 이어지지는 않았습니다.",
    paragraphs: [
      "브랜드의 메시지는 담겨 있지만, 멤버가 어떤 콘텐츠를 보고 어떤 행동을 취해야 하는지 흐름이 분명하지 않은 경우가 많았습니다.",
      "특히 커뮤니티는 이야기의 가치를 높이는 것도 중요하지만, 방문자가 실제로 참여하고 다시 돌아오도록 만드는 구조가 필요했습니다.",
      "그래서 단순한 정보 전달을 넘어, 사용자 경험의 흐름과 브랜드 감정을 함께 설계하는 것이 핵심이었습니다.",
    ],
  },
  {
    title: "Our Approach",
    subtitle: "브랜드 감정과 행동 유도를 함께 설계합니다.",
    paragraphs: [
      "커뮤니티 페이지는 스토리 중심의 콘텐츠 구조와 명확한 행동 유도 경로를 결합해 구성했습니다.",
      "회원 후기, 최신 소식, 이벤트, 참여 안내를 각각 독립된 정보가 아니라 하나의 연속된 브랜드 경험으로 연결했습니다.",
      "디자인은 우아하지만 유도적인 흐름을 유지하면서, 사용자가 빠르게 탐색하고 자연스럽게 참여에 이르도록 가이드했습니다.",
      "일부 오프라인 체험 요소에는 카카오맵 API를 연동해 브랜드 라운지, 이벤트 장소, 커뮤니티 공간 위치를 직관적으로 확인할 수 있도록 구성했습니다.",
    ],
  },
];

const workflow = [
  {
    eyebrow: "01 / Story",
    title: "Brand Narrative Structure",
    description:
      "브랜드의 핵심 메시지와 커뮤니티 콘텐츠를 연결해, 사용자에게 한 흐름의 스토리를 전달하도록 구성했습니다.",
    note: "NARRATIVE: Community-first brand story",
  },
  {
    eyebrow: "02 / Content",
    title: "Member Story & Updates",
    description:
      "실제 멤버 경험, 브랜드 업데이트, 이벤트 정보를 자연스럽게 섞어 방문자가 브랜드의 현재를 체감할 수 있게 구성했습니다.",
    note: "CONTENT: Story / Update / Participation",
  },
  {
    eyebrow: "03 / Journey",
    title: "Conversion Path Design",
    description:
      "단순히 보고 끝나는 구조가 아니라, 페이지 안에서 참여, 가입, 문의, 체험 전환으로 연결되는 경로를 설계했습니다.",
    note: "FLOW: Discover → Engage → Convert",
  },
  {
    eyebrow: "04 / Experience",
    title: "Tone-Driven Interface",
    description:
      "브랜드의 이미지와 커뮤니티의 친근함을 동시에 살리기 위해 여백, 타이포, 영상, 모션의 톤을 정교하게 맞췄습니다.",
    note: "UX: Premium but approachable",
  },
];

const metrics = [
  {
    title: "01. Brand Presence",
    note: "Distinctive identity",
    tone: "neutral",
    points: [
      "브랜드 핵심 가치의 시각적 전달",
      "멤버에게 신뢰감 있는 첫인상 구성",
      "목적에 맞는 정보 우선순위 배치",
    ],
  },
  {
    title: "02. Community Flow",
    note: "User journey design",
    tone: "sky",
    points: [
      "스토리 → 업데이트 → 참여 유도 구조",
      "이야기 중심 탐색 경험",
      "다음 행동을 자연스럽게 연결",
    ],
  },
  {
    title: "03. Engagement Design",
    note: "Repeat interaction",
    tone: "emerald",
    points: [
      "콘텐츠별 참여 유도 문구 구성",
      "리뷰, 이벤트, 소식의 유기적 연결",
      "재방문을 유도하는 감성적 포인트",
    ],
  },
  {
    title: "04. Conversion Intent",
    note: "Action-ready layout",
    tone: "indigo",
    points: [
      "문의/신청 CTA 명확화",
      "브랜드 메시지와 행동 경로 일치",
      "정보 탐색과 전환 간 간극 최소화",
    ],
  },
];

const capabilities = [
  {
    eyebrow: "Story-first",
    tone: "indigo",
    title: "브랜드 메시지의 연속성",
    description:
      "각 섹션이 단절되지 않고 하나의 브랜드 이야기로 연결되도록 구성하여 사용자가 페이지 전체를 통해 브랜드의 방향성을 이해할 수 있게 했습니다.",
    code: "Narrative continuity / brand clarity",
  },
  {
    eyebrow: "Community UX",
    tone: "sky",
    title: "시선 이동의 흐름 설계",
    description:
      "스크롤 흐름에 따라 정보의 중요도가 자연스럽게 전환되도록 배치해, 페이지를 읽는 동안 참여로 이어지기 쉬운 구조를 만들었습니다.",
    code: "Discover → Engage → Convert",
  },
  {
    eyebrow: "Interaction",
    tone: "emerald",
    title: "감각적인 브랜드 경험",
    description:
      "타이포, 간격, 포토그래피 흐름, CTA의 톤을 조율해 브랜드의 고급스러움과 친근함을 함께 살렸습니다.",
    code: "Premium tone / community warmth",
  },
];

const highlights = [
  {
    title: "Narrative Content Structure",
    description:
      "브랜드 메시지, 업데이트, 멤버 경험을 긴밀하게 연결해 단순한 정보 나열이 아니라 일관된 스토리형 경험을 구현했습니다.",
  },
  {
    title: "Participation-Oriented UX",
    description:
      "사용자가 정보를 소비하는 수준을 넘어 참여와 전환까지 자연스럽게 이어지는 경로를 설계했습니다.",
  },
  {
    title: "Premium Community Identity",
    description:
      "브랜드의 정체성과 커뮤니티의 접근성을 동시에 살려, 고급스럽지만 친근한 인터페이스를 완성했습니다.",
  },
  {
    title: "Responsive Editorial Layout",
    description:
      "대형 화면에서 브랜드 스토리를 압도적으로 보여주고, 모바일에서는 연속적인 콘텐츠 흐름을 유지하도록 유동적인 그리드를 구성했습니다.",
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
                멤버는 브랜드를 소비하는 것이 아니라,
                <br />
                브랜드 안에서 함께 참여하고 기억을 만드는 경험을 원합니다.
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
                오늘날 브랜드는 제품이나 서비스만 전달하는 것이 아니라, <strong>멤버가 스스로 참여하고 기억을 남기는 경험</strong>을 제공해야 합니다.
                커뮤니티 페이지는 정보 전달을 넘어 브랜드의 감정과 참여를 연결하는 가장 중요한 장치입니다.
              </p>
            </Copy>

            <div className="ax-case-problem-grid">
              <article>
                <Copy animateOnScroll={true}>
                  <span className="is-rose">The Problem</span>
                  <h3>정보는 많지만 참여로 이어지지 않음</h3>
                  <p>
                    많은 브랜드 커뮤니티는 게시글, 이벤트, 이야기들이 분산되어 있어 사용자가 어디서부터 봐야 할지
                    헷갈리기 쉽습니다. 결과적으로 브랜드 메시지는 전달되지만 참여는 약해집니다.
                  </p>
                </Copy>
              </article>
              <article>
                <Copy animateOnScroll={true}>
                  <span className="is-emerald">The Objective</span>
                  <h3>브랜드를 경험으로 만들기</h3>
                  <p>
                    스토리, 업데이트, 멤버 활동, 참여 유도를 하나의 연속된 흐름으로 설계해 사용자가 자연스럽게
                    브랜드에 몰입하고, 결국 브랜드의 가치와 행동을 연결하도록 구성했습니다.
                  </p>
                </Copy>
              </article>
            </div>
          </div>
        </section>

        <section className="ax-case-section ax-case-container">
          <SectionHeading index="02" label="Process Architecture" title="Community Experience Flow" />
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
            <SectionHeading index="04" label="Advanced Capabilities" title="Brand Experience Design" />
            <Copy animateOnScroll={true}>
              <p>
                브랜딩과 커뮤니티 UX를 결합해, 단순한 정보 페이지를 넘어 브랜드를 기억하게 만드는 경험을 설계했습니다.
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
          <SectionHeading index="05" label="Design Highlights" title="Community Brand Direction" />
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
