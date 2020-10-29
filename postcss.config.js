const purgecss = [
    "@fullhuman/postcss-purgecss",
    {
        // Specify the paths to all of the template files
        content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
        // This is the function used to extract class names from the templates
        defaultExtractor: (content) => {
            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\\s]*[^<>"'`\\s:]/g) || [];
            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches = content.match(/[^<>"'`\\s.()]*[^<>"'`\\s.():]/g) || [];
            return broadMatches.concat(innerMatches);
        },
    },
];

module.exports = {
    plugins: [
        "postcss-import",
        "tailwindcss",
        "postcss-flexbugs-fixes",
        [
            "postcss-preset-env",
            {
                autoprefixer: {
                    flexbox: "no-2009",
                },
                stage: 3,
                features: {
                    "custom-properties": false,
                },
            },
        ],
        "postcss-nested",
        ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
        "css-declaration-sorter",
        "postcss-preset-env",
    ],
};
