import H1 from "@/components/h1";
import Pagination from "@/components/pagination";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function BlogPostsPage({ searchParams }) {
  const tags = searchParams.tags?.split(",");
  const order = searchParams.order ?? "newest";
  const page = searchParams.page ?? 1;
  const limit = searchParams.limit ?? 3;
  const { posts, pageCount } = await getPosts({
    tags,
    newest: order === "newest",
    page,
    limit,
  });

  return (
    <>
      <H1>Recent Posts</H1>

      <div className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Stay up to date with most recent posts
      </div>

      <hr />

      <div className="mb-8">
        Display&nbsp;
        {order === "newest" && (
          <Link href="/blog?order=oldest" className="underline">
            oldest
          </Link>
        )}
        {order === "oldest" && (
          <Link href="/blog?order=newest" className="underline">
            newest
          </Link>
        )}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => {
          const { frontmatter, slug } = post;
          const { title, description, date } = frontmatter;
          const data = date
            ? new Date(date).toLocaleDateString()
            : "No date added";
          return (
            <li key={slug}>
              <Link
                href={`/blog/${slug}`}
                className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
              >
                {title}
              </Link>
              <div className="text-gray-400 text-md mt-2">{description}</div>
              <div className="text-gray-400 text-sm mt-2">{data}</div>
            </li>
          );
        })}
      </ul>
      <div className="mt-8">
        <Pagination pageCount={pageCount} />
      </div>
    </>
  );
}
