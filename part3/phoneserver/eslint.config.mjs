import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import stylisticJs from "@stylistic/eslint-plugin";

export default [
  js.configs.recommended,

  pluginReact.configs.flat.recommended,

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", 
      globals: {
        ...globals.browser,
        ...globals.node, 
      },
    },
    settings: {
      react: {
        version: "detect", 
      },
    },
  },

  {
    plugins: {
      "@stylistic/js": stylisticJs,
    },
    rules: {
      "@stylistic/js/indent": ["error", 2],
      "@stylistic/js/linebreak-style": ["error", "unix"],
      "@stylistic/js/quotes": ["error", "single"],
      "@stylistic/js/semi": ["error", "never"],
    },
  },
];