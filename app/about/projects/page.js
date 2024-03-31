import ProjectListLoading from "./components/projectlist-loading";
import ProjectList from "./components/projectlist";

import { Suspense } from "react";

export default async function ProjectsPage() {

  return (
    <div className="p-20">
      <h1 className="flex justify-center mb-8 text-xl">Projects</h1>
      <div className="mb-8">Hello this is a list of my projects!</div>
        <Suspense fallback={<ProjectListLoading />}>
          <ProjectList />
        </Suspense>
    </div>);
}
