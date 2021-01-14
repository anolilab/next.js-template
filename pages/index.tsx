import React from "react";
import { GetStaticProps } from "next";
import { I18nProps } from "@provider/i18n";

const Home = () => {
    return <div>Hallo</div>;
};

export default Home;

export const getStaticProps: GetStaticProps<
    I18nProps<{
        /* types */
    }>
> = async (context) => {
    const locale = context.locale || context.defaultLocale;
    const { table = {} } = await import(`../locales/${locale}`);

    return { props: { table } }; // Passed to `/pages/_app.tsx`
};
