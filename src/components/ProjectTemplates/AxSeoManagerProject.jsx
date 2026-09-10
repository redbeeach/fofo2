"use client";

import Footer from "@/components/Footer/Footer";
import Copy from "@/components/Copy/Copy";

const metaItems = [
  { label: "Year / Timeline", value: "2026 · V1.0 Released" },
  { label: "Role & Scope", value: "Web Publishing & System Design (100%)" },
  { label: "Target CMS", value: "Gnuboard 5 (PHP) + Next.js / Neon" },
  { label: "Core Tech", value: "DOM Crawling · AEO · Schema JSON-LD" },
  { label: "Used Tools", tools: true },
];

const briefs = [
  {
    title: "Overview",
    subtitle: "검색의 방식이 달라지고 있습니다.",
    paragraphs: [
      "검색 결과의 링크를 하나씩 확인하던 방식에서 이제는 ChatGPT와 Perplexity 같은 AI에게 질문하고 정리된 답변을 바로 얻는 방식으로 검색 경험이 바뀌고 있습니다.",
      "그렇다면 웹사이트도 '검색 결과에 잘 노출되는 것'만으로 충분할까?",
      "이 질문에서 AX SEO Manager를 시작했습니다.",
      "기존 CMS에 쌓여 있는 콘텐츠를 버리는 대신, AI가 이해하고 답변에 활용하기 좋은 콘텐츠로 개선할 수 있는 방법을 고민했습니다.",
    ],
  },
  {
    title: "Challenge",
    subtitle: "좋은 글인데, 왜 AI는 읽지 못할까?",
    paragraphs: [
      "콘텐츠의 내용이 좋아도 AI가 그 정보를 제대로 이해하고 활용하기 어려운 경우가 있습니다.",
      "불명확한 제목 구조, 이미지 ALT 누락, 핵심 답변과 FAQ의 부재, 구조화 데이터 부족처럼 사람에게는 보이지 않는 웹의 구조가 원인이 될 수 있습니다.",
      "문제는 이 모든 기준을 게시글마다 사람이 직접 확인하고 수정하기 어렵다는 것이었습니다.",
      "그래서 단순히 문제를 알려주는 SEO 검사기가 아니라, “진단한 문제를 실제 콘텐츠 개선까지 연결할 수 없을까?”라고 생각했습니다.",
    ],
  },
  {
    title: "Our Approach",
    subtitle: "진단에서 끝내지 않고, 개선까지 한 번에.",
    paragraphs: [
      "AX SEO Manager는 게시글과 실제 배포 페이지를 분석해 SEO · GEO 핵심 지표를 자동으로 진단합니다.",
      "그리고 GPT를 활용해 핵심 답변, FAQ, Schema.org 구조화 데이터를 생성하여 콘텐츠 개선 과정까지 연결했습니다.",
      "DB에 저장된 데이터만 검사하는 것이 아니라 실제 사용자가 보는 Live Page를 다시 크롤링해 결과를 검증합니다.",
      "Analyze → Generate → Optimize → Verify",
      "콘텐츠 작성자가 SEO나 GEO의 복잡한 규칙을 몰라도 한 번의 분석으로 문제를 발견하고, 개선하고, 다시 검증할 수 있도록.",
      "그것이 AX SEO Manager의 목표입니다.",
    ],
  },
];

const workflow = [
  {
    eyebrow: "01 / Integration",
    title: "GB5 Hook Data Sync",
    description:
      "그누보드5의 write_update.php 훅을 통해 게시판 글이 작성 또는 수정될 때 AX SEO Manager 데이터베이스로 자동 전송 및 등록됩니다.",
    note: "HOOK: g5_write_update -> Supabase REST",
  },
  {
    eyebrow: "02 / Generation",
    title: "AI Optimization Draft",
    description:
      "LLM 엔진이 본문 맥락을 분석하여 검색 클릭률을 높이는 메타 문구, ChatGPT 인용용 FAQ 3종, 전문 맥락 요약문, Schema.org JSON-LD를 자동 완성합니다.",
    note: "ENGINE: GPT Structured Outputs API",
  },
  {
    eyebrow: "03 / Verification",
    title: "Live DOM Crawling",
    description:
      "단순 텍스트 검사를 넘어 실제 서비스 중인 배포 URL의 HTML을 직접 패치합니다. H1~H3 위계, 이미지 ALT 태그 누락 여부, 내부링크 구조를 실시간 검사합니다.",
    note: "FETCHER: Serverless HTML Parser",
  },
  {
    eyebrow: "04 / Application",
    title: "Impact Priority Guide",
    description:
      "진단 결과를 바탕으로 예상 점수 상승폭(+N pt)이 높은 개선 추천 항목을 영향도 순으로 정렬하여 관리자에게 직관적인 수정 가이드를 제공합니다.",
    note: "OUTPUT: Actionable Task Priority",
  },
];

const metrics = [
  {
    title: "01. Classic SEO (100pt)",
    note: "Google / Naver Portal Indexing",
    tone: "neutral",
    points: [
      "SEO Title 60자 이하 (30pt)",
      "Meta Description 155자 이하 (30pt)",
      "OpenGraph 태그 2종 (15pt)",
      "Canonical & Robots 허용 (25pt)",
    ],
  },
  {
    title: "02. AEO - Answer Engine Optimization (100pt)",
    note: "Direct Answer Citing",
    tone: "sky",
    points: ["FAQ 3개 이상 생성 (40pt)", "핵심 한 줄 답변 ae_answer (30pt)", "질문-답변(Q&A) 구조화 (30pt)"],
  },
  {
    title: "03. GEO - Generative Engine Optimization (100pt)",
    note: "LLM Synthesis Ready",
    tone: "emerald",
    points: ["JSON-LD 구조화 데이터 탑재 (40pt)", "전문 맥락 요약문 50자 이상 (30pt)", "GEO 키워드 엔티티 배치 (30pt)"],
  },
  {
    title: "04. Content Live DOM (100pt)",
    note: "Deployed HTML Quality",
    tone: "indigo",
    points: [
      "단일 H1 태그 마크업 (25pt)",
      "본문 H2 섹션 2개 이상 (15pt)",
      "이미지 ALT 누락 0건 (20pt)",
      "내부링크 3개 & 1,000자 이상 (40pt)",
    ],
  },
  {
    title: "05. AI Citation & EEAT (100pt)",
    note: "Trust & Authority Proof",
    tone: "amber",
    points: ["도입부 400자 내 개념 정의문 (10pt)", "표(<table>) / 리스트 마크업 (20pt)", "Author / Publisher / Date (40pt)"],
  },
];

const capabilities = [
  {
    eyebrow: "Semantic Graph",
    tone: "indigo",
    title: "Entity & Coverage 분석",
    description:
      "인물, 조직, 장소, 기술, 제품, 이벤트 6대 개체를 추출하고, 해당 토픽에서 필수적으로 다뤄져야 할 시맨틱 키워드의 본문 포함률을 산출합니다.",
    code: "coverage: 88% / missing: [schema, canonical]",
  },
  {
    eyebrow: "Comparative DOM",
    tone: "sky",
    title: "경쟁사 실시간 Gap 비교",
    description:
      "경쟁사 URL을 입력하면 실시간으로 해당 페이지의 DOM을 크롤링하여 본문 분량, 표/리스트 사용 여부, 인용 가능성 요소를 내 글과 1:1 비교합니다.",
    code: "Content Gap: +13pt / Citation Gap: +25pt (Lead)",
  },
  {
    eyebrow: "Client-side Tool",
    tone: "emerald",
    title: "WebP 일괄 변환 & 압축기",
    description:
      "서버 부하 없이 브라우저 단에서 Canvas API를 활용해 고화질 이미지를 Drag & Drop으로 WebP 포맷 변환 및 압축하여 일괄 다운로드합니다.",
    code: "Client-side Canvas WebP Encoding (Zero Server Load)",
  },
];

const highlights = [
  {
    title: "Semantic Architecture",
    description:
      "제목 체계(H1~H6)의 단일성 보장 및 의미론적 태그(article, section, cite)를 엄격히 구조화하여 스크린 리더와 검색 봇 모두에게 최적의 파싱 경험을 제공합니다.",
  },
  {
    title: "CMS Hook Integration",
    description:
      "그누보드5의 PHP 기반 게시글 저장 트랜잭션 흐름을 침해하지 않으면서, write_update.php 시점에 비동기로 진단 서버와 동기화되도록 연동 설계를 완료했습니다.",
  },
  {
    title: "Responsive & Wide Layout",
    description:
      "1920px 이상의 울트라와이드 모니터부터 모바일 디바이스까지 유려하게 반응하는 유동형 그리드 시스템을 구축하여 어떤 해상도에서도 왜곡 없는 정보 전달력을 유지합니다.",
  },
  {
    title: "Performance & Accessibility",
    description:
      "외부 의존성을 최소화하고 순수 CSS 유틸리티와 모던 브라우저 API를 활용하여 초기 로딩 속도를 극대화하고 Lighthouse 95점 이상의 접근성을 달성했습니다.",
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

function CodexIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="7" width="16" height="12" rx="4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 11.5h.01M15 11.5h.01M10 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 7V4M9.5 4h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function GptIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 3.4a4.1 4.1 0 0 1 3.9 2.8 4.1 4.1 0 0 1 4.1 4.1 4.1 4.1 0 0 1-1.8 3.4 4.1 4.1 0 0 1-5.8 5.1 4.1 4.1 0 0 1-6.3-3.1A4.1 4.1 0 0 1 6 8.6a4.1 4.1 0 0 1 6-5.2Z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" />
      <path d="M8.6 8.5 12 6.5l3.4 2v4L12 14.5l-3.4-2v-4ZM12 14.5v3.2M15.4 8.5l2.7-1.5M8.6 12.5l-2.7 1.6" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
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

export default function AxSeoManagerProject({ project, nextProject, totalProjects }) {
  return (
    <div className="project-page ax-case-page">
      <main>
        <section className="ax-case-hero ax-case-container">
          <div className="ax-case-title-block">
            <Copy animateOnScroll={false} delay={0.4}>
              <p>
                <span></span>
                SEO / AEO / GEO Diagnostic Platform
              </p>
              <h1>
                AX SEO
                <br />
                <span>Manager</span>
              </h1>
            </Copy>
            <div className="ax-case-hero-actions">
              <a href={project.adminUrl} target="_blank" rel="noreferrer">
                Live Service ↗
              </a>
              <a href={project.manualUrl} target="_blank" rel="noreferrer">
                Manual Docs ↗
              </a>
            </div>
          </div>

          <div className="ax-case-meta-grid">
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
                      <CodexIcon aria-hidden="true" />
                      <Copy animateOnScroll={true}>
                        <p>Codex</p>
                      </Copy>
                    </div>
                    <div className="ax-case-tool">
                      <GptIcon aria-hidden="true" />
                      <Copy animateOnScroll={true}>
                        <p>GPT</p>
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
                검색되는 콘텐츠에서,
                AI가 인용하는 콘텐츠로. <br />
                AX SEO Manager는 기존 CMS 콘텐츠를 분석하고
                검색엔진과 <br />AI가 더 쉽게 이해하고 활용할 수 있는 구조로 개선하는
                SEO · GEO 콘텐츠 최적화 시스템입니다.
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
                <span>https://ax-seo-manager.vercel.app/contents/detail?id=18</span>
                <strong>SSL Secured</strong>
              </div>
              <div className="ax-case-sync">
                <span></span>
                GB5 Live Synced
              </div>
            </div>

            <div className="ax-case-screen">
              <img src="/work_01.webp" alt="AX SEO Manager 대시보드 상세 진단 화면" loading="eager" />
            </div>

            <div className="ax-case-browser-foot">
              <p>Target: 그누보드5 (bo_table=myproject, wr_id=18)</p>
              <p>Resolution: 1920 x 1080 (Responsive Layout)</p>
            </div>
          </div>
        </section>

        <section className="ax-case-section ax-case-container">
          <SectionHeading index="01" label="Overview & Challenge" title="Shift in Search Paradigm" />
          <div className="ax-case-content">
            <Copy animateOnScroll={true}>
              <p className="ax-case-lead">
                전통적인 검색 엔진 최적화(SEO)가 키워드 노출 빈도와 메타 태그 글자 수에 매몰되어 있었다면,
                이제는 <strong>답변 엔진(ChatGPT, Perplexity)</strong>이 웹 문서를 읽고 답변의 출처로
                채택하게 만드는 <strong>AEO와 GEO</strong>가 필수적인 시대입니다.
              </p>
            </Copy>

            <div className="ax-case-problem-grid">
              <article>
                <Copy animateOnScroll={true}>
                  <span className="is-rose">The Problem</span>
                  <h3>구형 진단과 분리된 실무 운영</h3>
                  <p>
                    기존 도구들은 복잡한 점수만 나열할 뿐 실제 게시글 작성자가 무엇을 어떻게 고쳐야 할지 실행
                    가능한 가이드를 주지 못했습니다. 또한 국내 CMS 생태계의 중심인 그누보드5와의 자동 연동
                    부재로 콘텐츠 갱신 시마다 수작업 진단을 거쳐야 했습니다.
                  </p>
                </Copy>
              </article>
              <article>
                <Copy animateOnScroll={true}>
                  <span className="is-emerald">The Objective</span>
                  <h3>실제 동작하는 자동 최적화 파이프라인</h3>
                  <p>
                    그누보드5에서 글이 등록/수정되는 즉시 백그라운드 동기화를 거쳐 AI가 최적화 초안(Title,
                    Meta, FAQ, JSON-LD)을 자동 생성하고, 실제 배포된 웹페이지의 DOM을 직접 크롤링하여 정밀
                    분석하는 올인원 워크플로우를 구축했습니다.
                  </p>
                </Copy>
              </article>
            </div>
          </div>
        </section>

        <section className="ax-case-section ax-case-container">
          <SectionHeading index="02" label="Process Architecture" title="4-Stage Automation" />
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
            label="Diagnostic Standards"
            title="The 7-Metric System"
            description="매뉴얼에 규정된 7개 영역별 정량 지표와 배점 기준을 시스템화하여 각 영역별 100점 만점으로 독립 평가합니다."
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
            <SectionHeading index="04" label="Advanced Capabilities" title="Beyond Basic SEO" />
            <Copy animateOnScroll={true}>
              <p>
                실제 엔터프라이즈 환경 및 전문 웹사이트 운영에 필요한 심화 도구를 프론트엔드 레벨에서 통합
                구현했습니다.
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
          <SectionHeading index="05" label="Publisher's Engineering" title="Technical Highlights" />
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
