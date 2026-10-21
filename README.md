# DoctorDerek.com

[![Production](https://img.shields.io/website?url=https%3A%2F%2Fdoctorderek.com%2F&up_message=live&down_message=offline&label=production&logo=vercel&logoColor=white)](https://doctorderek.com/) [![Codecov](https://codecov.io/gh/DoctorDerek/DoctorDerek.com/graph/badge.svg)](https://app.codecov.io/gh/DoctorDerek/DoctorDerek.com) [![ESLint, Vitest, and XState](https://github.com/DoctorDerek/DoctorDerek.com/actions/workflows/eslint-vitest-xstate.yml/badge.svg?branch=main)](https://github.com/DoctorDerek/DoctorDerek.com/actions/workflows/eslint-vitest-xstate.yml) [![Playwright](https://github.com/DoctorDerek/DoctorDerek.com/actions/workflows/playwright.yml/badge.svg)](https://github.com/DoctorDerek/DoctorDerek.com/actions/workflows/playwright.yml)

The public website and engineering portfolio of [Dr. Derek Austin](https://doctorderek.com/), built to present six live projects and the engineering behind them.

## Mobile Web Lighthouse Measurements

Latest successful automated Lighthouse scores for the canonical production website, measured with Lighthouse’s standard mobile emulation against [doctorderek.com](https://doctorderek.com/). The badges and linked HTML report come from the audit with the median performance score among five production runs.

[![Mobile Web Lighthouse Performance](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fdoctorderek.github.io%2FDoctorDerek.com%2Flighthouse-results.json&query=%24.performance&label=performance&suffix=%2F100&logo=lighthouse&logoColor=white&color=informational)](https://doctorderek.github.io/DoctorDerek.com/) [![Mobile Web Lighthouse Accessibility](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fdoctorderek.github.io%2FDoctorDerek.com%2Flighthouse-results.json&query=%24.accessibility&label=accessibility&suffix=%2F100&logo=lighthouse&logoColor=white&color=informational)](https://doctorderek.github.io/DoctorDerek.com/) [![Mobile Web Lighthouse Best Practices](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fdoctorderek.github.io%2FDoctorDerek.com%2Flighthouse-results.json&query=%24.bestPractices&label=best%20practices&suffix=%2F100&logo=lighthouse&logoColor=white&color=informational)](https://doctorderek.github.io/DoctorDerek.com/) [![Mobile Web Lighthouse SEO](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fdoctorderek.github.io%2FDoctorDerek.com%2Flighthouse-results.json&query=%24.seo&label=SEO&suffix=%2F100&logo=lighthouse&logoColor=white&color=informational)](https://doctorderek.github.io/DoctorDerek.com/)

## Tech Stack

This repository contains the full-stack Next.js source code for my public portfolio hub.

- **Framework:** Next.js 16, React 19
- **Language:** TypeScript 6 (Strict Mode)
- **Styling:** Tailwind CSS v4
- **State:** XState v5
- **Motion and Rendering:** Motion, Rive, HTML Canvas, and fullPage.js
- **Quality:** Vitest, React Testing Library, Playwright, and Codecov
- **Deployment:** Vercel and GitHub Actions

## Architectural Highlights

- **Deterministic Global State:** An XState parallel machine owns logo and background transitions outside the React render cycle (`machines/globalMachine.ts`).
- **Motion-Aware Interaction:** The browser’s `prefers-reduced-motion` signal controls fullPage.js effects, Motion transitions, Rive ambience, and particle rendering.
- **Server-Rendered Publishing Feed:** Next.js fetches, cleans, and revalidates the live Medium RSS feed before handing posts to the client experience.
- **AI-Assisted Engineering with Human Verification:** Functional specifications and persistent project context guide implementation; strict TypeScript, automated tests, and manual QA verify the result.

## Links

- [Live Website](https://doctorderek.com/)
- [Medium Blog (@DoctorDerek)](https://doctorderek.medium.com/)
- [GitHub (@DoctorDerek)](https://github.com/DoctorDerek)

## Local Development

Use [fnm](https://github.com/Schniz/fnm) for Node version management and [pnpm](https://pnpm.io/) as the package manager. In PowerShell:

```powershell
fnm env --use-on-cd | Out-String | Invoke-Expression
fnm use
corepack enable pnpm
pnpm install
pnpm dev
```

## Verification

### TypeScript lint coverage

The existing quality workflow uses [DoctorDerekCICD](https://github.com/DoctorDerek/DoctorDerekCICD) to check every Git-tracked `.ts`, `.tsx`, `.mts`, and `.cts` file against this repository’s effective ESLint configuration. Missing configuration or missing enabled TypeScript rules fails the guard. The scanner remains shared; `eslint.config.ts` owns this site’s rules and exceptions.

The [Next.js TypeScript preset](https://nextjs.org/docs/app/api-reference/config/eslint#with-typescript) supplies the TypeScript rules alongside the existing Next.js and React rules. Normal rule findings remain advisory through `eslint-plugin-only-warn`; missing TypeScript configuration or rules fails the shared guard. Fatal parsing diagnostics retain error severity locally. Strict TypeScript checking remains a separate gate: lint-configuration coverage is not type-aware linting or proof of runtime correctness.

Two scoped exceptions preserve necessary behavior:

- `components/ClientShell.tsx` permits synchronous `require()` calls only for local minified fullPage extension files. This preserves the documented [`pluginWrapper` initialization contract](https://github.com/alvarotrigo/react-fullpage#fullpagejs-extension-example). Other import paths and other source files still use the normal import rule.
- Four named component tests omit Next.js-only image props before forwarding remaining props to a native `img`. `ignoreRestSiblings` allows that intentional omission without hiding unused imports, ordinary parameters, or unused bindings elsewhere.

`__tests__/eslint.config.test.ts` exercises real ESLint diagnostics, valid typed JSX, and both sides of each exception. Generated outputs and private vendor assets remain ignored; authored TypeScript files remain covered.

### Local checks

Run the complete local quality gate before submitting changes:

```powershell
pnpm format
pnpm lint
pnpm exec tsc --noEmit
pnpm exec vitest run --coverage
pnpm build
pnpm test:e2e
pnpm audit --prod
```
