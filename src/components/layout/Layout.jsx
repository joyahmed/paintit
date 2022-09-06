import { m } from "framer-motion";
import { useTheme } from "next-themes";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RooferContext } from "../../store/RooferContext";
import ScrollView from "../ScrollView";
import Footer from "./Footer";
import Navbar from "./nav/Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children, title = "Roofer" }) => {
  const { user, mousePosition, touchPosition } = useContext(RooferContext);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleMount = setMounted(true);
    return () => handleMount;
  }, []);

  const small = {
    show: {
      x: mousePosition.x - 3 || touchPosition.x - 3,
      y: mousePosition.y - 3 || touchPosition.x - 3,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const big = {
    show: {
      x: mousePosition.x - 13 || touchPosition.x - 13,
      y: mousePosition.y - 13 || touchPosition.x - 13,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="flex min-h-screen w-screen items-center justify-between">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" content="initial-scale=.0, widht=device-width" />
      </Head>
      {router.pathname === "/admin" ||
      router.pathname === "/admin/dashboard" ? (
        <div className="flex h-screen w-screen flex-row items-center justify-center">
          {user && <Sidebar />}
          {children}
        </div>
      ) : (
        <div className="flex min-h-screen flex-col items-center justify-between">
          <div className="flex flex-col items-center justify-center sm:mt-0">
            <m.div variants={big} animate="show" className="cursor  ease-in-out"></m.div>
            <m.div
              variants={small}
              animate="show"
              className="cursor-small ease-in-out"
            ></m.div>
            <ScrollView />
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      )}

      <ToastContainer
        toastStyle={{
          backgroundColor: `${
            mounted && currentTheme === "dark" ? "black" : "white"
          }`,
          color: `${mounted && currentTheme === "dark" ? "white" : "#0494C4"}`,
          progressClassName: "fancy-progress-bar",
        }}
        position="top-center"
      />
    </div>
  );
};

export default Layout;
