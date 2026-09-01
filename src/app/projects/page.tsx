import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore AZTEK's portfolio of premium architectural and engineering solutions.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
