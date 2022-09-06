import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { close, logoPinkBlue, logoWhite, logoYellowCyan, menu } from "../../../assets";
import { navLinks } from "../../../constants";
import { RooferContext } from "../../../store/RooferContext";
import DesktopMenu from "./DesktopMenu";
import NavLogo from "./NavLogo";
import PhoneMenu from "./PhoneMenu";
import SocialMedia from "./SocialMedia";

const Navbar = () => {
  const { user, windowWidth } = useContext(RooferContext);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [windowHeight, setWindowHeigth] = useState("");
  const [view, setView] = useState(false);
  const [dark, setDark] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const router = useRouter();

  const path = router && router.pathname;

  useEffect(() => {
    const handleMount = setMounted(true);
    return () => handleMount;
  }, []);

  useEffect(() => {
    const handleDark = setTimeout(() => {
      setDark(true);
    }, 3000);
    return () => handleDark;
  }, []);

  const handleWindowSize = () => {
    setWindowHeigth(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => handleWindowSize());
    return () => window.removeEventListener("scroll", handleWindowSize());
  });

  useEffect(() => {
    const handleWindow = typeof window !== "undefined" && setView(window);
    return () => handleWindow;
  }, []);

  const handleNavBg = () => {
    let bgClass;
    if (mounted && currentTheme === "dark") {
      bgClass = "bg-primary";
    } else {
      bgClass = `bg-themeDarkest`;
    }

    return bgClass;
  };

  const handleOpacity = () => {
    let bgOpacity;
    if (path === "/") {
      if (currentTheme === "dark") {
        if (dark) {
          bgOpacity = "bg-opacity-90";
        } else {
          bgOpacity = "bg-opacity-0";
        }
      } else {
        if (dark) {
          bgOpacity = "bg-opacity-100";
        } else {
          bgOpacity = "bg-opacity-0";
        }
      }
    } else {
      bgOpacity = "bg-opacity-100";
    }

    return bgOpacity;
  };

  return (
    <nav
      className={`ease ${
        path === "/" ? "fixed" : "sticky"
      } z-[15] flex w-screen flex-col items-center justify-center transition-all duration-1000
      ${view ? "translate-y-0" : "-translate-y-20"}
      ${handleNavBg()}
      ${handleOpacity()}
      ${
        windowHeight === 0
          ? "-top-1 my-0 shadow-sm sm:top-0 sm:h-16"
          : "sm-top-2 -top-3 mt-2 sm:top-0 sm:mt-0 sm:h-14"
      }
      `}
    >
      <div className="flex flex-col items-center justify-center sm:justify-center">
        <div className="sm:w-site flex h-full w-screen flex-row items-center justify-center">
          <div className="flex w-1/2 items-center justify-start sm:w-1/3">
            <NavLogo
              {...{
                path,
                logoWhite,

                logoYellowCyan,
                currentTheme,
                dark,
                windowWidth,
              }}
            />
          </div>

          <div className="flex w-1/3 items-center justify-center">
            <DesktopMenu
              {...{
                router,
                user,
                navLinks,
                mounted,
                currentTheme,
                theme,
                setTheme,
                windowHeight,
              }}
            />
          </div>

          <div className="hidden w-1/3 items-center justify-end sm:flex">
            <SocialMedia path="navbar" />
          </div>

          <PhoneMenu
            {...{
              user,
              navLinks,
              menu,
              close,
              mounted,
              currentTheme,
              theme,
              setTheme,
              windowHeight,
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// ${
//   dark
//     ? currentTheme === "dark"
//       ? "bg-opacity-90"
//       : "bg-opacity-100"
//     : "bg-opacity-0"
// }
