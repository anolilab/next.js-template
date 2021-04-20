import { FunctionalComponent, h } from "preact";
import { useEffect } from "preact/hooks";
import ReactDOM from "react-dom";
import { DefaultSeo } from "next-seo";
import App, { AppProps, AppContext } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import ErrorComponent from "next/error";
import { ThemeProvider } from "next-themes";
import { Workbox } from "workbox-window";
import { ErrorBoundary } from "react-error-boundary";
import Layout, { LayoutType } from "@components/layout";
import DefaultLayout from "@components/layout/default";
import { I18nProps, I18nProvider } from "@provider/i18n";
import { ErrorFallbackProps } from "../@types/core";

import "@assets/index.css";
import nextConfig from "../anolilab.config.cjs";

const MyApp: FunctionalComponent<
    { Component: AppProps["Component"] & { Layout?: LayoutType } } & AppProps &
        I18nProps<{
            /* types */
        }>
> = ({ Component, pageProps, table }) => {
    const { locale, defaultLocale, route, asPath } = useRouter();

    const ComponentLayout = Component.Layout || DefaultLayout;

    useEffect(() => {
        if (process.env.NODE_ENV !== "production") {
            const axe = require("@axe-core/react");

            axe(h, ReactDOM, 1000, { runOnly: false });
        }

        if (!("serviceWorker" in navigator) || process.env.NODE_ENV !== "production") {
            console.warn("Progressive Web App support is disabled");
            return;
        }

        const wb = new Workbox("worker.cjs", { scope: "/" });

        wb.register();
    }, []);

    return (
        <ErrorBoundary FallbackComponent={RootErrorFallback} resetKeys={[asPath]}>
            <I18nProvider
                table={{ ...table, ...pageProps.table }}
                locale={locale}
                defaultLocale={defaultLocale as string}
            >
                <ThemeProvider>
                    <Head>
                        <title>{nextConfig.title}</title>
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
        </ErrorBoundary>
    );
};

function RootErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
    return <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />;
}

// @ts-ignore
MyApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext);

    const locale = appContext.router.locale || appContext.router.defaultLocale;

    const { default: table = {} } = await import(`./../locales/${locale}/index`);

    return { ...appProps, table: table || {} };
};

export default MyApp;
