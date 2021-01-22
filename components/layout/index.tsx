import { FunctionComponent, h } from "preact";
import NextHead from "next/head";
import { useI18n } from "@provider/i18n";
import { Locale } from "@locales/index";

export type LayoutType = FunctionComponent<{
    route: string;
}>;

const Layout: LayoutType = ({ route, children }) => {
    const { t } = useI18n<Locale>();

    return (
        <>
            <NextHead>
                <title>{t(`seo.${route}.title`)}</title>

                <meta property="og:title" content={t(`seo.${route}.title`)} />
                <meta property="og:description" content="website" />
                <meta property="og:url" content="https://de.ryte.com/magazine/dieser-beitrag" />
            </NextHead>
            {children}
        </>
    );
};

export default Layout;
