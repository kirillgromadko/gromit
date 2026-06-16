const CDN = "https://gromitstroy.by/wp-content/uploads";

export const images = {
  hero: "/images/hero.jpg",
  logo: "/logo.png",
} as const;

/** Подсказки для object-position, если кадр обрезается неудачно */
export const imageFocus: Record<string, string> = {
  [`${CDN}/2023/01/nerj.jpg`]: "center 30%",
  [`${CDN}/2023/01/kowka.jpg`]: "center 40%",
  [`${CDN}/2023/01/steklo.jpg`]: "center center",
  [`${CDN}/2023/10/cher-met.jpg`]: "center 35%",
  [`${CDN}/2026/05/lazer.jpg`]: "center center",
  [`${CDN}/2026/05/lazer-bg.jpg`]: "center center",
  [`${CDN}/2023/01/skameiki.jpg`]: "center 45%",
  [`${CDN}/2023/01/perila-lestnichnie.jpg`]: "center center",
  "/images/hero.jpg": "center center",
  [`${CDN}/2023/01/shema-scaled.jpg`]: "center center",
};

export function getImageFocus(src: string): string {
  return imageFocus[src] ?? "center center";
}
