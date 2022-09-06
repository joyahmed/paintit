import Divider from "@/src/components/Divider";
import { useScroll } from "@/src/components/useScroll";
import YoutubeButton from "@/src/components/YoutubeButton";
import { aboutList, aboutStaffs } from "@/src/constants";
import { aboutLeft, pageInfo, sectionRight } from "@/src/utils/Animations";
import { m } from "framer-motion";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { aboutOne, aboutTwo } from "../assets";
import Banner from "../components/Banner";
import PageBackground from "../components/page/PageBackground";
import TeamMembers from "../components/TeamMembers";
import TickMark from "../components/TickMark";
import Button from "../components/ui/Button";
import { awards } from "../constants";
import { PaintitContext } from "../store/PaintitContext";
import styles from "../styles";

const Features = () => {
  const { windowHeight } = useContext(PaintitContext);
  const [animate, setAnimate] = useState(false);
  const [element, controls] = useScroll();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const handleMount = setMounted(true);
    return () => handleMount;
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div
        ref={element}
        className={`relative flex w-screen flex-col items-start justify-center overflow-hidden sm:h-auto `}
      >
        <Head>
          <title>PaintIt-About</title>
          <meta name="description" content="Web app for paintIt companies" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageBackground
          {...{
            background: "bg-header",
            mounted,
            currentTheme,
            text1: "About",
            text2: "PaintIt",
          }}
        />
        <m.div
          ref={element}
          initial="hidden"
          variants={sectionRight}
          animate={controls}
          transition={{ duration: 1 }}
          className={`${styles.flexCenter} mb-20 w-screen`}
        >
          <div
            className={`${styles.flexCenter} w-site mt-10 flex-col-reverse  px-2 sm:flex-row sm:px-0`}
          >
            <m.div
              ref={element}
              initial="hidden"
              // variants={aboutLeft}
              animate={controls}
              className="mt-10 flex w-full items-center justify-center sm:w-1/2"
            >
              <m.div className={`${styles.flexCenter} relative w-full`}>
                <div className="z-[0] hidden items-center justify-center sm:absolute sm:flex">
                  <Circle />
                </div>
                <div className="-top-[12.5rem] left-[5rem] z-[2] h-[25rem] w-[5rem] overflow-hidden rounded-lg sm:absolute sm:h-[18rem] sm:w-[18rem]">
                  <ImageComponent image={aboutOne} />
                </div>
                <div className="-bottom-[12.5rem] right-[5rem] z-[1] h-[25rem] w-[5rem] overflow-hidden rounded-lg hover:z-[2] xs:hidden sm:absolute sm:flex sm:h-[18rem] sm:w-[18rem]">
                  <ImageComponent image={aboutTwo} />
                </div>
              </m.div>
            </m.div>

            <div
              className={`${styles.flexCenter} w-full flex-col space-y-6 px-6 dark:text-white sm:mt-0 sm:w-1/2`}
            >
              <m.div
                ref={element}
                variants={pageInfo}
                animate={controls}
                transition={{ duration: 1, delay: 1 }}
                className="leading-1 text-[15px] md:w-full"
              >
                <h1 className={`${styles.heading2} mb-3`}>
                  PaintIt - exceptional painting services
                </h1>
                <p className="text-sm leading-6 dark:text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iusto labore consequuntur enim numquam provident accusamus
                  voluptate recusandae cum. Perferendis sunt nostrum iste dolor
                  corrupti, similique voluptates reiciendis sed hic dolore
                  provident sint deserunt itaque ad molestias quibusdam!
                </p>
              </m.div>
              <p className={`${styles.flexStart} w-full flex-col`}>
                {aboutList.map((item, index) => (
                  <span
                    className="flex items-center justify-center text-[13px] leading-6"
                    key={index}
                  >
                    <span className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-themeDarkest dark:bg-gray-800 dark:bg-opacity-5">
                      <TickMark style="h-[11px] w-[11px] rotate-[10deg]" />
                    </span>
                    <span className="dark:text-white"> {item}</span>
                  </span>
                ))}
              </p>
              <div className="flex w-full items-start">
                <Link href="/">
                  <a>
                    <Button
                      {...{
                        path: "about",
                        animate,
                        text: "Discover More",
                        mounted,
                        currentTheme,
                      }}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </m.div>
      </div>

      <div
        className={`${styles.flexCenter} mb-16 mt-40 h-full w-screen flex-col space-y-10 dark:text-white sm:mt-10 sm:px-0`}
      >
        <h1 className="heading-gradient-light text-center text-[17px] font-semibold leading-[1] dark:text-white sm:text-left">
          We are certified and award winning roofing contractors
        </h1>
        <div
          className={`${styles.flexCenter} no-scrollbar w-full flex-row space-x-4 overflow-scroll px-4 sm:w-3/5 sm:space-x-0`}
        >
          {awards.map((award, index) => (
            <div key={index} className={`${styles.flexCenter} w-1/4`}>
              <Image
                src={award}
                alt="award"
                width={150}
                height={100}
                className="rounded-md shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      <Banner />
      <TeamMembers />
      <Divider />
    </>
  );
};

export default Features;

const ImageComponent = ({ image }) => {
  return (
    <Image
      src={image}
      alt="about"
      // width={350}
      // height={300}
      layout="fill"
      objectFit="cover"
      className="rounded-lg hover:scale-110 hover:rounded-lg"
    />
  );
};

const Circle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 560 560"
      fill="#1F4690"
      strokeWidth="1"
      className="h-[25rem] w-[25rem]"
    >
      <path
        d="M280 90C323.958 89.9999 366.555 105.241 400.535 133.128C434.515 161.014 457.774 199.819 466.35 242.932C474.925 286.045 468.287 330.798 447.566 369.565C426.845 408.332 393.322 438.715 352.711 455.537C312.099 472.359 266.912 474.579 224.847 461.819C182.782 449.059 146.443 422.108 122.022 385.559C97.6 349.009 86.6069 305.123 90.9154 261.377C95.2239 217.631 114.567 176.733 145.65 145.65C163.252 127.951 184.189 113.92 207.251 104.367C230.312 94.8149 255.039 89.9316 280 90ZM280 0C125.36 0 0 125.36 0 280C0 434.64 125.36 560 280 560C434.64 560 560 434.64 560 280C560 125.36 434.64 0 280 0Z"
        fill="#1F4690"
      />
    </svg>
  );
};

const Phone = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#73cdd7"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      // stroke='currentColor'
      className="paintItColor h-7 w-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
};
