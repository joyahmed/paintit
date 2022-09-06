import { PaintitProvider } from "@/src/store/PaintitContext";
import { domAnimation, LazyMotion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider>
      <ThemeProvider enaleSystem={true} defaultTheme="dark" attribute="class">
        <PaintitProvider>
          <LazyMotion features={domAnimation} strict>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LazyMotion>
        </PaintitProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
