"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { appWithTranslation } from 'next-i18next';  
import { AppProps } from 'next/app';

const RootLayout: React.FunctionComponent<React.PropsWithChildren<AppProps>> = ({ children }) =>{
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

export default appWithTranslation(RootLayout);

import Providers from "./providers";
import { GetStaticProps } from "next";

