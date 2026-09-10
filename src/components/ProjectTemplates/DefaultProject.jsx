import Footer from "@/components/Footer/Footer";
import Copy from "@/components/Copy/Copy";

export default function DefaultProject({ project, nextProject, totalProjects }) {
  return (
    <div className="project-page">
      <section className="project-header">
        <Copy delay={0.75}>
          <p className="lg">{project.kicker}</p>
          <h1>{project.title}</h1>
        </Copy>
      </section>

      <section className="project-banner-img">
        <div className="project-banner-img-wrapper">
          <img src={project.bannerImage} alt={project.name} />
        </div>
      </section>

      <section className="project-details">
        <Copy animateOnScroll={true}>
          <div className="details">
            <p>Concept</p>
            <h3>{project.concept}</h3>
          </div>

          <div className="details">
            <p>Cycle</p>
            <h3>{project.year}</h3>
          </div>

          <div className="details">
            <p>Form</p>
            <h3>{project.form}</h3>
          </div>

          <div className="details">
            <p>Medium</p>
            <h3>{project.medium}</h3>
          </div>

          <div className="details">
            <p>Studio</p>
            <h3>{project.studio}</h3>
          </div>
        </Copy>
      </section>

      <section className="project-images">
        <div className="project-images-container">
          {project.galleryImages.map((src, index) => (
            <div className="project-img" key={`${project.slug}-image-${index}`}>
              <div className="project-img-wrapper">
                <img src={src} alt={`${project.name} image ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="project-details">
        <Copy animateOnScroll={true}>
          {project.credits.map((credit) => (
            <div className="details" key={credit.label}>
              <p>{credit.label}</p>
              <h3>{credit.value}</h3>
            </div>
          ))}
        </Copy>
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
