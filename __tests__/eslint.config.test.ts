import { ESLint } from "eslint"
import { beforeAll, describe, expect, it } from "vitest"

const eslint = new ESLint({ cwd: process.cwd() })
const fullPageExtensionPath =
  "@/vendor/fullPage_js_extensions_bundle/cinematic/fullpage.cinematic.core.min.js"

beforeAll(async () => {
  await eslint.calculateConfigForFile("app/page.tsx")
})

describe("TypeScript lint configuration", () => {
  it.each([
    "app/page.tsx",
    "components/ClientShell.tsx",
    "components/ui/Logo.tsx",
    "hooks/usePostLoadExperienceSchedule.ts",
    "machines/globalMachine.ts",
    "constants/STARTUP_TIMING.ts",
    "utils/errors.ts",
    "types/svg-url.d.ts",
    "scripts/ghost-assets/decryptGhostAssets.ts",
    "e2e/fonts.spec.ts",
    "__tests__/components/TopSection.test.tsx",
    "__tests__/eslint.config.test.ts",
    "eslint.config.ts",
    "next.config.ts",
    "playwright.config.ts",
    "vitest.config.ts",
    "utils/lintProbe.mts",
    "scripts/lintProbe.cts",
  ])(
    "reports an unsafe type in %s while preserving advisory severity",
    async (filePath) => {
      const [result] = await eslint.lintText("export type UnsafeValue = any", {
        filePath,
      })

      expect(result.messages).toEqual([
        expect.objectContaining({
          ruleId: "@typescript-eslint/no-explicit-any",
          severity: 1,
        }),
      ])
    },
  )

  it("reports unused imports instead of masking them in test files", async () => {
    const [result] = await eslint.lintText(
      'import { useRef } from "react"\nexport const value = 1',
      { filePath: "__tests__/components/TopSection.test.tsx" },
    )

    expect(result.messages).toEqual([
      expect.objectContaining({ ruleId: "@typescript-eslint/no-unused-vars" }),
    ])
  })

  it("retains React Hooks rules alongside TypeScript rules", async () => {
    const [result] = await eslint.lintText(
      'import { useState } from "react"; export default function Example({ active }: { active: boolean }) { if (active) useState(0); return null }',
      { filePath: "components/ui/Logo.tsx" },
    )

    expect(result.messages).toEqual([
      expect.objectContaining({ ruleId: "react-hooks/rules-of-hooks" }),
    ])
  })

  it("accepts valid typed JSX", async () => {
    const [result] = await eslint.lintText(
      "export default function Example({ name }: { name: string }) { return <span>{name}</span> }",
      { filePath: "components/ui/Logo.tsx" },
    )

    expect(result.messages).toEqual([])
  })

  it("keeps fatal parsing failures as errors", async () => {
    const [result] = await eslint.lintText("export const value =", {
      filePath: "constants/STARTUP_TIMING.ts",
    })

    expect(result.messages).toEqual([
      expect.objectContaining({ fatal: true, severity: 2 }),
    ])
  })
})

describe("fullPage extension initialization exception", () => {
  it.each([
    fullPageExtensionPath,
    "@/vendor/fullPage_js_extensions_bundle/cinematic/effects/burn.min.js",
    "@/vendor/fullPage_js_extensions_bundle/cards/fullpage.cards.min.js",
  ])(
    "allows synchronous initialization of %s in ClientShell",
    async (extensionPath) => {
      const [result] = await eslint.lintText(
        `export const initialize = () => { require("${extensionPath}") }`,
        { filePath: "components/ClientShell.tsx" },
      )

      expect(result.messages).toEqual([])
    },
  )

  it("lints the complete existing ClientShell without suppressing its source", async () => {
    const [result] = await eslint.lintFiles(["components/ClientShell.tsx"])

    expect(result.messages).toEqual([])
  })

  it.each([
    ["components/ui/Logo.tsx", fullPageExtensionPath],
    ["components/ClientShell.tsx", "react"],
    ["components/ClientShell.tsx", "node:fs"],
    ["components/ClientShell.tsx", "@/utils/errors"],
    ["components/ClientShell.tsx", "@/vendor/other-package/index.min.js"],
    [
      "components/ClientShell.tsx",
      "@/vendor/fullPage_js_extensions_bundle/cinematic/fullpage.js",
    ],
    [
      "components/ClientShell.tsx",
      "@/vendor/fullPage_js_extensions_bundle/../other-package/index.min.js",
    ],
  ])("rejects require in %s for %s", async (filePath, importPath) => {
    const [result] = await eslint.lintText(
      `export const initialize = () => { require("${importPath}") }`,
      { filePath },
    )

    expect(result.messages).toEqual([
      expect.objectContaining({
        ruleId: "@typescript-eslint/no-require-imports",
      }),
    ])
  })
})

describe("lint scope boundaries", () => {
  it.each([
    ".next/types/fixture.ts",
    "next-env.d.ts",
    "out/fixture.ts",
    "coverage/fixture.ts",
    "vendor/fixture.ts",
    "repomix-temp.private.ts",
  ])("keeps generated or private file %s ignored", async (filePath) => {
    expect(await eslint.isPathIgnored(filePath)).toBe(true)
  })

  it("does not apply TypeScript import rules to JavaScript tooling", async () => {
    const [result] = await eslint.lintText('require("node:fs")', {
      filePath: "scripts/lintProbe.cjs",
    })

    expect(result.messages).toEqual([])
  })
})

describe("image mock prop omission exception", () => {
  it.each([
    "__tests__/components/AboutSection.test.tsx",
    "__tests__/components/BlogSection.test.tsx",
    "__tests__/components/ContactSection.test.tsx",
    "__tests__/components/Testimonials.test.tsx",
  ])("permits intentional rest-sibling omission in %s", async (filePath) => {
    const [result] = await eslint.lintText(
      "export function omitFill({ fill, ...imageProps }: { fill: boolean; src: string }) { return imageProps }",
      { filePath },
    )

    expect(result.messages).toEqual([])
    const [existingFileResult] = await eslint.lintFiles([filePath])
    expect(existingFileResult.messages).toEqual([])
  })

  it("does not extend rest-sibling exceptions to production code", async () => {
    const [result] = await eslint.lintText(
      "export function omitFill({ fill, ...imageProps }: { fill: boolean; src: string }) { return imageProps }",
      { filePath: "components/AboutSection.tsx" },
    )

    expect(result.messages).toEqual([
      expect.objectContaining({ ruleId: "@typescript-eslint/no-unused-vars" }),
    ])
  })

  it.each([
    'import { useRef } from "react"\nexport const value = 1',
    "export function omitFill({ fill }: { fill: boolean }) { return {} }",
    'export const formatName = (_unused: string) => "image"',
  ])(
    "still reports unrelated unused bindings in image mocks: %s",
    async (source) => {
      const [result] = await eslint.lintText(source, {
        filePath: "__tests__/components/AboutSection.test.tsx",
      })

      expect(result.messages).toEqual([
        expect.objectContaining({
          ruleId: "@typescript-eslint/no-unused-vars",
        }),
      ])
    },
  )
})
