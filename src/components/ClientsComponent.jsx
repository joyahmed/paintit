import { useScroll } from "@/src/components/useScroll";
import { clients } from "@/src/constants";
import { staggeredClients } from "@/src/utils/Animations";
import { m } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles";
import { sectionLeft } from "../utils/Animations";

const ClientsComponent = ({ path }) => {
  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(null);
  const [element, controls] = useScroll();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const handleMount = setMounted(true);
    return () => handleMount;
  }, []);

  return (
    <div
      ref={element}
      className={`flex w-full flex-wrap items-center justify-center md:min-h-screen md:snap-center`}
    >
      <m.div
        ref={element}
        initial="hidden"
        variants={sectionLeft}
        animate={controls}
        transtiona={{ duration: 2 }}
        className="w-site flex flex-col sm:flex-row"
      >
        {clients.map((client, itemIndex) => (
          <m.div
            ref={element}
            variants={staggeredClients}
            animate={controls}
            transition={{
              duration: itemIndex === 0 ? 1 : itemIndex * 0.9,
            }}
            onMouseEnter={() => {
              setIndex(itemIndex);
              setHovered(true);
            }}
            onMouseLeave={() => setHovered(false)}
            key={client.id}
            className={`${
              path === "hero"
                ? ` mx-2 flex w-auto`
                : `flex-1 ${styles.flexCenter} m-5 h-24 rounded-lg px-2 py-2 ${
                    hovered && index === itemIndex && currentTheme === "dark"
                      ? "hover:border-opacity-50"
                      : "hover:border-opacity-20"
                  }`
            } group border-2 border-blue-400 border-opacity-40 shadow-xl dark:border-opacity-50`}
          >
            <Image
              src={client.logo}
              alt="client_logo"
              width={200}
              height={200}
              objectFit="contain"
              className="group-hover:scale-105"
            />
          </m.div>
        ))}
      </m.div>
    </div>
  );
};

export default ClientsComponent;
