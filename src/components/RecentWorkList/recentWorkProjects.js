import { projects } from "@/data/projects";

export const recentWorkProjects = projects.map((project) => ({
  name: project.name,
  img: project.previewImage,
  route: project.route,
  service: project.service,
  year: project.year,
}));
