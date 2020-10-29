const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const map = require("lodash.map");

module.exports = {
    theme: {
        extend: {
            colors: {
                black: "#1D1D1B",
                brand: {
                    yellow: "#FFC602",
                    red: "#f84525",
                    blue: "#1E90FF",
                    green: "#9bc400",
                    gray: "#EEEFF1",
                },
                rose: colors.rose,
                pink: colors.pink,
                fuchsia: colors.fuchsia,
                purple: colors.purple,
                violet: colors.violet,
                indigo: colors.indigo,
                blue: colors.blue,
                lightBlue: colors.lightBlue,
                cyan: colors.cyan,
                teal: colors.teal,
                emerald: colors.emerald,
                green: colors.green,
                lime: colors.lime,
                yellow: colors.yellow,
                amber: colors.amber,
                orange: colors.orange,
                red: colors.red,
                warmGray: colors.warmGray,
                trueGray: colors.trueGray,
                gray: colors.gray,
                coolGray: colors.coolGray,
                blueGray: colors.blueGray,
            },
            transitionProperty: {
                "background-position": "background-position",
            },
            fontFamily: {
                raleway: ['"Raleway"', ...defaultTheme.fontFamily.sans],
                montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
            },
            screens: {
                xl: { min: "1360px" },
                "2xl": { min: "1536px" },
                "3xl": { min: "1750px" },
            },
            boxShadow: {
                down: "0 60px 70px -30px rgba(0, 0, 0, 0.18)",
            },
        },
        keyframes: {
            // bounce: {
            //     '0%, 100%': { 'transform': 'translateY(0)' },
            //     '50%': { 'transform': 'translateY(-5px)' },
            // },
        },
    },
    variants: {
        transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
        display: ["responsive", "important"],
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        require("@tailwindcss/typography"),
        function ({ addComponents }) {
            addComponents({
                ".container": {
                    maxWidth: "100%",
                    "@screen sm": {
                        maxWidth: "600px",
                    },
                    "@screen md": {
                        maxWidth: "685px",
                    },
                    "@screen lg": {
                        maxWidth: "840px",
                    },
                    "@screen xl": {
                        maxWidth: "1230px",
                    },
                    "@screen 2xl": {
                        maxWidth: "1410px",
                    },
                    "@screen 3xl": {
                        maxWidth: "1620px",
                    },
                },
            });
        },
        function ({ addUtilities, e, theme }) {
            const utilities = map(theme("keyframes", {}), (keyframe, name) => {
                return {
                    [`@keyframes ${e(name)}`]: keyframe,
                };
            });

            addUtilities(utilities);
        },
        function ({ addVariant }) {
            addVariant("important", ({ container }) => {
                container.walkRules((rule) => {
                    rule.selector = `.\\!${rule.selector.slice(1)}`;
                    rule.walkDecls((decl) => {
                        decl.important = true;
                    });
                });
            });
        },
    ],
    purge: ["./components/**/*.{js,ts,jsx,tsx}", "./packages/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
    experimental: {
        uniformColorPalette: true,
        extendedSpacingScale: true,
        darkModeVariant: false,
    },
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
        standardFontWeights: true,
    },
    dark: "class",
};
