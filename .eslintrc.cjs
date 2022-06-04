/** @ts-check */
/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    extends: ["@anolilab/eslint-config", "next", "next/core-web-vitals"],
    ignorePatterns: ["!**/*"],
    env: {
        // Your environments (which contains several predefined global variables)
        browser: true,
        node: false,
        // commonjs: true,
        // es6: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // Your global variables (setting to false means it's not allowed to be reassigned)
        //
        // myGlobal: false
    },
    rules: {
        // Customize your rules
        "import/extensions": "off",
        "unicorn/no-array-for-each": "off",
        "unicorn/no-null": "off",
        "unicorn/no-array-reduce": "off",

        "max-len": ["error", { code: 160 }],
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],

            parserOptions: {
                project: "./tsconfig.eslint.json",
                // eslint-disable-next-line no-undef
                tsconfigRootDir: __dirname,
            },
        },
    ],
    settings: {
        // next: {
        //     rootDir: "packages/my-app/",
        // },
    },
};
