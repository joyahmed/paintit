import QuoteModal from "@/src/components/ui/modals/QuoteModal";
import { useScroll } from "@/src/components/useScroll";
import styles from "@/src/styles";
import { ctaAnimation } from "@/src/utils/Animations";
import { m } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { sectionLeft } from "../../utils/Animations";
import Button from "../ui/Button";

const CtaSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const handleMount = setMounted(true);
    return () => handleMount;
  }, []);

  const [element, controls] = useScroll();

  const handleOpen = () => {
    setAnimate(true);
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 1300);
  };

  return (
    <section
      id="hire"
      ref={element}
      className={`${styles.flexCenter} w-screen mb-20 sm:mb-0 md:min-h-screen md:snap-center`}
    >
      <m.div
        ref={element}
        initial="hidden"
        variants={sectionLeft}
        animate={controls}
        transition={{ duration: 1 }}
        className="flex w-full sm:w-4/5 items-center justify-center"
      >
        <m.div
          ref={element}
          initial="hidden"
          variants={ctaAnimation}
          animate={controls}
          transition={{ duration: 2 }}
          className={`${
            mounted && currentTheme === "dark"
              ? "feedback-card border-opacity-50"
              : "card-light border-opacity-40"
          } box-shadow flex w-[90%] flex-col rounded-[20px] border-2 border-blue-400 px-6 py-7 hover:border-opacity-10 sm:flex-row xl:w-[60%] group`}
        >
          <div className="flex flex-col">
            <h2 className={styles.heading2}>Let’s try our service now!</h2>
            <p className={`${styles.paragraph} mt-5 max-w-[500px]`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              omnis dignissimos tempora iure, cumque aliquam animi fugit nostrum
              voluptatum culpa.
            </p>
          </div>

          <div
            className={`${styles.flexCenter} ml-0 mt-10 sm:mt-0 sm:ml-20 sm:w-1/4`}
          >
            <Button {...{ handleOpen, animate, currentTheme, mounted }} />
          </div>
        </m.div>
      </m.div>
      <QuoteModal isOpen={isOpen} setIsOpen={setIsOpen} action="hire" />
    </section>
  );
};

export default CtaSection;
