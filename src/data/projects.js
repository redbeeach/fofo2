export const projects = [
  {
    slug: "ax-seo-manager",
    index: "01",
    name: "AX-SEO-MANAGER",
    template: "axSeoManager",
    listImage: "/pr_img01.webp",
    previewImage: "/work_01.webp",
    route: "/work/ax-seo-manager",
    service: "Design & Development",
    year: "2026",
    workVariant: "variant-1",
    workImages: ["/work/work_1_1.jpg", "/work/work_1_2.jpg", "/work/work_1_3.jpg"],
    kicker: "Search Visibility System",
    title: "AX SEO Manager",
    concept:
      "그누보드5 게시판 글을 자동으로 가져와 SEO, AEO, GEO 최적화 초안을 만들고 점수로 진단하는 AI 검색 최적화 도구입니다.",
    form: "Web Platform",
    medium: "AI SEO, AEO, GEO and JSON-LD",
    studio: "FOFO",
    liveUrl: "https://ax-seo-manager.vercel.app/",
    manualUrl: "https://ax-seo-manager.vercel.app/manual.html",
    adminUrl: "https://ax-seo-manager.vercel.app/",
    axContent: {
      heroEyebrow: "그누보드5 전용 AI 검색 최적화 플랫폼",
      heroTitle: "게시글을 AI가 읽고, 검색에 잘 보이는 문구로 정리합니다.",
      heroDescription:
        "게시판 콘텐츠를 분석해 검색 결과용 문구, 답변형 AI용 FAQ, 생성형 AI 검색용 요약과 구조화 데이터를 제안합니다. 실제 연동은 홈페이지 관리자 또는 개발 담당자가 진행해야 합니다.",
      dashboardStatus: "관리자 확인 후 반영",
      dashboardTitle: "제목, 설명, FAQ, 구조화 데이터 자동 생성",
      dashboardDescription:
        "관리자는 생성된 초안을 확인하고 실제 게시글에 적용할 항목만 선택해 다듬을 수 있습니다.",
      optimizationTypes: [
        {
          label: "SEO",
          title: "검색 결과용 문구 자동 생성",
          description:
            "SEO Title, Meta Description, OG Title, OG Description을 게시글 맥락에 맞춰 제안합니다.",
        },
        {
          label: "AEO",
          title: "AI 답변 엔진 최적화",
          description:
            "ChatGPT, Perplexity 같은 답변형 검색이 인용하기 좋은 FAQ와 핵심 답변을 구성합니다.",
        },
        {
          label: "GEO",
          title: "생성형 AI 검색 대비",
          description:
            "GEO 요약과 JSON-LD 구조화 데이터로 AI가 콘텐츠의 의미를 이해하기 쉽게 정리합니다.",
        },
      ],
      guideTitle:
        "사용자는 요청만 하면 되고, 실제 연결은 홈페이지 관리자가 진행합니다.",
      guideSteps: [
        {
          index: "01",
          title: "홈페이지 관리자에게 먼저 요청하세요.",
          description:
            "운영 중인 홈페이지 내부에 연동 코드가 들어가야 게시판 콘텐츠를 불러올 수 있습니다.",
        },
        {
          index: "02",
          title: "현재는 그누보드5만 지원합니다.",
          description:
            "그누보드5 게시판의 글 작성과 수정 흐름에 맞춰 콘텐츠를 자동으로 가져오는 구조입니다.",
        },
        {
          index: "03",
          title: "AI 초안을 확인 후 반영합니다.",
          description:
            "관리자는 SEO/AEO/GEO 문구와 구조화 데이터를 검토하고 필요한 부분만 수정해 적용합니다.",
        },
      ],
      scoreTitle:
        "AI가 만든 문구를 7가지 기준의 점수와 개선 항목으로 다시 확인합니다.",
      scores: [
        "SEO 점수",
        "AEO 점수",
        "GEO 점수",
        "Content 점수",
        "AI Citation 점수",
        "E-E-A-T 점수",
        "Readability 점수",
      ],
      supportTitle:
        "워드프레스, 카페24 쇼핑몰, 자체 CMS는 아직 지원하지 않습니다.",
      supportNotes: [
        "방문자가 직접 설치하는 서비스가 아니라, 운영 중인 그누보드5 홈페이지의 관리자 또는 개발 담당자가 연동해야 작동합니다.",
        "연동 후에는 새 글을 확인하고 AI가 생성한 검색 결과용 문구와 답변형 검색용 구조화 데이터를 실제 게시글에 반영할 수 있습니다.",
      ],
    },
    bannerImage: "/project/sample-project-1.jpg",
    galleryImages: [
      "/project/sample-project-2.jpg",
      "/project/sample-project-3.jpg",
      "/project/sample-project-4.jpg",
      "/project/sample-project-5.jpg",
      "/project/sample-project-6.jpg",
    ],
    credits: [
      { label: "Planning", value: "FOFO" },
      { label: "Design", value: "FOFO" },
      { label: "Development", value: "FOFO" },
      { label: "Optimization", value: "FOFO" },
      { label: "Launch", value: "FOFO" },
    ],
  },
  {
    slug: "brand-community",
    index: "02",
    name: "Brand Community",
    listImage: "/pr_img03.webp",
    previewImage: "/pr_img03.webp",
    route: "/work/brand-community",
    service: "Design & Development",
    year: "2026",
    workVariant: "variant-2",
    workImages: ["/work/work_2_1.jpg", "/work/work_2_2.jpg", "/work/work_2_3.jpg"],
    kicker: "Community Experience",
    title: "Brand Community",
    concept:
      "A brand-centered community page designed to make member stories, updates, and conversion paths feel connected.",
    form: "Community Website",
    medium: "Brand UI and Interaction",
    studio: "FOFO",
    bannerImage: "/project/sample-project-2.jpg",
    galleryImages: [
      "/project/sample-project-1.jpg",
      "/project/sample-project-3.jpg",
      "/project/sample-project-4.jpg",
      "/project/sample-project-5.jpg",
      "/project/sample-project-6.jpg",
    ],
    credits: [
      { label: "Strategy", value: "FOFO" },
      { label: "Identity", value: "FOFO" },
      { label: "Interface", value: "FOFO" },
      { label: "Motion", value: "FOFO" },
      { label: "Production", value: "FOFO" },
    ],
  },
  {
    slug: "power-shopping",
    index: "03",
    name: "Power Shopping",
    listImage: "/pr_img02.webp",
    previewImage: "/pr_img02.webp",
    route: "/work/power-shopping",
    service: "Design & Development",
    year: "2025",
    workVariant: "variant-2",
    workImages: ["/work/work_3_1.jpg", "/work/work_3_2.jpg", "/work/work_3_3.jpg"],
    kicker: "Commerce Interface",
    title: "Power Shopping",
    concept:
      "A commerce layout shaped for quick scanning, confident product comparison, and smoother purchase decisions.",
    form: "E-commerce Page",
    medium: "Responsive Web Design",
    studio: "FOFO",
    bannerImage: "/project/sample-project-3.jpg",
    galleryImages: [
      "/project/sample-project-1.jpg",
      "/project/sample-project-2.jpg",
      "/project/sample-project-4.jpg",
      "/project/sample-project-5.jpg",
      "/project/sample-project-6.jpg",
    ],
    credits: [
      { label: "UX", value: "FOFO" },
      { label: "Art Direction", value: "FOFO" },
      { label: "Frontend", value: "FOFO" },
      { label: "QA", value: "FOFO" },
      { label: "Delivery", value: "FOFO" },
    ],
  },
  {
    slug: "landing-page",
    index: "04",
    name: "Landing Page",
    listImage: "/featured-work/work-4.jpg",
    previewImage: "/featured-work/work-4.jpg",
    route: "/work/landing-page",
    service: "Design & Development",
    year: "2025",
    workVariant: "variant-3",
    workImages: ["/work/work_4_1.jpg", "/work/work_4_2.jpg", "/work/work_4_3.jpg"],
    kicker: "Campaign Website",
    title: "Landing Page",
    concept:
      "A campaign page structured around a direct message, strong visual rhythm, and a short path to action.",
    form: "Landing Page",
    medium: "Design and Development",
    studio: "FOFO",
    bannerImage: "/project/sample-project-4.jpg",
    galleryImages: [
      "/project/sample-project-1.jpg",
      "/project/sample-project-2.jpg",
      "/project/sample-project-3.jpg",
      "/project/sample-project-5.jpg",
      "/project/sample-project-6.jpg",
    ],
    credits: [
      { label: "Campaign", value: "FOFO" },
      { label: "Copy", value: "FOFO" },
      { label: "Design", value: "FOFO" },
      { label: "Build", value: "FOFO" },
      { label: "Release", value: "FOFO" },
    ],
  },
  {
    slug: "web-renewal",
    index: "05",
    name: "Web Renewal",
    listImage: "/featured-work/work-5.jpg",
    previewImage: "/featured-work/work-5.jpg",
    route: "/work/web-renewal",
    service: "Interaction & Development",
    year: "2025",
    workVariant: "variant-1",
    workImages: ["/work/work_5_1.jpg", "/work/work_5_2.jpg", "/work/work_5_3.jpg"],
    kicker: "Renewal System",
    title: "Web Renewal",
    concept:
      "A renewal project that clarifies content structure, modernizes movement, and gives the site a more durable visual system.",
    form: "Corporate Website",
    medium: "Interaction and Development",
    studio: "FOFO",
    bannerImage: "/project/sample-project-5.jpg",
    galleryImages: [
      "/project/sample-project-1.jpg",
      "/project/sample-project-2.jpg",
      "/project/sample-project-3.jpg",
      "/project/sample-project-4.jpg",
      "/project/sample-project-6.jpg",
    ],
    credits: [
      { label: "Audit", value: "FOFO" },
      { label: "Structure", value: "FOFO" },
      { label: "Interaction", value: "FOFO" },
      { label: "Development", value: "FOFO" },
      { label: "Maintenance", value: "FOFO" },
    ],
  },
  {
    slug: "component-ui",
    index: "06",
    name: "Component UI",
    listImage: "/featured-work/work-6.jpg",
    previewImage: "/featured-work/work-6.jpg",
    route: "/work/component-ui",
    service: "Design & Development",
    year: "2025",
    workVariant: "variant-2",
    workImages: ["/work/work_6_1.jpg", "/work/work_6_2.jpg", "/work/work_6_3.jpg"],
    kicker: "Interface Library",
    title: "Component UI",
    concept:
      "A component-led interface built for reuse, consistent interaction states, and faster page assembly.",
    form: "UI System",
    medium: "Component Design and Frontend",
    studio: "FOFO",
    bannerImage: "/project/sample-project-6.jpg",
    galleryImages: [
      "/project/sample-project-1.jpg",
      "/project/sample-project-2.jpg",
      "/project/sample-project-3.jpg",
      "/project/sample-project-4.jpg",
      "/project/sample-project-5.jpg",
    ],
    credits: [
      { label: "System", value: "FOFO" },
      { label: "Components", value: "FOFO" },
      { label: "States", value: "FOFO" },
      { label: "Docs", value: "FOFO" },
      { label: "Delivery", value: "FOFO" },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  if (currentIndex === -1) return null;

  return projects[(currentIndex + 1) % projects.length];
}
