import Image from "next/image";
import { useEffect, useState } from "react";
import { close, menu, paintIt, paintItBlack, paintItDark } from "../../../assets";
import NavItem from "./NavItem";

const PhoneMenu = ({
  user,
  navLinks,
  close,
  mounted,
  currentTheme,
  theme,
  setTheme,
  windowHeight,
}) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [navItems, setNavItems] = useState(null);

  useEffect(() => {
    let items = user
      ? navLinks
      : navLinks.filter((item) => item.title !== "Dashboard");
    setNavItems(items);
  }, [user, navLinks]);

  return (
    <div className="group flex items-center sm:hidden">
      <div className="flex items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          width={`${!toggle ? 40 : 30}`}
          height={`${!toggle ? 40 : 30}`}
          objectFit="contain"
          onClick={() => setToggle(!toggle)}
          className="z-[1] cursor-pointer"
        />
      </div>

      <div
        className={`${
          !toggle
            ? "hidden"
            : currentTheme === "dark"
            ? "bg-black-gradient"
            : "bg-themeDarkest"
        } } absolute top-20 left-[5px] my-2 flex min-h-[32rem] w-[98%] rounded-xl p-6
        px-8 transition-all duration-300 ease-in-out`}
      >
        <ul
          className={`mt-5 flex flex-1 list-none flex-col items-start justify-start text-[40px] uppercase`}
        >
          {navItems?.map((nav, index) => (
            <li
              key={nav.id}
              className={`'
	               ${active === nav.title ? "text-white" : "text-dimWhite"} ${
                index === navItems?.length - 1 ? "mb-0" : "mb-4"
              }`}
              onClick={() => {
                setActive(nav.title);              }}
            >
              <NavItem
                {...{
                  toggle,
                  setToggle,
                  path: "phone",
                  user,
                  nav,
                  mounted,
                  theme,
                  setTheme,
                  currentTheme,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhoneMenu;
