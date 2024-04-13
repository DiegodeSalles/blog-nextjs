import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";

const titles = {
  first: "Hello first!",
  second: "Hello second!",
};

export async function generateMetadata({ params, searchParams }, parent) {
  const description = (await parent).description ?? "Default description";
  return {
    title: titles[params.slug],
    description,
  };
}

export default function BlogPage({ params }) {
  if (!["first", "second"].includes(params.slug)) {
    notFound();
  }

  const markdown = fs.readFileSync(
    path.join(process.cwd(), "content", `${params.slug}.mdx`)
  );

  return (
    <article className="prose dark:prose-invert">
      <MDXRemote source={markdown} />
    </article>
  );
}
