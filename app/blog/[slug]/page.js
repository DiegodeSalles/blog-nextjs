import { notFound } from "next/navigation";
import { getPost as getPostNotCached } from "@/lib/posts";
import { cache } from "react";
import Link from "next/link";

const getPost = cache(async (slug) => await getPostNotCached(slug));

export async function generateMetadata({ params }) {
  try {
    const { frontmatter } = await getPost(params.slug);
    return frontmatter;
  } catch (error) {}
}

export default async function BlogPage({ params }) {
  let post;

  try {
    post = await getPost(params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert">
      <div className="flex space-x-2 mb-8">
        {post.frontmatter.tags.map((tag) => (
          <Link
            href={`/blog/?tags=${tag}`}
            className="dark:text-gray-400 text-gray-500"
            key={tag}
          >
            #{tag}
          </Link>
        ))}
      </div>
      {post.content}
    </article>
  );
}
