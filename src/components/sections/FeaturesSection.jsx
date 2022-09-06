import { useScroll } from "@/src/components/useScroll";
import styles, { layout } from "@/src/styles";
import { reveal, revealRight } from "@/src/utils/Animations";
import { m } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { features } from "../../constants";
import { grow, sectionLeft, staggeredAnimation } from "../../utils/Animations";
import Button from "../ui/Button";
import QuoteModal from "../ui/modals/QuoteModal";
const FeaturesSection = () => {
  const [element, controls] = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const handleMount = setMounted(true);
    return () => handleMount;
  }, []);

  const handleOpen = () => {
    setAnimate(true);
    setTimeout(() => {
      setIsOpen(!isOpen);
      setAnimate(false);
    }, 500);
  };

  return (
    <section
      id="features"
      ref={element}
      className={`relative my-10 flex min-h-screen w-screen flex-col items-center justify-center space-y-10 overflow-hidden px-4  transition-all duration-500 sm:my-0 sm:flex-row sm:px-0`}
    >
      <m.div
        ref={element}
        initial="hidden"
        variants={sectionLeft}
        animate={controls}
        transition={{ duration: 1 }}
        className="w-site flex flex-col sm:flex-row sm:px-14"
      >
        {mounted && currentTheme === "dark" && (
          <>
            <div className="blue__gradient bottom-70 absolute -left-[20%] z-[0] h-[30%] w-[30%] rounded-full" />
            <div className="pink__gradient bottom-70 absolute -right-[30%] z-[0] h-[30%] w-[30%] rounded-full" />
          </>
        )}
        <m.div
          ref={element}
          initial="hidden"
          variants={grow}
          animate={controls}
          transition={{ duration: 1 }}
          className={`${layout.sectionInfo} h-screen w-full transition-all duration-700 sm:mb-0 sm:w-1/2`}
        >
          {/* <h2
            className={`w-full bg-gradient-to-r from-blue-600 via-blue-400  to-cyan-500 bg-clip-text text-[40px] font-semibold leading-[66.8px] text-transparent dark:text-white xs:text-[48px] xs:leading-[76.8px]`}
          > */}
          <h2
            className={`heading-gradient-light w-full text-[40px] font-semibold leading-[66.8px] text-transparent dark:text-white xs:text-[48px] xs:leading-[76.8px]`}
          >
            We are just a <br className="hidden sm:block" />
            phone call away.
          </h2>
          <p
            className={`${styles.paragraph} mt-5 max-w-[470px] transition-all duration-700 dark:text-white`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            vel harum nihil doloribus rerum accusamus in, minus deleniti,
            exercitationem est iusto ut error tempora
          </p>
          <div className="mt-10 flex h-14 w-full items-center justify-center py-4 text-gray-400 dark:text-white sm:mt-5 sm:justify-start">
            <Button {...{ handleOpen, animate, mounted, currentTheme }} />
          </div>
        </m.div>

        <div className={`${layout.sectionImg} mb-10 w-full flex-col sm:w-1/2 space-y-5 sm:space-y-4`}>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              {...feature}
              index={index}
              {...{
                key: feature.id,
                feature,
                index,
                m,
                element,
                controls,
                mounted,
                currentTheme,
              }}
            />
          ))}
        </div>
        <QuoteModal isOpen={isOpen} setIsOpen={setIsOpen} action="hire" />
        <div className="blue__gradient absolute -left-[10%] bottom-0 z-[0] h-[10%] w-[30%] rounded-full opacity-50" />
      </m.div>
    </section>
  );
};

export default FeaturesSection;

const FeatureCard = ({
  icon,
  title,
  content,
  index,
  m,
  element,
  controls,
  mounted,
  currentTheme,
}) => (
  <m.div
    ref={element}
    variants={staggeredAnimation}
    animate={controls}
    transition={{ delay: index * 0.3, duration: 1 }}
    className={`${
      styles.flexCenter
    } group flex-row rounded-[20px] shadow-xl sm:p-8 min-h-[10rem] ${
      index !== features.length - 1 ? "mb-6" : "sm:my-0"
    } ${
      mounted && currentTheme === "dark"
        ? "feature-card"
        : "card-light cursor-pointer rounded-xl border-blue-400 border-opacity-50"
    }  group`}
  >
    <div
      className={`${styles.flexCenter} ${
        mounted && currentTheme === "dark"
          ? "bg-gray-800 bg-opacity-50"
          : "border-2 border-blue-500 border-opacity-30"
      } h-[64px] w-[64px] rounded-full `}
    >
      <span className={`${styles.flexCenter} group-hover:animate-beat`}>
        <Image src={icon} alt="icon" width={35} height={35} />
      </span>
    </div>
    <div className="ml-3 flex flex-1 flex-col group">
      <h4 className="heading-gradient-light group-hover:text-white mb-1 text-[18px] font-semibold leading-[23px] dark:text-white">
        {title}
      </h4>
      <p className="mb-1 text-[16px] font-normal leading-[24px] dark:text-dimWhite">
        {content}
      </p>
    </div>
  </m.div>
);
