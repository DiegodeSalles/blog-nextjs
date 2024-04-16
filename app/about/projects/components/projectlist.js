import Card from "@/components/card";
import Link from "next/link";
import { Octokit } from "@octokit/core";

export async function ProjectList() {
  try {
    //  uncomment the following lines if you are not using an API Token from Github

    // change the username to the user you want to access the repository list

    // const userName = "username";
    // const repoList = await fetch(
    //   `https://api.github.com/users/${userName}/repos`
    // );
    // const data = await repoList.json();

    // you'll also need to comment from this line

    const octokit = new Octokit({
      auth: process.env.GIT_API,
    });
    const { data } = await octokit.request("GET /users/{username}/repos", {
      username: process.env.GIT_USER,
    });

    // to this line
    return (
      <ul className="grid md:grid-cols-2 gap-4">
        {data.map((repo) => (
          <li key={repo.id} className="mb-4">
            <Card className="font-mono h-full">
              <div className="flex justify-between items-center mb-4">
                <Link
                  href={repo.html_url}
                  className="font-semibold underline hover:dark:text-red-400"
                >
                  {repo.name}
                </Link>
                <div>🌟 {repo.stargazers_count}</div>
              </div>
              <div className="dark:text-[#99c794]">
                {repo.description ?? "No description"}
              </div>
            </Card>
          </li>
        ))}
      </ul>
    );
  } catch (error) {
    return <p>Error fetching data!</p>;
  }
}
