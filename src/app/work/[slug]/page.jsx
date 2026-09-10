import "../project.css";
import { notFound } from "next/navigation";
import AxSeoManagerProject from "@/components/ProjectTemplates/AxSeoManagerProject";
import DefaultProject from "@/components/ProjectTemplates/DefaultProject";
import { getNextProject, getProjectBySlug, projects } from "@/data/projects";

const projectTemplates = {
  axSeoManager: AxSeoManagerProject,
  default: DefaultProject,
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | FOFO`,
    description: project.concept,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(project.slug);
  const totalProjects = projects.length.toString().padStart(2, "0");
  const Template =
    projectTemplates[project.template] || projectTemplates.default;

  return (
    <Template
      project={project}
      nextProject={nextProject}
      totalProjects={totalProjects}
    />
  );
}
