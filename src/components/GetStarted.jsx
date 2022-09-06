import { useScroll } from "@/src/components/useScroll";
import styles from "@/src/styles";
import { quote } from "@/src/utils/Animations";
import { m } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import QuoteModal from "./ui/modals/QuoteModal";

const GetStarted = ({ text1, text2, path, setAutoScroll }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [element, controls] = useScroll();
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
      setAnimate(false);
    }, 1000);

    setTimeout(() => {
      setIsOpen(!isOpen);
      path === "hero" && setAutoScroll(false);
    }, 1500);
  };

  return (
    <div
      ref={element}
      initial="hidden"
      variants={quote}
      animate={controls}
      className={`${styles.flexCenter} ${
        mounted && currentTheme === "dark"
          ? "bg-themeLight bg-opacity-90 bg-contain"
          : "bg-quote-bg-light bg-contain"
      } group relative z-[14] h-[105px] w-[105px] cursor-pointer rounded-full p-[2px]`}
      onClick={handleOpen}
    >
      <div
        className={`${styles.flexCenter}
         flex-col rounded-full transition-all duration-300
         ${
           mounted && currentTheme === "dark"
             ? "bg-primary"
             : path === "hero"
             ? "bg-transparent"
             : "button-gradient-dark"
         }
        ${
          animate
            ? "h-[91%] w-[91%] animate-button ease-linear"
            : "h-[95%] w-[95%]"
        }
        `}
      >
        <button
          className={`${styles.flexStart} relative cursor-pointer flex-row group-hover:animate-pulse`}
        >
          <ButtonText
            {...{
              mounted,
              currentTheme,
              text: text1 || "Get",
              path,
              animate,
            }}
          />
          <span
            className={`absolute group-hover:animate-pulse ${
              animate ? "right-3 top-2 scale-50 opacity-20" : "-right-5 -top-4"
            } transition-all duration-300`}
          >
            <ArrowUp {...{ mounted, currentTheme, path }} />
          </span>
        </button>
        <ButtonText
          {...{
            mounted,
            currentTheme,
            text: text2 || "Quote",
            path,
            animate,
          }}
        />
      </div>
      {path !== "about" && (
        <QuoteModal
          {...{
            path,
            isOpen,
            setIsOpen,
            setAnimate,
            action: "quote",
            setAutoScroll,
          }}
        />
      )}
    </div>
  );
};

export default GetStarted;

const ButtonText = ({ text, mounted, currentTheme, path, animate }) => {
  return (
    <p
      className={`${
        path === "about"
          ? animate
            ? "text-[10px]"
            : "text-[16px]"
          : animate
          ? "text-[14px]"
          : "text-[16px]"
      }
      ${mounted && currentTheme === "dark" ? "text-white" : "text-white"}
   leading-[20px] transition-all duration-300`}
    >
      <span
        className={`font-semibold tracking-wider transition-all duration-200 `}
      >
        {text}
      </span>
    </p>
  );
};

const ArrowUp = ({ mounted, currentTheme, path }) => {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      strokeWidth={0.1}
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        mounted && currentTheme === "dark"
          ? "white"
          : path === "hero"
          ? "white"
          : "text-gray-400"
      }`}
    >
      <path
        d="M4.98978 15.2615C4.75588 14.9828 4.76972 14.5786 5.00787 14.3167L5.07837 14.2489L16.0903 5.00887C16.3943 4.75371 16.8477 4.79338 17.1029 5.09746C17.3367 5.37621 17.3229 5.78038 17.0848 6.04234L17.0143 6.11006L6.00238 15.3501C5.69829 15.6053 5.24494 15.5656 4.98978 15.2615Z"
        fill={`${
          mounted && currentTheme === "dark"
            ? "white"
            : path === "hero"
            ? "white"
            : "white"
        }`}
        stroke={`${
          mounted && currentTheme === "dark"
            ? "white"
            : path === "hero"
            ? "white"
            : "white"
        }`}
      />
      <path
        d="M8.33877 5.57975C7.94325 5.546 7.64998 5.19801 7.68372 4.8025C7.7144 4.44294 8.00478 4.16787 8.35448 4.14619L8.46097 4.14745L16.6132 4.843C16.9739 4.87377 17.2493 5.16571 17.2697 5.51648L17.268 5.62327L16.538 13.7732C16.5026 14.1686 16.1534 14.4604 15.758 14.425C15.3986 14.3928 15.1247 14.1012 15.1045 13.7514L15.1062 13.645L15.7714 6.21386L8.33877 5.57975Z"
        fill={`${
          mounted && currentTheme === "dark"
            ? "white"
            : path === "hero"
            ? "white"
            : "white"
        }`}
        stroke={`${
          mounted && currentTheme === "dark"
            ? "white"
            : path === "hero"
            ? "white"
            : "white"
        }`}
      />
    </svg>
  );
};
