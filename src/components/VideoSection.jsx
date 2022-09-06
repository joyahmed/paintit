import { useScroll } from "@/src/components/useScroll";
import { m } from "framer-motion";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { videoPlayer } from "../utils/Animations";

const VideoSection = ({ path }) => {
  const [mounted, setMounted] = useState(false);
  const [element, controls] = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <m.div
      initial="hidden"
      variants={videoPlayer}
      animate={controls}
      className={`palyer-wrapper flex h-full w-full items-center justify-center rounded-lg opacity-70 transition-all duration-300 ease-in-out hover:opacity-100 dark:opacity-50 dark:hover:opacity-100 sm:hover:scale-105`}
    >
      {mounted && (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          url={[
            "https://youtu.be/UxjYSH_9O6I",
            "https://www.youtube.com/watch?v=XRVdvmTBmc4",
          ]}
        />
      )}
    </m.div>
  );
};

export default VideoSection;
