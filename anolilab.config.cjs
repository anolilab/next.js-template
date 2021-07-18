// https://securityheaders.com
const contentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com cdn.usefathom.com;
  child-src *.youtube.com *.google.com *.twitter.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self';
`;

module.exports = {
    // The default page title
    title: "",
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
    // @see https://nextjs.org/docs/basic-features/image-optimization for more information
    // images: {
    //
    // },
    // env: {
    //
    // },
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
            image: "",
        },
        og: {
            site: "anolilab",
            // Recommended Image size: min 1200 x 630 px
            // Min Image size: 600 x 315 px, dont use a image below this size
            image: "",
            type: "site",
        },
    },
    sitemap: {
        // Change false to true, to active the sitemap generation.
        active: false,
        robots: true,
        dest: "public",
        pages: "pages",
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
            appleBackground: true, // Background color for iOS icons.
            appleOffset: 0, // Offset size in percents for iOS icons.
            appleStartupBackground: true, // Background color for iOS startup screens.
            appleStartupOffset: 0, // Offset size in percents for iOS startup screens.
            androidBackground: true, // Background color for Android icons.
            androidOffset: 0, // Offset size in percents for Android icons.
        },
    },
    // @see https://webpack.js.org/plugins/provide-plugin
    provide: {
        React: "react",
    },
    securityHeaders: [
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
        {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy.replace(/\n/g, ""),
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
        {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
        {
            key: "X-Frame-Options",
            value: "DENY",
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
        {
            key: "X-Content-Type-Options",
            value: "nosniff",
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
        {
            key: "X-DNS-Prefetch-Control",
            value: "on",
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
        {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
        // Opt-out of Google FLoC: https://amifloced.org/
        {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
        },
    ],
};
