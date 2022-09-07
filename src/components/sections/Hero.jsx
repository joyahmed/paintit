import { useScroll } from "@/src/components/useScroll";
import { m } from "framer-motion";
import { useTheme } from "next-themes";
import { useContext, useEffect, useState } from "react";
import { PaintitContext } from "../../store/PaintitContext";
import styles from "../../styles";
import { heroImage } from "../../utils/Animations";
import PaintAnimation from "../PaintAnimation";
import Slider from "../Slider";

const Hero = () => {
  const { windowHeight } = useContext(PaintitContext);
  const [element, controls] = useScroll();
  const [showPaintit, setShowPaintit] = useState(true);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const handleLoading = setTimeout(() => setLoading(false), 500);
    return () => handleLoading;
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-50 dark:bg-primary">
        <div className="dark:bg-border-gray-200 animate-loader h-10 w-10 rounded-full border-b-2 border-gray-300"></div>
      </div>
    );
  }

  return (
    <section
      ref={element}
      id="home"
      className={`no-scrollbar relative mb-5 flex min-h-screen w-screen  flex-col overflow-x-hidden md:snap-center md:flex-row`}
    >
      <m.div
        id="hero"
        ref={element}
        initial="hidden"
        variants={heroImage}
        animate={controls}
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
