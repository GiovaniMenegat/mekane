import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { WhatsappWidget } from '../components/WhatsappWidget'
import Script from 'next/script'

import '../styles/global.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTM_ID}`}
          strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GTM_ID}');
          `}
      </Script>
      <Header />
      <Component {...pageProps} />
      <WhatsappWidget/>
      <Footer />
    </>
  )
}

export default MyApp
