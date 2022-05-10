[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=pokedex-doctorderek)](https://pokedex-doctorderek.vercel.app/) [![codecov](https://codecov.io/gh/DoctorDerek/pokedex/branch/main/graph/badge.svg?token=3gfQ4azgws)](https://codecov.io/gh/DoctorDerek/pokedex) [![Build Status](https://app.travis-ci.com/DoctorDerek/pokedex.svg?branch=main)](https://app.travis-ci.com/DoctorDerek/pokedex)

# 🃏 Pokédex - Next.js 12 + React 18 + Tailwind CSS + XState + Login Mockup

# 👀 View Production Build at https://pokedex-doctorderek.vercel.app/

I built a Pokédex that queries a GraphQL endpoint at https://graphql-pokemon2.vercel.app/

Additionally, I added 3 other major features, including best practices and XState for login.

Below you will find the complete feature set, a discussion section, and my technical journal.

## Required Features

1. ✅ Ability to create forms
2. ✅ Ability to implement the various form states (field validation, error, success etc)
3. ✅ Ability to implement style to spec
4. ✅ Responsiveness
5. ✅ Ability to use Graphql correctly
6. ✅ Ability to integrate a real API
7. ✅ Ability to implement a pagination API
8. ✅ Clean-code and separation of component concerns
9. ✅ Ability to design new UIs

## Additional Features

### ✅ === DONE

### 🌠 === TODO

1. ✅ Deployed production build of Next.js to Vercel with CI/CD
2. ✅ Used Next.js version 12.1.6 with React 18.1.0 and Tailwind CSS 3.0.24
3. ✅ Established engineering best practices:
   - Prettier, ESLint, Husky (Git Hooks), `tsconfig.json`, TypeScript Import Sorter, XState
4. 🌠 Crafted unit tests for new code features (TDD / Test Driven Development)
   - Jest + React Testing Library with React Test Renderer
5. 🌠 Wrote unit testing (100% test coverage)
6. 🌠 Developed mobile-first, responsive UX design with Tailwind CSS
7. 🌠 Implemented Tailwind CSS dark mode for app with animated SVG toggle

## Discussion Section

1. The feature set is complete, but the app could use additional features and testing.
2. I wrote the login feature to save the authenticated user to localStorage via XState.
3. There are optimizations possible for the pagination and data-fetching algorithms.
4. Overall the app's performance is good because of Next.js SSR + use of next/image.

## Test Coverage Report - Jest & React Testing Library

### `yarn run test`

Launches the test runner and generates code coverage report.

### `yarn test:watch`

Launches the test runner in the interactive watch mode.

## Technical Journal

- `0.1.0` Bootstrapped with create-next-app (TypeScript)
- `0.2.0` Added all best practices & basic dependencies
- `0.3.0` Implemented data fetching, login, and Pokédex
- `0.4.0` Redirected / to /1 with SSR via getStaticProps
- `0.5.0` Highlight active Pokémon & current page number
- `0.6.0` Improve display of sidebar for edge case #151
- `0.7.0` Correct behavior of Prev and Next page buttons
- `0.8.0` Disable broken tests and write basic util test
