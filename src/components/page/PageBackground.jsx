import { useContext, useEffect, useState } from "react";
import { RooferContext } from "../../store/RooferContext";

const PageBackground = ({ background, text1, text2 }) => {
  const { windowHeight } = useContext(RooferContext);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimate(true), 500);
  }, []);

  return (
    <div
      className={`flex  min-h-[20rem] w-screen items-center justify-center bg-gray-400 ${background} bg-cover bg-center bg-no-repeat text-white`}
    >
      <h1
        className={`mb-5 h-full text-[27px] font-bold tracking-wider sm:text-[50px]`}
      >
        <span className="items-between flex h-full w-full flex-wrap justify-between sm:flex-row">
          <span
            className={`${
              animate ? "mb-10 mr-2" : "mb-0 -mr-6"
            } ease transition-all duration-1000`}
          >
            {text1}
          </span>
          {/* {animate && ( */}
          <span
            className={`${
              animate
                ? "scale-1 opacity-1 rotate-[25deg] border-l-[5px] text-[50px] "
                : "ml-5 mr-5 rotate-0 scale-0 opacity-0 "
            }transition-all ease duration-1000`}
          ></span>
          {/* )} */}
          <span
            className={`${
              animate ? "mt-10 ml-2" : "mt-0 "
            } ease transition-all duration-1000`}
          >
            {text2}
          </span>
        </span>
      </h1>
    </div>
  );
};

export default PageBackground;
