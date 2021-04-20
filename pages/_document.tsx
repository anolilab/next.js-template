import { h } from "preact";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

import nextConfig from "../anolilab.config.cjs";

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
    static async getInitialProps(ctx: DocumentContext) {
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

                    {nextConfig.openGraph.verification.map((v: { name: string, token: string }) => (
                        <meta name={v.name} content={v.token} />
                    ))}

                    {nextConfig.openGraph.twitter && nextConfig.openGraph.twitter.site && (
                        <>
                            <meta name="twitter:card" content="summary_large_image" />
                            <meta name="twitter:site" content={nextConfig.openGraph.twitter.site} />
                            <meta name="twitter:creator" content={nextConfig.openGraph.twitter.creator} />
                            <meta name="twitter:image" content={nextConfig.openGraph.twitter.image} />
                        </>
                    )}

                    {nextConfig.openGraph.og && nextConfig.openGraph.og.site && (
                        <>
                            <meta property="og:site_name" content={nextConfig.openGraph.og.site} />
                            <meta property="og:image" content={nextConfig.openGraph.og.image} />
                            <meta property="og:type" content={nextConfig.openGraph.og.type} />
                        </>
                    )}

                    {nextConfig.openGraph.author && (
                        <meta property="article:author" content={nextConfig.openGraph.author} />
                    )}

                    <link rel="manifest" href="static/manifest.json" />

                    {(nextConfig.i18n || {})?.domains?.map((domain) => (
                        <link rel="alternate" hrefLang={domain.defaultLocale} href={domain.domain} />
                    ))}

                    {/* @todo add favicons from https://github.com/anolilab/next-favicons */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
