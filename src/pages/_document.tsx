import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <Script src="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap" strategy="afterInteractive"/>
          
                    <link rel="shortcut icon" href="/mekane-alternativa.png" type="image/png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
