import H1 from "@/components/h1";

export default function NotFound() {
  return (
    <div>
      <H1>404</H1>
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
