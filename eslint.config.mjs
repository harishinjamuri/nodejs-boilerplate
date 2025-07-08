import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
), {
    languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
                modules: true,
                experimentalObjectRestSpread: true,
            },
        },
    },

    rules: {
        "react/prop-types": ["off"],
        "react/jsx-key": ["off"],
        "react/no-unknown-property": ["off"],
        "react/display-name": ["off"],
        "no-undef": ["off"],
        "react/react-in-jsx-scope": "error",
    },
}];