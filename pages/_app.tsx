import React, { ReactElement, useEffect } from "react";
import ReactDOM from "react-dom";
import { DefaultSeo } from "next-seo";
import App, { AppProps, AppContext } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import { Workbox } from "workbox-window";
import Layout, { LayoutType } from "@components/layout";
import DefaultLayout from "@components/layout/default";
import { I18nProvider } from "@provider/i18n";

import "@assets/index.css";

const MyApp = ({
    Component,
    pageProps,
    table,
}: { Component: AppProps["Component"] & { Layout?: LayoutType } } & AppProps): ReactElement => {
    const { locale, defaultLocale, route } = useRouter();

    const ComponentLayout = Component.Layout || DefaultLayout;

    useEffect(() => {
        if (process.env.NODE_ENV !== "production") {
            const axe = require("@axe-core/react");

            axe(React, ReactDOM, 1000, { runOnly: false });
        }

        if (!("serviceWorker" in navigator) || process.env.NODE_ENV !== "production") {
            console.warn("Progressive Web App support is disabled");
            return;
        }

        const wb = new Workbox("worker.js", { scope: "/" });

        wb.register();
    }, []);

    return (
        <I18nProvider table={{ ...table, ...pageProps.table }} locale={locale} defaultLocale={defaultLocale as string}>
            <ThemeProvider>
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
                <Layout route={route}>
                    <ComponentLayout route={route}>
                        <Component {...pageProps} key={route} />
                    </ComponentLayout>
                </Layout>
            </ThemeProvider>
        </I18nProvider>
    );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext);

    const locale = appContext.router.locale || appContext.router.defaultLocale;

    const { default: table = {} } = await import(`./../locales/${locale}/index`);

    return { ...appProps, table: table || {} };
};

export default MyApp;
