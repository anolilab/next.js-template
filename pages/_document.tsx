import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

const generateFontLinks = (fontsFolder: string, fileName: string) => {
    return (
        <>
            <link rel="preload" href={`/fonts/${fontsFolder}/${fileName}.eot`} as="font" crossOrigin="true" />
            <link rel="preload" href={`/fonts/${fontsFolder}/${fileName}.woff2`} as="font" crossOrigin="true" />
            <link rel="preload" href={`/fonts/${fontsFolder}/${fileName}.woff`} as="font" crossOrigin="true" />
            <link rel="preload" href={`/fonts/${fontsFolder}/${fileName}.ttf`} as="font" crossOrigin="true" />
            <link
                rel="preload"
                href={`/fonts/${fontsFolder}/${fileName}.svg#Montserrat`}
                as="font"
                crossOrigin="true"
            />
        </>
    );
};

class MyDocument extends Document<{ lang: string }> {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps, lang: ctx.query.lng };
    }

    public render() {
        return (
            <Html lang={this.props.lang}>
                <Head>
                    <meta charSet="utf-8" />

                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="theme-color" content="#000000" />

                    <meta name="robots" content="index,follow" />
                    <meta name="googlebot" content="index,follow" />

                    <meta name="google-site-verification" content="verification_token" />
                    <meta name="yandex-verification" content="verification_token" />
                    <meta name="msvalidate.01" content="verification_token" />
                    <meta name="alexaVerifyID" content="verification_token" />
                    <meta name="p:domain_verify" content="code_from_pinterest" />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@anolilab" />
                    <meta name="twitter:creator" content="@_prisis_" />
                    <meta name="twitter:image" content="https://example.com/image.jpg" />

                    <meta property="og:site_name" content="anolilab" />
                    <meta property="og:image" content="https://example.com/image.jpg" />
                    <meta property="og:type" content="website" />

                    <meta property="article:author" content="Daniel Bannert" />

                    <link rel="manifest" href="static/manifest.json" />
                    <link rel="icon" href="static/img/favicon.ico" />

                    <link rel="alternate" hrefLang="en" href="https://anolilab.com" />
                    <link rel="alternate" hrefLang="de" href="https://anolilab.de" />

                    <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png" />
                    <link rel="icon" href="" sizes="16x16" type="image/png" />
                    <link rel="icon" href="" sizes="32x32" type="image/png" />
                    <link rel="icon" href="" sizes="48x48" type="image/png" />
                    <link rel="icon" href="" sizes="62x62" type="image/png" />
                    <link rel="icon" href="" sizes="192x192" type="image/png" />

                    {([
                        "montserrat-v14-latin-100",
                        "montserrat-v14-latin-100italic",
                        "montserrat-v14-latin-200",
                        "montserrat-v14-latin-200italic",
                        "montserrat-v14-latin-300",
                        "montserrat-v14-latin-300italic",
                        "montserrat-v14-latin-regular",
                        "montserrat-v14-latin-italic",
                        "montserrat-v14-latin-500",
                        "montserrat-v14-latin-500italic",
                        "montserrat-v14-latin-600",
                        "montserrat-v14-latin-600italic",
                        "montserrat-v14-latin-700",
                        "montserrat-v14-latin-700italic",
                        "montserrat-v14-latin-800",
                        "montserrat-v14-latin-800italic",
                        "montserrat-v14-latin-900",
                        "montserrat-v14-latin-900italic",
                    ] as string[]).map((font: string) => generateFontLinks("montserrat-v14-latin", font))}

                    {([
                        "raleway-v17-latin-100",
                        "raleway-v17-latin-100italic",
                        "raleway-v17-latin-200",
                        "raleway-v17-latin-200italic",
                        "raleway-v17-latin-300",
                        "raleway-v17-latin-300italic",
                        "raleway-v17-latin-regular",
                        "raleway-v17-latin-italic",
                        "raleway-v17-latin-500",
                        "raleway-v17-latin-500italic",
                        "raleway-v17-latin-600",
                        "raleway-v17-latin-600italic",
                        "raleway-v17-latin-700",
                        "raleway-v17-latin-700italic",
                        "raleway-v17-latin-800",
                        "raleway-v17-latin-800italic",
                        "raleway-v17-latin-900",
                        "raleway-v17-latin-900italic",
                    ] as string[]).map((font: string) => generateFontLinks("raleway-v17-latin", font))}
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <script src="https://f.convertkit.com/ckjs/ck.5.js" />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
