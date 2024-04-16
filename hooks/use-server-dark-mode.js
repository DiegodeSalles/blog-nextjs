// comment this line to make most pages static, but remove the dark mode feature
import { cookies } from "next/headers";

// also need to change the parameter to just defaultTheme
const useServerDarkMode = (defaultTheme = "dark") => {
  return cookies().get("theme")?.value ?? defaultTheme;
};

export default useServerDarkMode;
