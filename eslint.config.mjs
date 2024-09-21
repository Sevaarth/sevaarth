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
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // JavaScript and TypeScript files
    rules: {
      // Add or customize your ESLint rules here
      "no-unused-vars": "warn", // Warn on unused variables
      "react/react-in-jsx-scope": "off", // Next.js doesn't require React to be in scope
      "no-console": "warn", // Warn instead of error for console logs
      "react/prop-types": "off", // Disable prop-types rule if you're using TypeScript
      "@next/next/no-img-element": "error", // Enforce using next/image instead of img tag
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
];
