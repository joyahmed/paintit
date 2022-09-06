import { useScroll } from "@/src/components/useScroll";
import styles from "@/src/styles";
import { m } from "framer-motion";
import { lineLeft } from "../utils/Animations";

const Divider = ({ condition }) => {
  const [element, controls] = useScroll();
  return (
    <m.div
      ref={element}
      initial="hidden"
      variants={lineLeft}
      animate={controls}
      transition={{ duration: 1 }}
      className={`snap-center my-5 flex w-screen items-center justify-center px-10  `}
    >
      {/* <div className='flex w-full h-px border-t-[1.5px] dark:border-t-[1.5px] border-t-[#5594Z1] dark:border-t-[#3F3E45]'></div> */}

      <div className="bg-blue-gradient h-[1px] w-full rounded-full bg-opacity-10 dark:bg-opacity-30"></div>
    </m.div>
  );
};

export default Divider;
