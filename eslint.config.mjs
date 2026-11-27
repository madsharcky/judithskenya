import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored agent tooling and generated assets: third-party code, never linted.
    ".agents/**",
    ".hermes/**",
    "public/**",
  ]),
  {
    // The design kit is served as plain files from public/assets and linked from
    // the root layout on purpose (never through the bundler), so the two
    // pages-router-era rules that forbid manual <link> tags do not apply here.
    files: ["app/layout.tsx"],
    rules: {
      "@next/next/no-page-custom-font": "off",
      "@next/next/no-css-tags": "off",
    },
  },
]);

export default eslintConfig;
