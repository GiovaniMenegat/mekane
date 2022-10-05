import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap" rel="stylesheet"/>
          
                    <link rel="shortcut icon" href="/mekane-alternativa.png" type="image/png" />
                </Head>
                <body>
                    <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`} height="0" width="0" 
                    style={{display:'none',visibility:'hidden'}}></iframe></noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
