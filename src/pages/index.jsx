import Divider from "@/src/components/Divider";
import CtaSection from "@/src/components/sections/CtaSection";
import FeaturesSection from "@/src/components/sections/FeaturesSection";
import Hero from "@/src/components/sections/Hero";
import ServicesSection from "@/src/components/sections/ServicesSection";
import Stats from "@/src/components/Stats";
import { useScroll } from "@/src/components/useScroll";
import { m } from "framer-motion";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useMemo } from "react";
import Banner from "../components/Banner";
import ClientsComponent from "../components/ClientsComponent";
import FeedbackSection from "../components/FeedbackSection";
import GetStarted from "../components/GetStarted";
import Testimonials from "../components/sections/Testimonials";
import ServicesItems from "../components/ServicesItems";
import YoutubeButton from "../components/YoutubeButton";

const Home = () => {
  const [element, controls] = useScroll();

  const MyMap = useMemo(
    () =>
      dynamic(() => import("../components/MapComponent"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <m.div
      ref={element}
      initial="hidden"
      animate="show"
      className="screen snap no-scrollbar flex min-h-screen flex-col items-center justify-center overflow-y-scroll dark:text-gray-200"
    >
      <Head>
        <title>PaintIt</title>
        <meta
          name="description"
          content="Web app for commerical painting companies"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <Stats />

      <Banner />

      <FeaturesSection />

      <ServicesSection />

      <ServicesItems />

      <Testimonials />

      <FeedbackSection />

      <ClientsComponent />

      <CtaSection />
      <div className="flex h-full w-screen items-center justify-center px-3 sm:px-0">
        <MyMap />
      </div>
    </m.div>
  );
};

export default Home;
