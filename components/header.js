import Counter from "./counter";
import Link from 'next/link';

export default function Header() {
  return (
  <header className="p-20 border-emerald-300 border">
    <ul className="flex justify-center space-x-4">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/about/projects">Projects</Link></li>
    </ul>
    <Counter className="justify-center flex" />
  </header>);
}