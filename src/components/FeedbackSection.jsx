import { useScroll } from "@/src/components/useScroll";
import { feedback } from "@/src/constants";
import { m } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { quotes } from "../assets";
import styles from "../styles";
import { rightLeftRotate, sectionLeft } from "../utils/Animations";

const FeedbackSection = () => {
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
      className={`${styles.flexCenter} relative z-[1] my-10 w-screen md:h-screen md:snap-center`}
    >
      <m.div
        ref={element}
        initial="hidden"
        variants={sectionLeft}
        animate={controls}
        transition={{ duration: 1 }}
        className="w-site flex flex-wrap items-center justify-center sm:flex-row"
      >
        {feedback.map((card) => (
          <m.div
            key={card.id}
            ref={element}
            initial="hidden"
            variants={rightLeftRotate}
            animate={controls}
            transition={{ duration: 2, delay: 3 }}
            className={`${styles.flexCenter} w-full px-2 py-2 ss:w-1/2 md:w-1/3`}
          >
            <div
              className={`flex flex-col border-2 ${
                mounted && currentTheme === "dark"
                  ? "feedback-card border-blue-400 border-opacity-50"
                  : "card-light border-blue-400 border-opacity-30"
              } items-center justify-between rounded-[20px] p-6 ss:h-[22rem] hover:border-0`}
            >
              <Image src={quotes} alt="double_quotes" width={30} height={20} />
              <p className="font-poppins my-10 w-full text-[18px] font-normal leading-[32.4px] dark:text-white">
                {card.content}
              </p>

              <div className="flex w-full flex-row items-center justify-start">
                <Image
                  src={card.img}
                  alt={card.name}
                  width={70}
                  height={70}
                  className="rounded-full"
                />
                <div className="ml-4 flex flex-col">
                  <h4 className="font-poppins text-[20px] font-semibold leading-[32px] dark:text-white">
                    {card.name}
                  </h4>
                  <p className="font-poppins text-[16px] font-normal leading-[24px] dark:text-dimWhite">
                    {card.title}
                  </p>
                </div>
              </div>
            </div>
          </m.div>
        ))}
      </m.div>
    </div>
  );
};

export default FeedbackSection;
