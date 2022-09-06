import { useScroll } from "@/src/components/useScroll";
import { quote } from "@/src/utils/Animations";
import { m } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosPlay } from "react-icons/io";
import YoutubeModal from "./ui/modals/YoutubeModal";

const YoutubeButton = ({ currentTheme, mounted, path, setAutoScroll }) => {
  const [element, controls] = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(true);

  useEffect(() => {
    const handleHide = setTimeout(setHide(false), 10000);
    return () => handleHide;
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    path === "hero" && setAutoScroll(false);
  };

  return (
    <div
      // ref={element}
      // initial="hidden"
      // variants={quote}
      // animate={controls}
      // transition={{ delay: 1, duration: 1.1 }}
      className="group relative z-[14] flex h-[200px] w-[200px] items-center justify-center rounded-full"
    >
      <div
        className={`duration-400 group absolute z-[4] flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-red-700 bg-opacity-90 bg-blend-darken transition-all hover:bg-red-100`}
        onClick={handleOpen}
      >
        <IoIosPlay className=" duration-400 absolute ml-1.5 h-10 w-auto text-white transition-all group-hover:text-red-700 " />
      </div>
      <div
        className={`absolute z-[1] h-[120px] w-[120px] rounded-full shadow-xl`}
      />


        <div className="z-[0] flex h-full w-full items-center justify-center">
          <div
            className={`circle delay1 absolute z-0 h-[100px] w-[100px] rounded-full ${
              hide ? "bg-transparent" : "bg-blue-200 dark:bg-red-600"
            } `}
          />
          <div
            className={`circle delay2 absolute z-0 h-[100px] w-[100px] rounded-full ${
              hide ? "bg-transparent" : "bg-blue-200 dark:bg-red-600"
            } `}
          />
          <div
            className={`circle delay3 absolute z-0 h-[100px] w-[100px] rounded-full ${
              hide ? "bg-transparent" : "bg-blue-200 dark:bg-red-600"
            } `}
          />
          <div
            className={`circle delay4 absolute z-0 h-[100px] w-[100px] rounded-full ${
              hide ? "bg-transparent" : "bg-blue-200 dark:bg-red-600"
            } `}
          />
        </div>


      <YoutubeModal {...{ path, isOpen, setIsOpen, setAutoScroll }} />
    </div>
  );
};

export default YoutubeButton;

//bg-blue-600 dark:bg-red-600
