import H1 from "@/components/h1";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Home() {
  const { posts } = await getPosts({
    newest: true,
    limit: 3,
  });
  return (
    <>
      <section className="mb-8">
        <H1>Welcome to my page!</H1>
        <p>My name is Diego, I am a web developer.</p>
        <p>
          Checkout my{" "}
          <Link
            className="underline hover:text-slate-400 dark:hover:text-gray-400"
            href="/about/projects"
          >
            projects
          </Link>
          , some{" "}
          <Link
            className="underline hover:text-slate-400 dark:hover:text-gray-400"
            href="/photos"
          >
            random dogs photos
          </Link>{" "}
          and a mock{" "}
          <Link
            href="/blog"
            className="underline hover:text-slate-400 dark:hover:text-gray-400"
          >
            blog
          </Link>
          .
        </p>
      </section>
      <section>
        <h2 className="text-lg mb-8">Latest on the blog</h2>
        <ul className="font-mono">
          {posts.map((post) => (
            <li key={post.slug}>
              <span className="text-gray-400">
                {post.frontmatter.date}&nbsp;{" "}
                <Link
                  href={`/blog/${post.slug}`}
                  className="underline hover:text-red-400 dark:hover:text-blue-400"
                >
                  {post.frontmatter.title}
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
