"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
// import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";


const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Features /> */}
      <Video />
      <Brands />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}

export default Home