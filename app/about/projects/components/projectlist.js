export async function ProjectList() {
  const response = await fetch("http://localhost:3001/repos");
  const repos = await response.json();
  return (
    <ul>
      {repos.map((repo) => (
        <li key={repo.id} className="mb-4">
          <div>{repo.title}</div>
          <div>{repo.description}</div>
          <div>{repo.stargazers_count}</div>
        </li>
      ))}
    </ul>
  );
}
