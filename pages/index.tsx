import { h } from "preact";
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
    // Add new locals based on context local
    // const locale = context.locale || context.defaultLocale;

    return { props: { table: {} } }; // Passed to `/pages/_app.tsx`
};
