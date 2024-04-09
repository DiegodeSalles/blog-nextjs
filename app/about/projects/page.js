import { ProjectListLoading } from "./components/projectlist-loading";
import { ProjectList } from "./components/projectlist";

import { Suspense } from "react";

export default async function ProjectsPage() {
  const response = await fetch("http://localhost:3001/repos");
  const repos = await response.json();

  return (
    <div className="p-20">
      <h1 className="m-8 text-xl text-center">Projects</h1>

      <div className="mb-8">Hello this is the list of my repos!</div>

      <Suspense fallback={<ProjectListLoading />}>
        <ProjectList />
      </Suspense>
    </div>
  );
}
