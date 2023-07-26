"use client";

// import {useLocale} from 'next-intl';
// import {notFound} from 'next/navigation';
import { ThemeProvider } from "next-themes";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";

import clsx from 'clsx';
import {Inter} from 'next/font/google';
import {notFound} from 'next/navigation';
import {createTranslator, NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';

const inter = Inter({subsets: ['latin']});

type Props = {
  children: ReactNode;
  params: {locale: string};
};

async function getMessages(locale: string) {
  try {
    // const url = `https://api.i18nexus.com/project_resources/translations/${locale}/home.json?api_key=zNOV0MD3b3VebwoiTIXA8A`;
    // const res = await fetch(url);  
    // return res.json();
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ['en', 'es', 'pt'].map((locale) => ({locale}));
}

export async function generateMetadata({params: {locale}}: Props) {
  const messages = await getMessages(locale);
  const t = createTranslator({locale, messages});

  return {
    title: 'Hello'
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={clsx(inter.className, 'flex h-full flex-col dark:bg-black')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark"> 
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}



