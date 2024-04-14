import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function BlogPostsPage({ searchParams }) {
  // console.log(searchParams.tags);
  const tags = searchParams.tags?.split(",");
  // console.log(tags);
  const posts = await getPosts({ tags });

  return (
    <>
      <h1 className="m-8 text-xl text-center">Recent Posts</h1>

      <div className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Stay up to date with most recent posts
      </div>

      <hr />

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
    </>
  );
}
