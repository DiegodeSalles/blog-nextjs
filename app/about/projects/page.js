import { ProjectListLoading } from "./components/projectlist-loading";
import { ProjectList } from "./components/projectlist";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function ProjectsPage() {
  return (
    <div>
      <h1 className="m-8 text-xl text-center">Projects</h1>

      <div className="mb-8">Hello this is the list of my repos!</div>
      <ErrorBoundary fallback={<div>Cannot fetch project list</div>}>
        <Suspense fallback={<ProjectListLoading />}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
