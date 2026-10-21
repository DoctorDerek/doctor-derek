/**
 * ONE-TIME EXCEPTION TO NO CODE COMMENT RULE:
 * typescript-eslint (v8.63.0) is broken with TypeScript 7 (v7.0.2)
 * until TS 7 releases an API (planned for v7.1.0+)
 * TODO Upgrade to TS 7 when the version is >7.1.0 and typescript-eslint is working with TS7
 * */
import gitignore from "eslint-config-flat-gitignore"
import nextConfig from "eslint-config-next"
import nextTypeScript from "eslint-config-next/typescript"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import { defineConfig } from "eslint/config"
import "eslint-plugin-only-warn"

const eslintConfig = defineConfig(
  gitignore(),
  nextConfig,
  {
    name: "doctorderek/typescript",
    files: ["**/*.{ts,tsx,mts,cts}"],
    extends: [nextTypeScript],
  },
  {
    name: "doctorderek/fullpage-extension-initialization",
    files: ["components/ClientShell.tsx"],
    rules: {
      "@typescript-eslint/no-require-imports": [
        "error",
        {
          allow: [
            "^@/vendor/fullPage_js_extensions_bundle/(?:[\\w-]+/)+[\\w.-]+\\.min\\.js$",
          ],
        },
      ],
    },
  },
  {
    name: "doctorderek/image-mock-prop-omission",
    files: [
      "__tests__/components/AboutSection.test.tsx",
      "__tests__/components/BlogSection.test.tsx",
      "__tests__/components/ContactSection.test.tsx",
      "__tests__/components/Testimonials.test.tsx",
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { ignoreRestSiblings: true },
      ],
    },
  },
  eslintConfigPrettier,
)

export default eslintConfig
