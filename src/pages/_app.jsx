import { RooferProvider } from "@/src/store/RooferContext";
import { domAnimation, LazyMotion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider>
      <ThemeProvider enaleSystem={true} defaultTheme="dark" attribute="class">
        <RooferProvider>
          <LazyMotion features={domAnimation} strict>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LazyMotion>
        </RooferProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
