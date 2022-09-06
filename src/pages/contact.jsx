import ContactForm from "@/src/components/ui/forms/ContactForm";
import { useScroll } from "@/src/components/useScroll";
import { contactItems } from "@/src/constants";
import styles from "@/src/styles";
import { m } from "framer-motion";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Divider from "../components/Divider";
import PageBackground from "../components/page/PageBackground";

const Contact = () => {
  const [element, controls] = useScroll();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  const NoSsrMap = useMemo(
    () =>
      dynamic(() => import("../components/MapComponent"), {
        loading: () => <p>Loading</p>,
        ssr: false,
      }),
    []
  );

  useEffect(() => {
    const handleMount = setMounted(true);
    return () => handleMount;
  }, []);

  return (
    <>
      <div
        ref={element}
        className={`relative min-h-screen w-screen flex-wrap items-start justify-center`}
      >
        <Head>
          <title>PaintIt-Contact</title>
          <meta name="description" content="Web app for Paintit companies" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageBackground
          {...{
            background: "bg-header",
            mounted,
            currentTheme,
            text1: "Contact",
            text2: "PaintIt",
          }}
        />

        <div className="my-10 flex h-auto w-screen items-center justify-center ">
          <div className="w-site my-10 flex min-h-[10rem] flex-col items-center justify-center gap-4 font-inter text-lg dark:text-white sm:flex-row">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className={`flex h-[10rem] w-full flex-col items-center justify-between rounded-md py-5 shadow-xl sm:w-1/3 ${
                  index === contactItems?.length - 1
                    ? "border-opacity-0"
                    : "border-blue-400 border-opacity-40 dark:border-blue-400 dark:border-opacity-40 sm:border-r-[1px]"
                }`}
              >
                <div className="transitoin-all flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-themeDarker duration-300 ease-in-out hover:scale-110 dark:bg-gray-800 dark:bg-opacity-50">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                    className=""
                  />
                </div>
                <div className="heading-gradient-light flex flex-col items-center justify-center text-[15px] font-semibold tracking-wide dark:text-white">
                  <span>{item.one}</span>
                  <span>{item.two}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-10 flex h-auto w-screen items-center justify-center">
          <p className="leading-[32px heading-gradient-light w-full text-center text-2xl font-semibold dark:text-white">
            We are eagerly waiting to hear from you
          </p>
        </div>

        <div
          ref={element}
          className={`${styles.flexCenter} w-full flex-col md:flex-row  md:space-x-6`}
        >
          <m.div
            ref={element}
            initial="hidden"
            // variants={contactFormAnimation}
            animate={controls}
            className={`${styles.flexCenter} my-10 w-full rounded-lg border-2 border-blue-400 border-opacity-0 py-2 px-2 shadow-xl dark:border-opacity-10 dark:bg-primary sm:w-2/3 md:mt-0`}
          >
            <ContactForm {...{ mounted, currentTheme }} />
          </m.div>
        </div>

        <div
          ref={element}
          className={`${styles.flexCenter} w-full flex-col md:flex-row `}
        >
          <m.div
            ref={element}
            initial="hidden"
            // variants={contactFormAnimation}
            animate={controls}
            className={`${styles.flexCenter} w-full rounded-lg border-blue-400 border-opacity-0 shadow-xl dark:border-opacity-10 dark:bg-primary md:mt-0`}
          >
            <NoSsrMap />
          </m.div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Contact;
