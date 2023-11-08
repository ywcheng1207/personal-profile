module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "standard",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "error",
      { allowConstantExport: true },
    ],
    "indent": ["error", 2],
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react-hooks/exhaustive-deps": "off"
  },
};