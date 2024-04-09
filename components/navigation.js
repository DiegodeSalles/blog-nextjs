import Link from "next/link";
import styles from "./navigation.module.css";

export function Navigation() {
  return (
    <nav className="font-mono">
      <ul className="flex justify-center md:space-x-4 flex-col md:flex-row w-full">
        <li>
          <Link className={styles.link} href="/">
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
      </ul>
    </nav>
  );
}
