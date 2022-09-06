import { useScroll } from "@/src/components/useScroll";
import { m } from "framer-motion";
import { useTheme } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Divider from "../components/Divider";
import PageBackground from "../components/page/PageBackground";
import ServicesItems from "../components/ServicesItems";
import HeadingComponent from "../components/ui/HeadingComponent";
import styles from "../styles";
import { pageInfo, sectionLeft, servicesItems } from "../utils/Animations";

const Services = () => {
  const [element, controls] = useScroll();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const handleMount = setMounted(true);
    return () => handleMount;
  }, []);

  const text = `We have a "measure twice, cut once" phylosophy and have a knack for the details.\nUsing High Grade roofing materials and regurlaly participating in certification classes\nensures our work is always of the HIGHEST QUALITY
  `;

  return (
    <>
      <div
        ref={element}
        className={`relative flex min-h-screen w-screen flex-col items-start justify-center`}
      >
        <Head>
          <title>Paintit-Services</title>
          <meta name="description" content="Web app for roofer companies" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageBackground
          {...{ background: "bg-header", text1: "Our", text2: "Services" }}
        />
        <m.div
          ref={element}
          initial="hidden"
          variants={sectionLeft}
          animate={controls}
          transition={{ duration: 1 }}
          className={`${styles.flexCenter} min-h-screen w-full flex-col `}
        >
          <m.div
            ref={element}
            variants={pageInfo}
            animate={controls}
            transition={{ duration: 1, delay: 1 }}
            className="flex w-screen flex-col items-center justify-center rounded-md px-8 pt-10 dark:bg-primary sm:px-0"
          >
            <p className="font-medium w-full text-[18px] leading-[32px] dark:text-white sm:w-2/3 md:whitespace-pre md:text-center">
              {text}
            </p>
          </m.div>
          <div className="w-site mb-10 flex min-h-screen items-center justify-center">
            {mounted && <ServicesItems {...{ servicesItems, path: "page" }} />}
          </div>
        </m.div>
      </div>

      <Banner />
      <Divider />
    </>
  );
};

export default Services;
