import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginNext from "eslint-plugin-next";

const compat = new FlatCompat();

export default [
  js.configs.recommended,

  ...compat.extends("plugin:react/recommended"),
  ...compat.extends("plugin:next/recommended"),

  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    rules: {
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "on",
      "no-console": "error",
      "react/prop-types": "off",
      "next/no-img-element": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
