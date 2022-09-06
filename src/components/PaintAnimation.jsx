import { useScroll } from "@/src/components/useScroll";
import { svgVariant } from "@/src/utils/Animations";
import { m } from "framer-motion";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { pathVariant } from "../utils/Animations";

const PaintAnimation = ({ path }) => {
  const [startFill, setStartFill] = useState(false);
  const { element, controls } = useScroll();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const handleMount = setMounted(true);
    return () => handleMount;
  }, []);

  const strokeDark = mounted && currentTheme === "dark" ? "#73cdd7" : "#1F4690";

  const fillDark = strokeDark;

  const strokeLight = mounted && currentTheme === "dark" ? "#fff" : "#fff";

  const fillLight = strokeLight;

  useEffect(() => {
    const fillSet = setTimeout(() => {
      setStartFill(true);
    }, 2500);
    return () => fillSet;
  }, []);

  return (
    <div
      ref={element}
      className={`absolute mt-14 flex h-screen w-screen items-center justify-center`}
    >
      {/* <div className="flex h-[500px] w-[500px] items-center justify-center rounded-full bg-cyan-900 bg-opacity-30 shadow-2xl"> */}
        <m.svg
          variants={svgVariant}
          initial="hidden"
          animate="visible"
          width={400}
          height={400}
          viewBox="0 0 802 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <m.path
            variants={pathVariant}
            stroke={`${strokeLight}`}
            strokeWidth={`${startFill ? "0" : "3"}`}
            d="M471.4 448.6V437.7H547.8V448.6H515.8V539.5H503.5V448.6H471.4Z"
            fill="url(#paint0_linear_4_2)"
          />
          <m.path
            variants={pathVariant}
            stroke={`${strokeLight}`}
            strokeWidth={`${startFill ? "0" : "3"}`}
            d="M445 384V542.5H425.8V384H445Z"
            fill="url(#paint1_linear_4_2)"
          />
          <m.path
            variants={pathVariant}
            stroke={`${strokeLight}`}
            strokeWidth={`${startFill ? "0" : "3"}`}
            d="M311.6 461V451.3H379.2V461H350.8V541.5H339.9V461H311.6Z"
            fill="url(#paint2_linear_4_2)"
          />
          <m.path
            variants={pathVariant}
            stroke={`${strokeLight}`}
            strokeWidth={`${startFill ? "0" : "3"}`}
            d="M295.1 460V541.5H285.6L241.2 477.5H240.4V541.5H230.5V460H240L284.5 524.1H285.3V460H295.1Z"
            fill="url(#paint3_linear_4_2)"
          />
          <m.path
            variants={pathVariant}
            stroke={`${strokeLight}`}
            strokeWidth={`${startFill ? "0" : "3"}`}
            d="M213.1 465.1V541.5H203.9V465.1H213.1Z"
            fill="url(#paint4_linear_4_2)"
          />
          <m.path
            variants={pathVariant}
            stroke={`${strokeLight}`}
            strokeWidth={`${startFill ? "0" : "3"}`}
            d="M125.3 542.6H114.3L146.1 456.1H156.9L188.7 542.6H177.7L151.8 469.7H151.1L125.3 542.6ZM137.3 508.8H165.8L169.1 518.1H134L137.3 508.8Z"
            fill="url(#paint5_linear_4_2)"
          />
          <m.path
            variants={pathVariant}
            stroke={`${strokeLight}`}
            strokeWidth={`${startFill ? "0" : "3"}`}
            d="M17.2 542.5V389H69.1C81.1 389 91 391.2 98.6 395.5C106.3 399.8 112 405.6 115.7 413C119.4 420.3 121.2 428.5 121.2 437.6C121.2 446.6 119.4 454.9 115.7 462.3C112.1 469.7 106.4 475.6 98.8 480C91.2 484.3 81.4 486.5 69.4 486.5H35.8V470H68.8C77 470 83.7 468.6 88.7 465.7C93.7 462.9 97.3 459 99.6 454.2C101.9 449.3 103 443.8 103 437.6C103 431.5 101.9 426 99.6 421.1C97.4 416.3 93.7 412.5 88.7 409.7C83.7 406.9 77 405.5 68.6 405.5H35.8V542.5H17.2Z"
            fill="url(#paint6_linear_4_2)"
          />
          <m.path
            variants={pathVariant}
            stroke={`${strokeLight}`}
            strokeWidth={`${startFill ? "0" : "3"}`}
            d="M789.6 542.1C703.5 450.4 509.2 184.6 423.8 73.3C410.8 56.4 397.6 39.5 383.6 21.5C287.8 145.4 193 267.9 98.1 390.5C99 391.4 100 392.4 100.9 393.3C106 388.3 111.1 383.3 116.2 378.3C117.1 378.9 117.9 379.6 118.8 380.3C116.1 386.6 113.3 392.8 110.6 399C111.6 399.8 112.6 400.7 113.6 401.6C119.3 394.4 125.1 387.1 130.9 379.9C131.4 380.2 131.8 380.6 132.2 380.9C130.1 387.2 127.9 393.5 124.4 403.4C130.7 398.3 134.2 395.5 138.4 392.1C138.7 395.3 138.8 397.7 139 400C140.1 401 141.3 402.1 142.4 403.1C146.4 397.6 150.3 392.1 154.2 386.6C154.4 386.8 154.5 386.9 154.6 387.1C148 399 141.4 411 133.4 425.4C143.8 415.6 151.9 407.9 160 400.3C173 412.1 173 412.1 162.6 427.4C160.8 430.1 159.3 432.9 157.7 435.7C158.4 436.3 159 436.8 159.6 437.4C167.9 430 176.2 422.5 184.6 415C197.9 426.6 182.1 432 182.2 440.6C184.8 445.1 187.6 450.1 191.3 456.5C255.7 375.1 319 295 383.4 213.5C387.6 218.6 390.5 222 393.2 225.5C453 303.1 512.7 380.7 572.4 458.3C591.1 482.6 609.8 506.9 628.5 531.2C633.2 537.4 637.5 542.2 646.2 542.1H789.6Z"
            fill="url(#paint7_linear_4_2)"
          />
          {startFill && (
            <defs>
              <linearGradient
                id="paint0_linear_4_2"
                x1="404.051"
                y1="397.63"
                x2="659.397"
                y2="588.608"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.3844" stopColor="#C90668" />
                <stop offset={1} stopColor="#F7F5F6" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_4_2"
                x1="334.321"
                y1="472.864"
                x2="527.669"
                y2="454.393"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.3844" stopColor="#6D4BAC" />
                <stop offset={1} stopColor="#C90668" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_4_2"
                x1="246.35"
                y1="427.707"
                x2="402.113"
                y2="522.191"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.3844" stopColor="#008DD1" />
                <stop offset={1} stopColor="#6D4BAC" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_4_2"
                x1="163.384"
                y1="430.055"
                x2="313.781"
                y2="536.965"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.3844" stopColor="#008DD1" />
                <stop offset={1} stopColor="#6D4BAC" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_4_2"
                x1="162.094"
                y1="491.628"
                x2="232.259"
                y2="509.222"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.3844" stopColor="#008DD1" />
                <stop offset={1} stopColor="#6D4BAC" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_4_2"
                x1="45.9603"
                y1="442.027"
                x2="199.043"
                y2="539.964"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.3844" stopColor="#008DD1" />
                <stop offset={1} stopColor="#6D4BAC" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_4_2"
                x1="-93.4163"
                y1="395.998"
                x2="263.922"
                y2="568.211"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00D39F" />
                <stop offset="0.7552" stopColor="#008DD1" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_4_2"
                x1="95.3066"
                y1="184.102"
                x2="897.307"
                y2="413.102"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.1425" stopColor="#00D39F" />
                <stop offset="0.2295" stopColor="#00BAB1" />
                <stop offset="0.3687" stopColor="#0098CA" />
                <stop offset="0.4441" stopColor="#008BD3" />
                <stop offset="0.4997" stopColor="#2970BD" />
                <stop offset="0.5905" stopColor="#65499E" />
                <stop offset="0.6738" stopColor="#952984" />
                <stop offset="0.7469" stopColor="#B71372" />
                <stop offset="0.8069" stopColor="#CC0567" />
                <stop offset="0.853" stopColor="#D41359" />
                <stop offset="0.8712" stopColor="#D44042" />
                <stop offset="0.8901" stopColor="#D4672E" />
                <stop offset="0.9095" stopColor="#D4861D" />
                <stop offset="0.9296" stopColor="#D49F10" />
                <stop offset="0.9506" stopColor="#D4B007" />
                <stop offset="0.9731" stopColor="#D4BB02" />
                <stop offset={1} stopColor="#D4BE00" />
              </linearGradient>
            </defs>
          )}
        </m.svg>
      {/* </div> */}
    </div>
  );
};

export default PaintAnimation;
