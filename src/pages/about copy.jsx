import Divider from "@/src/components/Divider";
import { useScroll } from "@/src/components/useScroll";
import { phoneCall } from "@/src/utils/Animations";
import { m } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { repairingOne } from "../assets";
import GetStarted from "../components/GetStarted";
import PageBackground from "../components/page/PageBackground";
import HeadingComponent from "../components/ui/HeadingComponent";
import styles from "../styles";
import { pageInfo, sectionRight } from "../utils/Animations";

const Features = () => {
  const [animate, setAnimate] = useState(false);
  const [element, controls] = useScroll();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const handleMount = setMounted(true);
    return () => handleMount;
  }, []);

  const handleCall = () => {
    setTimeout(() => {
      setAnimate(true);
    }, 1500);
    setTimeout(() => {
      setAnimate(false);
    }, 5000);
  };

  return (
    <>
      <div
        ref={element}
        className={`relative flex min-h-screen w-screen flex-col  items-start justify-center`}
      >
        <PageBackground
          {...{ background: "bg-contact", text1: "About", text2: "Roofer" }}
        />
        <m.div
          ref={element}
          initial="hidden"
          variants={sectionRight}
          animate={controls}
          transition={{ duration: 1 }}
          className={`${styles.flexCenter} w-full flex-col`}
        >
          <m.h1
            ref={element}
            variants={pageInfo}
            animate={controls}
            transition={{ duration: 1, delay: 1 }}
            className={`mb-20 text-[50px] font-bold tracking-wider`}
          >
            {/* <HeadingComponent
              {...{ mounted, currentTheme, text1: "About", text2: "Roofer" }}
            /> */}
          </m.h1>

          <div className={`${styles.flexCenter} w-full flex-col md:flex-row`}>
            <div className={`${styles.flexCenter} h-full w-full rounded-lg`}>
              <Image
                src={repairingOne}
                alt="repairing"
                width={500}
                height={300}
                objectFit="cover"
                className="rounded-lg hover:scale-150 "
              />
            </div>
            <div
              className={`${styles.flexCenter} mt-10 w-full flex-col ss:px-24 sm:mt-0`}
            >
              <m.p
                ref={element}
                variants={pageInfo}
                animate={controls}
                transition={{ duration: 1, delay: 1 }}
                className="leading-1 text-[18px] ss:mt-10 md:w-full"
              >
                We are a family owned and operated residential roofing company
                located in Toronto, Ontario, Canada. We strive to do quality
                work that is built to last. A+ rated with BBB and 5 star rating
                with GOOGLE and ANG!!
              </m.p>
              <div
                className="relative my-10 flex h-24 items-center justify-between"
                onClick={handleCall}
              >
                <GetStarted
                  {...{
                    mounted,
                    currentTheme,
                    text1: "Call",
                    text2: "Now",
                    path: "about",
                  }}
                />

                <p
                  className={`${
                    animate
                      ? "scale-1 opacity-1 absolute top-[15%] -right-[19%] animate-wiggle transition-all duration-300 sm:-top-[15%] sm:-right-[15%]"
                      : "absolute -top-[5%] -right-[6%] scale-0 opacity-0 "
                  } `}
                >
                  <Phone />
                </p>
              </div>
            </div>
          </div>
        </m.div>
      </div>
      <Divider />
    </>
  );
};

export default Features;

const Phone = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#73cdd7"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      // stroke='currentColor'
      className="rooferColor h-7 w-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
};
