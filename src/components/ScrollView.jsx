import { m, useScroll, useSpring } from "framer-motion";

const ScrollView = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <m.div
      className="to-themeDark fixed bottom-0 z-[10]  h-2 w-screen rounded-xl bg-opacity-50 bg-gradient-to-r via-themeDarker from-themeDarkest drop-shadow-xl dark:from-gray-800 dark:via-gray-600 dark:to-gray-500"
      style={{ scaleX }}
    ></m.div>
  );
};

export default ScrollView;
