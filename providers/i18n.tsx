import React, { createContext, useEffect, useState, useContext } from "react";
import rosetta, { Rosetta as RosettaBase } from "rosetta";

/**
 * @see https://github.com/microsoft/TypeScript/pull/40336
 */
type PropType<T, Path extends string> = string extends Path
    ? string
    : Path extends keyof T
    ? T[Path]
    : Path extends `${infer K}.${infer R}`
    ? K extends keyof T
        ? PropType<T[K], R>
        : unknown
    : unknown;

export function rosettaExtended<T>(): RosettaExtended<T> {
    const { locale, set, t, table } = rosetta<T>();

    return {
        locale,
        set,
        table,
        t<P extends string, X extends Record<string, any> | any[]>(key: P, params?: X, lang?: string): PropType<T, P> {
            return t(key, params, lang) as any;
        },
    };
}

export interface RosettaExtended<T> extends Omit<RosettaBase<T>, "t"> {
    t<P extends string, X extends Record<string, any> | any[]>(key: P, params?: X, lang?: string): PropType<T, P>;
}

export const I18nContext = createContext<RosettaExtended<any> | null>(null);

export type I18nProps<T = {}> = {
    table: T;
};

export type I18nProviderProps<T = {}> = I18nProps<T> & {
    children?: any;
    defaultLocale: string;
    locale?: string;
};

export function I18nProvider<T = {}>({ table, defaultLocale, locale, ...props }: I18nProviderProps<T>) {
    locale = locale || defaultLocale;

    const [i18n, setI18n] = useState<RosettaExtended<T>>(() => {
        // Initial state
        const current = rosettaExtended<T>();

        current.set(locale!, table);
        current.locale(locale);

        return current;
    });

    const hasChanged = i18n.locale() !== locale;

    useEffect(() => {
        const current = rosettaExtended<T>();

        current.set(locale!, table);
        current.locale(locale);

        setI18n(current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasChanged, table]);

    return <I18nContext.Provider value={i18n} {...props} />;
}

export function useI18n<T = {}>() {
    // @ts-ignore
    const service = useContext<RosettaExtended<T> | null>(I18nContext);

    if (!service) {
        throw Error("Please initialize `I18nProvider` before `useI18n`");
    }

    return service;
}
