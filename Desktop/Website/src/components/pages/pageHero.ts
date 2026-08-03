const pageHeroSectionBaseClassName =
  "relative flex items-center justify-center gradient-mesh grain overflow-hidden pt-24 md:pt-28 pb-12";

export function getPageHeroSectionClassName(
  minHeightClassName: string,
  extraClassName?: string,
) {
  return [pageHeroSectionBaseClassName, minHeightClassName, extraClassName]
    .filter((className) => Boolean(className?.trim()))
    .join(" ");
}

