export default function NotFound() {
  return (
    <div>
      <h1 className="text-2xl">404</h1>
      <div>The blog post was not found.</div>
      <div className="mt-4">
        <div>You might want to check out some blog posts:</div>
        <ul>
          <li>First</li>
          <li>Second</li>
        </ul>
      </div>
    </div>
  );
}
