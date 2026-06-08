const tseslint = require("typescript-eslint");
const prettier = require("eslint-plugin-prettier");

module.exports = [
    ...tseslint.configs.recommended,

    {
        files: ["**/*.ts"],
        plugins: {
            prettier,
        },

        rules: {
            "prettier/prettier": "error",

            "no-console": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
        },
    },
];