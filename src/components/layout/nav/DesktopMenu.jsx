import { useEffect, useState } from "react";
import NavItem from "./NavItem";

const DesktopMenu = ({
  user,
  router,
  navLinks,
  mounted,
  currentTheme,
  theme,
  setTheme,
  windowHeight,
}) => {
  const [active, setActive] = useState("Home");
  const [navItems, setNavItems] = useState(null);

  useEffect(() => {
    let items = user
      ? navLinks
      : navLinks.filter((item) => item.title !== "Dashboard");

    setNavItems(items);
  }, [user, navLinks]);

  const handleColor = (title) => {
    let themeClass;
    if (mounted && currentTheme === "dark") {
      if (active === title) {
        themeClass = "text-[ghostwhite]";
      } else {
        themeClass =
          "shadow-black drop-shadow-2xl text-dimWhite hover:text-[ghostwhite]";
      }
    } else {
      themeClass = "text-white tracking-wide";
    }

    return themeClass;
  };

  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <div className=" w-site flex flex-col items-center justify-between">
        <ul className={`hidden list-none items-center justify-end sm:flex`}>
          {navItems?.map((nav, index) => (
            <li
              key={nav.id}
              className={`ease relative rounded-md py-1 text-[16px] font-normal uppercase transition-all duration-200 hover:bg-gray-400 hover:bg-opacity-20 hover:px-2 dark:hover:bg-gray-100 dark:hover:bg-opacity-20
      					${windowHeight >= 100 ? "text-[0.7rem]" : "text-[0.8rem]"}
      							${handleColor(nav.title)}
                    ${index === navItems?.length - 1 ? "mr-4" : "mr-10"}							`}
              onClick={() => setActive(nav.title)}
            >
              <NavItem
                {...{
                  path: "desktop",
                  user,
                  nav,
                  mounted,
                  theme,
                  setTheme,
                  currentTheme,
                  windowHeight,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DesktopMenu;
