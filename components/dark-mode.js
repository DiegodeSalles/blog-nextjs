"use client";
import useDarkMode from "@/hooks/use-dark-mode";

export default function DarkMode({ defaultTheme }) {
  const { theme, toggleTheme } = useDarkMode(defaultTheme);

  return (
    <label className="flex cursor-pointer select-none font-mono items-center">
      <input
        type="checkbox"
        checked={theme}
        onChange={toggleTheme}
        className="sr-only"
      />

      <span
        className={`mx-4 flex h-6 w-[50px] items-center rounded-full p-1 duration-200 ${
          theme === "dark" ? "bg-slate-700" : "bg-gray-400"
        }`}
      >
        <span
          className={`duration-200 ${
            theme === "light" ? "translate-x-[21px]" : ""
          }`}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </span>
      </span>
    </label>
  );
}
