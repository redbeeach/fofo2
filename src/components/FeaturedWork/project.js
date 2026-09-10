import { projects as projectData } from "@/data/projects";

export const projects = projectData.map((project) => ({
  name: project.name,
  description: project.concept,
  img: project.listImage,
  route: project.route,
}));
