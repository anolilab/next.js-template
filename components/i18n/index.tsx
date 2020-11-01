import { createContext, useState, useRef, useEffect, ReactNode } from "react";
import rosetta from "rosetta";
import DE from "@locales/de";
import EN from "@locales/en";

const i18n = rosetta({
    en: EN,
    de: DE,
});

export const I18nContext = createContext<{
    activeLocale: string;
    t: (...args: any[]) => string;
    setLocale: (language: string) => void;
}>({
    activeLocale: "en",
    t: (...args: any[]) => "",
    setLocale: (language: string) => {}
});

export default function I18n({
                                 children,
                                 locale,
                                 defaultLocale,
                             }: {
    children: ReactNode;
    locale?: string;
    defaultLocale: string;
}) {
    i18n.locale(defaultLocale);

    const activeLocaleRef = useRef(locale || defaultLocale);
    const [, setTick] = useState(0);
    const firstRender = useRef(true);

    const i18nWrapper = {
        activeLocale: activeLocaleRef.current,
        t: (...args: any[]) => i18n.t(...args),
        setLocale: (language: string) => {
            i18n.locale(language);

            activeLocaleRef.current = language;

            // force rerender to update view
            setTick((tick) => tick + 1);
        },
    };

    // for initial SSR render
    if (locale && firstRender.current === true) {
        firstRender.current = false;
        i18nWrapper.setLocale(locale);
    }

    // when setLocale is updated
    useEffect(() => {
        if (locale) {
            i18nWrapper.setLocale(locale);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale]);

    return <I18nContext.Provider value={i18nWrapper}>{children}</I18nContext.Provider>;
}
