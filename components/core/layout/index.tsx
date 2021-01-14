import React, { FunctionComponent } from "react";
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
            </NextHead>
            {children}
        </>
    );
};

export default Layout;
