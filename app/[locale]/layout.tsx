import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import Providers from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import "node_modules/react-modal-video/css/modal-video.css";
import "../../styles/index.css";
 
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'de'}];
}
 
export default async function LocaleLayout({children, params: {locale}}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
 
  return (
    <html lang={locale}>
       <head />

<body className="dark:bg-black">
      <Providers>
        <Header />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Footer />
        <ScrollToTop />
      </Providers>
      </body>
    </html>
  );
}