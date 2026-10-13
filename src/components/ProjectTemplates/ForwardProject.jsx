import Footer from "@/components/Footer/Footer";
import Copy from "@/components/Copy/Copy";

export default function ForwardProject({ project, nextProject, totalProjects }) {
  return (
    <div className="project-page forward-case-page">
      <section className="forward-case-hero">
        <div className="forward-case-hero-copy">
          <Copy delay={0.45}>
            <p className="forward-case-eyebrow">{project.kicker}</p>
            <h1>{project.title}</h1>
            <p className="forward-case-lead">
              클라이언트의 높은 디자인 완성도와 실제 운영 편의성을 함께 고려해
              제작한 피부과 웹사이트입니다.
            </p>
          </Copy>
        </div>

        <div className="forward-case-hero-image">
          <img src={project.bannerImage} alt={project.name} />
        </div>
      </section>

      <section className="forward-case-meta" aria-label="Project details">
        <div>
          <span>Year</span>
          <strong>{project.year}</strong>
        </div>
        <div>
          <span>Role &amp; Scope</span>
          <strong>{project.form}</strong>
        </div>
        <div>
          <span>CMS</span>
          <strong>{project.medium}</strong>
        </div>
        <div>
          <span>Used Tools</span>
          <strong>{project.studio}</strong>
        </div>
      </section>

      <section className="forward-case-story">
        <div className="forward-case-story-heading">
          <p className="forward-case-eyebrow">Project story</p>
          <h2>작은 디테일까지 정확하게 쌓아 올린 웹 경험</h2>
        </div>

        <div className="forward-case-story-list">
          <Copy animateOnScroll={true}>
            <article>
              <span>01 / Overview</span>
              <p>
                포워드피부과는 클라이언트의 높은 디자인 완성도 요구와 실제 운영
                편의성을 함께 고려하여 제작한 프로젝트입니다.
              </p>
            </article>
            <article>
              <span>02 / Challenge</span>
              <p>
                클라이언트가 디자인에 굉장히 꼼꼼하고 세심한 편이어서 제작
                과정에서 전체적인 방향을 한 차례 수정했고, 메인 디자인 역시 여러
                차례 컨펌을 거친 후 퍼블리싱을 진행했습니다.
              </p>
            </article>
            <article>
              <span>03 / Approach</span>
              <p>
                실제 코딩 과정에서도 시안과 1px의 차이도 발생하지 않도록 여백,
                폰트, 이미지 배치를 세밀하게 확인하며 작업했습니다. 여러 차례의
                수정과 피드백을 통해 디자인의 작은 디테일까지 완성도를 높였습니다.
              </p>
            </article>
            <article>
              <span>04 / Outcome</span>
              <p>
                장비 소개와 의료진 소개처럼 운영 중 수정이 필요한 콘텐츠는
                관리자가 직접 등록하고 변경할 수 있도록 개발하여 유지보수의
                편의성을 높였습니다.
              </p>
            </article>
          </Copy>
        </div>
      </section>

      <section className="forward-case-gallery" aria-label="Project gallery">
        {project.galleryImages.map((src, index) => (
          <figure
            className={`forward-case-gallery-item forward-case-gallery-item-${index + 1}`}
            key={`${project.slug}-gallery-${index}`}
          >
            <img src={src} alt={`${project.name} preview ${index + 1}`} />
          </figure>
        ))}
      </section>

      <section className="forward-case-credits">
        <div>
          <p className="forward-case-eyebrow">Credits</p>
          <h2>From direction to delivery.</h2>
        </div>
        <div className="forward-case-credit-list">
          {project.credits.map((credit) => (
            <div key={credit.label}>
              <span>{credit.label}</span>
              <strong>{credit.value}</strong>
            </div>
          ))}
        </div>
      </section>

      {nextProject && (
        <a className="forward-case-next" href={nextProject.route}>
          <div>
            <p className="forward-case-eyebrow">
              Next project / {nextProject.index} - {totalProjects}
            </p>
            <h2>{nextProject.name}</h2>
          </div>
          <img src={nextProject.bannerImage} alt={nextProject.name} />
        </a>
      )}

      <Footer />
    </div>
  );
}
