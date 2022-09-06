import Image from "next/image";
import Link from "next/link";

const NavLogo = ({
  path,
  dark,
  logoWhite,
  logoYellowCyan,
  currentTheme,
  windowHeight,
}) => {
  return (
    <Link href="/">
      <a className="group z-[7] flex">
        <Image
          src={`${
            currentTheme === "dark"
              ? dark
                ? logoWhite
                : logoYellowCyan
              : path === "/"
              ? dark
                ? logoWhite
                : logoYellowCyan
              : logoWhite
          }`}
          width={`${windowHeight > 50 ? 70 : 80}`}
          height={`${windowHeight > 50 ? 70 : 80}`}
          alt="paintIt"
          loading="lazy"
          objectFit="contain"
          className="z-[7] transition-all duration-200 ease-in-out group-hover:scale-[106%]"
        />
      </a>
    </Link>
  );
};

export default NavLogo;
