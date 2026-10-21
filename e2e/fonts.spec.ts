import { expect, test, type Page } from "@playwright/test"
import { DEFERRED_TYPOGRAPHY_DELAY_MILLISECONDS } from "@/constants/STARTUP_TIMING"
import {
  RESTORA_DISPLAY_CSS_VARIABLE,
  RESTORA_FALLBACK_CSS_VARIABLE,
  RESTORA_READY_CLASSES,
  RESTORA_TEXT_CSS_VARIABLE,
  RESTORA_TEXT_FONT_WEIGHTS,
} from "@/constants/TYPOGRAPHY"
import {
  completePostLoadBoundary,
  installPostLoadExperienceController,
  waitForPostLoadBoundary,
} from "@/e2e/helpers/postLoadExperience"

const collectFontAssetUrls = (page: Page) => {
  const fontAssetUrls: string[] = []

  page.on("request", (request) => {
    if (request.resourceType() === "font") fontAssetUrls.push(request.url())
  })

  return fontAssetUrls
}

const getBundledFontAssetUrlsByExtension = (
  fontAssetUrls: string[],
  extension: string,
) =>
  fontAssetUrls.filter((fontAssetUrl) => {
    const fontAssetPath = new URL(fontAssetUrl).pathname

    return (
      fontAssetPath.startsWith("/_next/static/media/") &&
      fontAssetPath.endsWith(extension)
    )
  })

const getPrimaryHeadingFontFamily = (page: Page) =>
  page
    .getByRole("heading", { level: 1 })
    .evaluate((heading) => getComputedStyle(heading).fontFamily)

const getCssVariableValue = (page: Page, cssVariable: string) =>
  page.evaluate(
    (expectedCssVariable) =>
      getComputedStyle(document.body)
        .getPropertyValue(expectedCssVariable)
        .trim(),
    cssVariable,
  )

const normalizeFontFamilyList = (fontFamilyList: string) =>
  fontFamilyList.replaceAll(/["']/g, "").replaceAll(/\s*,\s*/g, ",")

const getRestoraFontFamily = (page: Page, cssVariable: string) =>
  getCssVariableValue(page, cssVariable)
    .then((fontFamily) => fontFamily.split(",", 1)[0])
    .then((fontFamily) => fontFamily.replace(/^["']|["']$/g, ""))

const hasLoadedRestoraFontWeights = async (
  page: Page,
  cssVariable: string,
  fontWeights: number[],
) => {
  const restoraFontFamily = await getRestoraFontFamily(page, cssVariable)

  return page.evaluate(
    ({ expectedFontFamily, expectedFontWeights }) =>
      expectedFontWeights.every((fontWeight) =>
        document.fonts.check(`${fontWeight} 1em ${expectedFontFamily}`),
      ),
    { expectedFontFamily: restoraFontFamily, expectedFontWeights: fontWeights },
  )
}

const hasRootClass = (page: Page, className: string) =>
  page.evaluate(
    (expectedClassName) =>
      document.documentElement.classList.contains(expectedClassName),
    className,
  )

const verifyDeferredRestoraLoading = async (
  page: Page,
  shouldVerifyNetworkRequests: boolean,
) => {
  const fontAssetUrls = collectFontAssetUrls(page)
  await installPostLoadExperienceController(page)

  await page.goto("/", { waitUntil: "networkidle" })

  const displayFontFamily = await getRestoraFontFamily(
    page,
    RESTORA_DISPLAY_CSS_VARIABLE,
  )
  const initialPrimaryHeadingFontFamily =
    await getPrimaryHeadingFontFamily(page)
  expect(normalizeFontFamilyList(initialPrimaryHeadingFontFamily)).toBe(
    normalizeFontFamilyList(
      await getCssVariableValue(page, RESTORA_FALLBACK_CSS_VARIABLE),
    ),
  )
  expect(initialPrimaryHeadingFontFamily).not.toContain(displayFontFamily)
  const initialWoff2AssetUrls = getBundledFontAssetUrlsByExtension(
    fontAssetUrls,
    ".woff2",
  )
  const initialWoff2RequestCount = initialWoff2AssetUrls.length
  if (shouldVerifyNetworkRequests) {
    expect(initialWoff2AssetUrls).toEqual([])
    expect(getBundledFontAssetUrlsByExtension(fontAssetUrls, ".otf")).toEqual(
      [],
    )
  }

  await waitForPostLoadBoundary(page, DEFERRED_TYPOGRAPHY_DELAY_MILLISECONDS)
  await completePostLoadBoundary(page, DEFERRED_TYPOGRAPHY_DELAY_MILLISECONDS)

  await expect
    .poll(() =>
      Promise.all(
        Object.values(RESTORA_READY_CLASSES).map((readyClass) =>
          hasRootClass(page, readyClass),
        ),
      ).then((readyClasses) => readyClasses.every(Boolean)),
    )
    .toBe(true)
  if (shouldVerifyNetworkRequests) {
    expect(
      getBundledFontAssetUrlsByExtension(fontAssetUrls, ".woff2"),
    ).toHaveLength(initialWoff2RequestCount + 3)
    expect(getBundledFontAssetUrlsByExtension(fontAssetUrls, ".otf")).toEqual(
      [],
    )
  }
  expect(
    await hasLoadedRestoraFontWeights(
      page,
      RESTORA_TEXT_CSS_VARIABLE,
      Object.values(RESTORA_TEXT_FONT_WEIGHTS),
    ),
  ).toBe(true)
  expect(await getPrimaryHeadingFontFamily(page)).toContain(displayFontFamily)
  expect(
    await page
      .locator(".restoramedium")
      .first()
      .evaluate((element) => ({
        family: getComputedStyle(element).fontFamily.toLowerCase(),
        weight: getComputedStyle(element).fontWeight,
      })),
  ).toMatchObject({ family: expect.stringContaining("restora"), weight: "500" })
}

test.describe("deferred licensed typography", () => {
  for (const viewport of [
    { name: "mobile", width: 390, height: 844 },
    { name: "desktop", width: 1440, height: 900 },
  ]) {
    test(`${viewport.name} defers all Restora faces until after the quiet period`, async ({
      page,
    }) => {
      await page.setViewportSize(viewport)
      await verifyDeferredRestoraLoading(page, viewport.name === "mobile")
    })
  }
})
