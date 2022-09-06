import { useScroll } from "@/src/components/useScroll";
import { heroSlider } from "@/src/constants";
import { m, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { slideFromBottom, slideFromTop } from "../utils/Animations";
import GetStarted from "./GetStarted";
import YoutubeButton from "./YoutubeButton";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [element, controls] = useScroll();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    const handleMount = setMounted(true);
    return () => handleMount;
  }, []);

  let slideInterval;
  let intervalTime = 6000;

  const autoSlide = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  const length = 4;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    if (autoScroll === true) {
      autoSlide();
    }
    return () => {
      clearInterval(slideInterval);
    };
    //eslint-disable-next-line
  }, [current]);

  useEffect(() => {
    setCurrent(0);
  }, []);

  const handleOpen = () => {
    setTimeout(() => {
      setAutoScroll(!autoScroll);
    }, 1500);
  };

  return (
    <>
      {heroSlider.map(
        (slide, index) =>
          index === current && (
            <div
              key={index}
              className={`relative flex h-screen w-screen flex-row items-center justify-between overflow-hidden
            `}
            >
              <div
                className={`absolute flex h-full w-screen ${
                  autoScroll && "animate-slider"
                } items-center justify-center
              bg-gray-900 bg-opacity-70 bg-blend-hard-light duration-1000 ease-in-out dark:bg-opacity-70 dark:bg-blend-multiply
               `}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundBlendMode: "multiply",
                }}
              ></div>

              <div className="absolute flex h-screen w-screen items-center justify-center self-center shadow-xl">
                <div className="w-site flex h-[80%] shadow-xl"></div>
              </div>

              <div className="flex h-screen w-screen items-center justify-center">
                <div className="w-site flex h-screen items-center justify-center">
                  <ContentLeft
                    {...{
                      slide,
                      mounted,
                      currentTheme,
                    }}
                  />

                  <div
                    className="mt-12 hidden flex-col items-start justify-center -space-y-1 self-center sm:flex sm:w-1/6"
                    onClick={handleOpen}
                  >
                    <GetStarted {...{ path: "hero", setAutoScroll }} />

                    <div className="-ml-12">
                      <YoutubeButton {...{ path: "hero", setAutoScroll }} />
                    </div>
                  </div>
                  <div className="flex w-1/6 flex-col justify-center space-y-5 px-6 sm:items-end xl:items-center">
                    <SliderButton
                      className=" mb-5"
                      icon={<ChevronLeft key={index + 1} />}
                      onClick={prevSlide}
                    />

                    <SliderButton
                      className=""
                      icon={<ChevronRight key={index - 1} />}
                      onClick={nextSlide}
                    />
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default Slider;

const ContentLeft = ({ slide, currentTheme }) => {
  return (
    <div className="z-[10] flex w-full flex-col items-center justify-center p-3 sm:w-4/6 sm:flex-row sm:p-6">
      <div
        className={`my-auto flex w-full flex-col items-start justify-start text-left sm:pl-4 xl:pl-20
      `}
      >
        <div className="animate-slider-top-text">
          <h3 className={`text-[22px] font-bold text-themeLight`}>
            {slide.text1}
          </h3>
          <h1
            className={`text-gradient-dark mt-4
            mb-5 h-full text-[50px] font-bold
            leading-[60px] ss:text-[68px] ss:leading-[85px] sm:mb-6
           sm:whitespace-pre-line`}
          >
            {slide.text2}
          </h1>
        </div>
        <div className="animate-slider-bottom-text">
          <h2
            className={`mb-5 text-[20px] text-white dark:text-gray-400 sm:whitespace-pre-line`}
          >
            {slide.text3}
          </h2>
          <Link href="/">
            <a>
              <button
                className={`${
                  currentTheme === "dark"
                    ? "bg-primary bg-opacity-80"
                    : "bg-themeDarkest bg-opacity-80"
                } z-[15] flex cursor-pointer items-center justify-center rounded-md px-7 py-4 text-sm font-bold tracking-widest text-white transition-all duration-300 hover:scale-105`}
              >
                Discover More
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const SliderButton = ({ icon, onClick }) => {
  return (
    <span
      className={`z-[14] flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center rounded-full border-2 border-gray-200 border-opacity-10 bg-gray-900 bg-opacity-10 shadow-xl transition-all duration-300 ease-in hover:animate-pulse hover:border-opacity-20 sm:h-[2.5rem] sm:w-[2.5rem]`}
      onClick={onClick}
    >
      {icon}
    </span>
  );
};

const ChevronLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`z-2 h-5 w-5 cursor-pointer sm:h-5 sm:w-5 `}
      fill="none"
      viewBox="0 0 24 24"
      stroke="rgba(255,255,255, 0.5)"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
};

const ChevronRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`z-2 h-5 w-5 cursor-pointer sm:h-5 sm:w-5 `}
      fill="none"
      viewBox="0 0 24 24"
      stroke="rgba(255,255,255, 0.5)"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
};
