import { redirect } from "next/navigation";
import { projects } from "@/data/projects";

export default function SampleProjectRedirect() {
  redirect(projects[0].route);
}
