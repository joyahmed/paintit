import { useScroll } from "@/src/components/useScroll";
import { paintitServices } from "@/src/constants";
import styles from "@/src/styles";
import { m } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { sectionLeft, servicesItemsAnimation } from "../utils/Animations";

const ServicesItems = ({ path }) => {
  const [element, controls] = useScroll();
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const handleMount = setMounted(true);
    return () => handleMount;
  }, []);

  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod neque reprehenderit necessitatibus.";
  return (
    <div
      ref={element}
      className={`${
        styles.flexCenter
      } w-site relative h-auto sm:min-h-screen px-2  sm:px-0 ${
        path === "page" ? "" : "px-2"
      }`}
    >
      <m.div
        ref={element}
        initial="hidden"
        variants={sectionLeft}
        animate={controls}
        transition={{ duration: 1 }}
        className="w-site flex flex-wrap min-h-screen"
      >
        {paintitServices.map((item) => (
          <div
            key={item.title}
            className={`${styles.flexCenter} w-full flex-col sm:w-1/2 `}
          >
            <m.div
              // ref={element}
              // initial="hidden"
              // variants={servicesItemsAnimation}
              // animate={controls}
              className={`${
                mounted && currentTheme === "dark"
                  ? "feedback-card"
                  : "card-light"
              } group my-10 rounded-lg bg-blue-200 bg-opacity-30 px-5 py-5  dark:bg-gray-900 dark:bg-opacity-30 sm:mx-10`}
            >
              <div className="flex items-center justify-start px-4 sm:w-[100%] ">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={`${path === "page" ? 100 : 100}`}
                  height={`${path === "page" ? 100 : 100}`}
                />
                <div className="relative flex xs:hidden sm:h-[3rem] sm:w-[3rem]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h1 className="ease heading-gradient-light ml-5 font-semibold transition-all duration-200 group-hover:text-white dark:text-white xl:text-lg xl:font-bold">
                  {item.title}
                </h1>
              </div>
              <p className="md:text-md ease mt-5 transition-all duration-200 dark:text-white xl:text-lg">
                {description}
              </p>
            </m.div>
          </div>
        ))}
      </m.div>
    </div>
  );
};

export default ServicesItems;
