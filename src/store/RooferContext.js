import { signOut, useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
// import { fetcher } from '@/src/utils/myFetcher';
// import useSWR, { mutate } from 'swr';
// import { BASE_URL } from '@/src/utils/config';

import { useTheme } from "next-themes";

const RooferContext = createContext();

const RooferProvider = ({ children }) => {
  const [windowHeight, setWindowHeigth] = useState("");
  const [windowDimensions, setWindowDimensions] = useState({
    windowWidth: "",
    windowHeight: "",
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    const touchMove = (e) => {
      setTouchPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("touchmove", touchMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("touchmove", touchMove);
    };
  }, []);

  const changeWidth = () => {
    setWindowDimensions({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", () => changeWidth());
    return () => window.removeEventListener("resize", changeWidth());
  }, []);

  const { data: session } = useSession();

  let user;
  if (session) {
    user = session.user;
  }

  const changeHeight = () => {
    setWindowHeigth(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => changeHeight());
    return () => window.removeEventListener("scroll", changeHeight());
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const handleMount = setMounted(true);
    return () => handleMount;
  }, []);

  return (
    <RooferContext.Provider
      value={{
        user,
        signOut,
        windowWidth: windowDimensions.windowWidth,
        windowHeight: windowHeight,
        currentTheme,
        mousePosition,
        touchPosition
      }}
    >
      {children}
    </RooferContext.Provider>
  );
};

export { RooferProvider, RooferContext };
