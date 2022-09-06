import { useScroll } from "@/src/components/useScroll";
import { m } from "framer-motion";
import { useTheme } from "next-themes";
import { useContext, useEffect, useState } from "react";
import { PaintitContext } from "../../store/PaintitContext";
import styles from "../../styles";
import { heroImage, heroText } from "../../utils/Animations";
import GetStarted from "../GetStarted";
import PaintAnimation from "../PaintAnimation";
import Slider from "../Slider";
import YoutubeButton from "../YoutubeButton";

const Hero = () => {
  const { windowHeight } = useContext(PaintitContext);
  const [element, controls] = useScroll();
  const [showPaintit, setShowPaintit] = useState(true);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const handleMount = setMounted(true);
    return () => handleMount;
  }, []);

  useEffect(() => {
    const handlePaintit = setTimeout(() => {
      setShowPaintit(false);
    }, 3000);
    return () => handlePaintit;
  }, []);

  return (
    <section
      ref={element}
      id="home"
      className={`no-scrollbar relative mb-5 flex min-h-screen w-screen  flex-col overflow-x-hidden md:snap-center md:flex-row`}
    >
      <m.div
        // id="hero"
        // ref={element}
        // initial="hidden"
        // variants={heroImage}
        // animate={controls}
        transition={{ duration: 0.5 }}
        className={`${
          styles.flexCenter
        } min-h-screen  w-screen flex-col bg-cover bg-center bg-blend-multiply sm:flex-row ${
          mounted && currentTheme === "dark"
            ? "bg-hero-dark bg-blend-multiply"
            : "bg-hero-light bg-blend-multiply"
        } `}
      >
        {showPaintit && windowHeight <= 500 ? (
          <div className={`${styles.flexCenter} h-screen w-screen`}>
            <PaintAnimation path="home" />
          </div>
        ) : (
          <div className="mt-7 flex items-center justify-center">
            <Slider />
          </div>
        )}
      </m.div>
    </section>
  );
};

export default Hero;

const HeroInfo = ({ currentTheme, m, element, heroText, controls }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center sm:flex-row">
      <div className="flex w-full flex-col">
        <Heading
          {...{
            currentTheme,
            m,
            element,
            heroText,
            controls,
          }}
        />

        <m.p
          ref={element}
          initial="hidden"
          variants={heroText}
          animate={controls}
          transition={{ duration: 1 }}
          className={`${
            currentTheme === "dark"
              ? `${styles.paragraph} bg-primary`
              : "bg-gray-400 text-white"
          } mt-5 max-w-[470px] rounded-lg bg-opacity-30 px-3 py-2 hover:bg-opacity-70`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, harum
          maiores. Ab, molestias suscipit? Quam itaque aperiam nemo impedit
          eligendi hic. Unde blanditiis iste minima consequatur nulla eos,
          architecto accusamus!
        </m.p>
      </div>
    </div>
  );
};

const Heading = ({ currentTheme, m, element, heroText, controls }) => {
  return (
    <m.div
      ref={element}
      initial="hidden"
      variants={heroText}
      animate={controls}
      transition={{ duration: 1, delay: 1 }}
      className="w-full px-2"
    >
      <h1 className="font-poppins text-[52px] font-semibold leading-[75px] tracking-wider text-white ss:text-[68px] ss:leading-[100.8px]">
        The Next <br className="hidden sm:block" />
        {currentTheme === "dark" ? (
          <span className="text-gradient-dark">Generation</span>
        ) : (
          <span className="text-gradient-light">Generation</span>
        )}
      </h1>
      <h1 className="w-full font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[68px] ss:leading-[100.8px]">
        Roofing Service.
      </h1>
    </m.div>
  );
};

const HeroItems = ({ m, element, mounted, currentTheme }) => {
  return (
    <m.div
      ref={element}
      transition={{ duration: 1 }}
      className="w-site absolute z-[2] my-auto flex h-[80%] flex-col self-center rounded-lg shadow-2xl sm:flex-row"
    >
      {/* <div className="hidden flex-col items-end justify-end sm:flex sm:w-full">
        <div className="relative z-[12] flex w-1/2 flex-col items-center justify-center space-y-10 px-12 py-8">
          <GetStarted {...{ mounted, currentTheme, path: "hero" }} />
          <YoutubeButton
            {...{
              currentTheme,
              mounted,
              path: "hero",
            }}
          />
        </div>
      </div> */}
    </m.div>
  );
};
