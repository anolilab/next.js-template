import { createContext, useState, useRef, useEffect, ReactNode } from "react";
import rosetta from "rosetta";
import DE from "@locales/de";
import EN from "@locales/en";

const i18n = rosetta({
    en: EN,
    de: DE,
});

export const I18nContext = createContext<
    | {
          activeLocale: string;
          t: (...args: any[]) => string;
          locale: (language: string) => void;
      }
    | undefined
>(undefined);

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
        locale: (language: string) => {
            i18n.locale(language);

            activeLocaleRef.current = language;

            // force rerender to update view
            setTick((tick) => tick + 1);
        },
    };

    // for initial SSR render
    if (locale && firstRender.current === true) {
        firstRender.current = false;
        i18nWrapper.locale(locale);
    }

    // when locale is updated
    useEffect(() => {
        if (locale) {
            i18nWrapper.locale(locale);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale]);

    return <I18nContext.Provider value={i18nWrapper}>{children}</I18nContext.Provider>;
}
