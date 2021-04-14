module.exports = {
    extends: ["@anolilab/stylelint-config"],
    rules: {
        // Only for Tailwind support
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen", "@tailwind"],
            },
        ],
        "declaration-block-trailing-semicolon": null,
        "no-descending-specificity": null,
    },
};
