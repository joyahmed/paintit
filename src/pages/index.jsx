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
        <title>Painto</title>
        <meta name="description" content="Web app for roofer companies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <Divider />

      {/* <div className="flex flex-col items-center justify-center space-y-20 sm:hidden">
        <GetStarted path="home" />
        <VideoSection path="home" />
        <YoutubeButton />
        <Divider />
      </div> */}

      <Stats />

      <Banner />

      {/* <Divider /> */}

      <FeaturesSection />

      <Divider />

      <ServicesSection />

      <ServicesItems />

      <Divider />

      <Testimonials />

      <FeedbackSection />

      <ClientsComponent />

      <Divider />
      <CtaSection />
      <MyMap />
      <Divider />
    </m.div>
  );
};

export default Home;
