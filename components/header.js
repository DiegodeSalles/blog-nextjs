import useServerDarkMode from "@/hooks/use-server-dark-mode";
import DarkMode from "./dark-mode";
import { Navigation } from "./navigation";
import Link from "next/link";

export default function Header() {
  const theme = useServerDarkMode();
  return (
    <header className="flex justify-between md:items-center mt-4">
      <div className="flex items-center md:space-x-8">
        <div className="hidden md:block">
          <Link
            href="/"
            className="font-mono text-xl hover:dark:text-blue-400 hover:text-red-400"
          >
            Diego de Salles
          </Link>
        </div>
        <Navigation />
      </div>
      <div className="">
        <DarkMode defaultTheme={theme} />
      </div>
    </header>
  );
}
