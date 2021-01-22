module.exports = {
    domain: "http://example.com",
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ["en", "de"],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: "en",
        // This is a list of locale domains and the default locale they
        // should handle (these are only required when setting up domain routing)
        domains: [
            {
                domain: "example.com",
                defaultLocale: "en",
            },
            {
                domain: "example.de",
                defaultLocale: "de",
            },
        ],
    },
    pageExtensions: ["ts", "tsx"],
    css: {
        extensions: [/\.css$/, /\.module\.css$/, /\.linaria\.module\.css$/],
    },
    linaria: {
        extension: ".linaria.module.css",
        evaluate: true,
        displayName: false,
    },
    openGraph: {
        siteName: "",
        author: "Daniel Bannert",
        verification: [
            // {
            //     name: "google-site-verification",
            //     token: "verification_token",
            // },
            // {
            //     name: "yandex-verification",
            //     token: "verification_token",
            // },
            // {
            //     name: "msvalidate.01",
            //     token: "verification_token",
            // },
            // {
            //     name: "alexaVerifyID",
            //     token: "verification_token",
            // },
            // {
            //     name: "p:domain_verify",
            //     token: "verification_token",
            // },
        ],
        twitter: {
            site: "@anolilab",
            creator: "@_prisis_",
            image: ""
        },
        og: {
            site: "anolilab",
            // Recommended Image size: min 1200 x 630 px
            // Min Image size: 600 x 315 px, dont use a image below this size
            image: "",
            type: "site"
        }
    },
    sitemap: {
        pageTags: [
            {
                path: "/",
                priority: 1.0,
            },
            {
                path: "/extra/path",
                changefreq: "monthly",
            },
            {
                path: "/about",
                changefreq: "weekly",
                priority: 0.5,
            },
        ],
        excludedPaths: [], // like "/login" or "/signup"
        extraPaths: [],
    },
    // @todo use https://github.com/anolilab/favicons-manifest
    favicons: {
        path: "./public/favicon.svg",
        manifestPath: "./public/manifest.json",
        generate: {
            favicon: true,
            android: true,
            apple: true,
            appleStartup: true,
            appleBackground: true,        // Background color for iOS icons.
            appleOffset: 0,               // Offset size in percents for iOS icons.
            appleStartupBackground: true, // Background color for iOS startup screens.
            appleStartupOffset: 0,        // Offset size in percents for iOS startup screens.
            androidBackground: true,      // Background color for Android icons.
            androidOffset: 0,             // Offset size in percents for Android icons.
        }
    }
};
