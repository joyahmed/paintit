import { useScroll } from "@/src/components/useScroll";
import { PaintitContext } from "@/src/store/PaintitContext";
import { m } from "framer-motion";
import { useContext } from "react";
import CountUp from "react-countup";
import { brushBg } from "../assets";
import { quote, sectionRight, statsAnimation } from "../utils/Animations";

import { stats } from "../constants";

const Stats = () => {
  const { windowHeight, currentTheme } = useContext(PaintitContext);
  const [element, controls] = useScroll();

  return (
    <section
      ref={element}
      className={`w-site my-10 flex min-h-screen items-center justify-center`}
    >
      <m.div
        ref={element}
        initial="hidden"
        variants={sectionRight}
        animate={controls}
        className="w-site relative flex min-h-screen items-center justify-center  sm:flex-row md:justify-between"
      >
        {/* <Animation /> */}
        <div className="flex h-full w-screen flex-col items-center justify-center px-4 sm:flex-row sm:space-x-6">
          {stats.map((stat, index) => (
            <m.div
              ref={element}
              initial="hidden"
              variants={statsAnimation}
              animate={controls}
              transition={{
                type: "spring",
                stiffness: 20,
                duration: index == 0 ? 1 : index * 0.9,
              }}
              key={stat.id}
              className={`group my-5 flex h-[20rem] w-full flex-col items-center justify-end overflow-hidden rounded-[15px] px-3  shadow-2xl hover:rounded-[25px] group-hover:justify-center xl:h-[30rem]
              `}
              style={{
                backgroundImage: `url(${stat.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "multiply",
              }}
            >
              <div className="duration-400 my-1 flex h-[7rem] w-full flex-col items-center justify-center text-clip rounded-[15px] border-2 border-blue-400 border-opacity-50 bg-primary bg-opacity-60 py-2 shadow-xl transition-all group-hover:m-3 group-hover:h-full group-hover:rounded-[25px] group-hover:bg-opacity-40 ">
                {windowHeight >= 500 && (
                  <h4
                    className={`text-gradient-light
                   text-[30px] font-semibold leading-[43px] xs:text-[40px] xs:leading-[53px]`}
                  >
                    <CountUp end={stat.value} duration={5} suffix="+" />
                    {stat.title === "Transactions" && "M"}
                  </h4>
                )}
                <p
                  className={`text-gradient-light flex w-full items-center justify-center bg-blue-200 text-center text-xl font-bold uppercase leading-[20px] xs:text-[23px] xs:leading-[23px]`}
                >
                  <span className="flex w-1/2 items-center justify-center">
                    {stat.title}
                  </span>
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  );
};

export default Stats;

const Animation = () => (
  <>
    <div className="absolute top-0 -left-4 h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-30 mix-blend-multiply blur-xl filter" />
    <div className="animation-delay-2000 absolute top-0 -right-4 h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-30 mix-blend-multiply blur-xl filter" />
    <div className="animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-30 mix-blend-multiply blur-xl filter" />
  </>
);
