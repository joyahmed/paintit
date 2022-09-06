import { useRouter } from "next/router";
import DesktopMenu from "./DesktopMenu";
import NavLogo from "./NavLogo";
import PhoneMenu from "./PhoneMenu";

const NavbarLight = ({
  user,
  navLinks,
  currentTheme,
  theme,
  setTheme,
  menu,
  close,
  mounted,
  view,
  windowHeight,
  roofer,
  rooferDark,
}) => {
  const router = useRouter();

  return (
    <>
      <nav
        className={`ease fixed z-[10] flex w-screen  items-center justify-center px-2 tracking-wider transition-all duration-1000 ${
          view ? "translate-y-0" : "-translate-y-20"
        }
				${
          windowHeight > 50
            ? "-top-1 my-0 bg-opacity-30 bg-gradient-to-r from-transparent  via-gray-50 to-cyan-50 shadow-sm sm:h-16"
            : `} -top-3 md:top-0`
        }
				 `}
      >
        <div className="w-site flex items-center justify-between ">
          <NavLogo
            {...{
              router,
              roofer,
              rooferDark,
              currentTheme,
              windowHeight,
            }}
          />

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
      </nav>
    </>
  );
};

export default NavbarLight;
