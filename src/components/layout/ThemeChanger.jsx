import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const ThemeChanger = ({
  mounted,
  systemTheme,
  theme,
  setTheme,
  path,
  currentTheme,
  windowHeight,
}) => {
  if (!mounted) return null;

  const handleTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  if (mounted && currentTheme === "dark") {
    return (
      <span
        className={`flex items-center justify-center ${
          path === "Sidebar" && "justify-center"
        } `}
        onClick={() => handleTheme("light")}
      >
        <SunIcon
          className={`${
            path === "Sidebar"
              ? "h-6 w-6"
              : path === "phone"
              ? "h-[37px] w-[37px]"
              : windowHeight <= 0
              ? "h-[17px] w-[17px]"
              : "h-[16px] w-[16px]"
          }`}
          role="button"
        />
      </span>
    );
  } else {
    return (
      <span
        className="flex items-center justify-start"
        onClick={() => handleTheme("dark")}
      >
        <MoonIcon
          className={`${
            path === "Sidebar"
              ? "h-6 w-6"
              : path === "phone"
              ? "h-[36px] w-[36px]"
              : windowHeight <= 0
              ? "h-[16px] w-[16px]"
              : "h-[15px] w-[15px]"
          }`}
          role="button"
        />
      </span>
    );
  }
};

export default ThemeChanger;
