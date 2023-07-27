'use client';
 
import AboutSectionOne from '@/components/About/AboutSectionOne';
import ScrollUp from '@/components/Common/ScrollUp';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Video from '@/components/Video';
import {useTranslations} from 'next-intl';
import Blog from './blog/page';
import Contact from '@/components/Contact';
import { Inter } from "@next/font/google";
import Hero from '@/components/Hero';


const inter = Inter({ subsets: ["latin"] });
 
export default function Index() {
  const t = useTranslations('Hero');
  return(
     <>
      <ScrollUp />
        {/* <Features /> */}
        <Hero />
        <Video />
         {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
     </>
     );
}