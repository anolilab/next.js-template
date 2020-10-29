import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { DefaultSeo } from "next-seo";
import App from "next/app";
import Head from "next/head";
import { Workbox } from "workbox-window";
import { useRouter } from 'next/router'

import type { AppProps, AppContext } from "next/app";

import "./../style/index.css"

import I18n from "@components/i18n";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const { locale, defaultLocale } = router

    useEffect(() => {
        if (process.env.NODE_ENV !== "production") {
            const axe = require("@axe-core/react");

            axe(React, ReactDOM, 1000);
        }

        if (!("serviceWorker" in navigator) || process.env.NODE_ENV !== "production") {
            console.warn("Progressive Web App support is disabled");
            return;
        }

        const wb = new Workbox("worker.js", { scope: "/" });

        wb.register();
    }, []);

    return (
        <I18n locale={locale} defaultLocale={defaultLocale}>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
            </Head>
            <DefaultSeo
                openGraph={{
                    type: "website",
                    locale: "en_IE",
                    url: "https://www.url.ie/",
                    site_name: "SiteName",
                }}
                twitter={{
                    handle: "@handle",
                    site: "@site",
                    cardType: "summary_large_image",
                }}
            />
            <Component {...pageProps} />
        </I18n>
    );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps };
};

export default MyApp;
