import Footer from "@/components/Footer/Footer";

export default function ForwardProject({ project, nextProject, totalProjects }) {
  return (
    <div className="project-page forward-editorial-page">
      <section className="forward-editorial-hero">
        <h1>{project.title}</h1>
        <div className="forward-editorial-meta">
          <span>{project.kicker}</span>
          <span>{project.year}</span>
        </div>
      </section>

      <section className="forward-editorial-layout">
        <div className="forward-editorial-copy">
          <p className="forward-editorial-lead">
            클라이언트의 높은 디자인 완성도 요구와 실제 운영 편의성을 함께
            고려하여 제작한 프로젝트입니다.
          </p>

          <div className="forward-editorial-sections">
            <article>
              <h2>Overview</h2>
              <p>
                포워드피부과는 클라이언트의 높은 디자인 완성도와 실제 운영
                편의성을 함께 고려하여 제작한 웹사이트입니다. 브랜드가 가진
                신뢰감과 전문성을 명확하게 전달하면서도, 방문자가 필요한 정보를
                빠르게 찾을 수 있도록 화면의 흐름을 정리했습니다.
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
                실제 코딩 과정에서도 시안과 1px의 차이도 발생하지 않도록 여백,
                폰트, 이미지 배치를 세밀하게 확인하며 작업했습니다. 정해진 일정
                안에서 다양한 인터랙션을 구현해야 했기 때문에 애니메이션의
                자연스러운 움직임과 성능 최적화에도 신경 썼습니다.
              </p>
            </article>
            <article>
              <h2>Outcome</h2>
              <p>
                장비 소개 페이지와 의료진 소개처럼 운영 중 수정이 필요한
                콘텐츠는 관리자가 직접 등록하고 변경할 수 있도록 개발했습니다.
                결과적으로 디자인 완성도와 유지보수 편의성을 함께 갖춘 사이트로
                완성할 수 있었습니다.
              </p>
            </article>
          </div>

          <div className="forward-editorial-details">
            <div><span>Role &amp; Scope</span><strong>{project.form}</strong></div>
            <div><span>CMS</span><strong>{project.medium}</strong></div>
            <div><span>Used Tools</span><strong>{project.studio}</strong></div>
          </div>
        </div>

        <div className="forward-editorial-media">
          <figure className="forward-editorial-media-primary">
            <img src={project.bannerImage} alt={project.name} />
          </figure>
          {project.galleryImages.map((src, index) => (
            <figure key={`${project.slug}-editorial-image-${index}`}>
              <img src={src} alt={`${project.name} preview ${index + 1}`} />
            </figure>
          ))}
        </div>
      </section>

      <section className="forward-editorial-next">
        {nextProject && (
          <a href={nextProject.route}>
            <div>
              <span>Next project / {nextProject.index} - {totalProjects}</span>
              <h2>{nextProject.name}</h2>
            </div>
            <img src={nextProject.bannerImage} alt={nextProject.name} />
          </a>
        )}
      </section>

      <Footer />
    </div>
  );
}
