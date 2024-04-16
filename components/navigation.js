import Link from "next/link";
import styles from "./navigation.module.css";

export function Navigation() {
  return (
    <nav className="font-mono dark:text-[#bb80b3]">
      <ul className="flex justify-center md:space-x-4 flex-col md:flex-row w-full">
        <li>
          <Link
            href="/"
            className={`${styles.link} dark:hover:bg-[#363f45] dark:hover:text-[#de605b] inline md:hidden`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/about/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/photos">
            Photos
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
