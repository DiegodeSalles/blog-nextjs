import Card from "@/components/card";
import Link from "next/link";
import { Octokit } from "@octokit/core";

export async function ProjectList() {
  try {
    const octokit = new Octokit({
      auth: process.env.GIT_API,
    });
    const { data } = await octokit.request("GET /users/{username}/repos", {
      username: "diegodesalles",
    });
    return (
      <ul className="grid md:grid-cols-2 gap-4">
        {data.map((repo) => (
          <li key={repo.id} className="mb-4">
            <Card className="font-mono h-full">
              <div className="flex justify-between items-center mb-4">
                <Link href={repo.html_url} className="font-semibold">
                  {repo.name}
                </Link>
                <div>🌟 {repo.stargazers_count}</div>
              </div>
              <div>{repo.description ?? "No description"}</div>
            </Card>
          </li>
        ))}
      </ul>
    );
  } catch (error) {
    return <p>Error fetching data!</p>;
  }
}
