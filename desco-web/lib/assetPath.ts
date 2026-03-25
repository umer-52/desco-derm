const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefix public folder paths for static export + basePath. Next.js prefixes
 * `Link` hrefs but `next/image` and raw `<a href>` can emit root-relative URLs
 * without the segment, so requests miss on GitHub Pages (e.g. /products/... vs
 * /desco-derm/products/...).
 */
export function publicAsset(path: string): string {
  if (!path.startsWith("/")) {
    return `${BASE_PATH}/${path}`;
  }
  return `${BASE_PATH}${path}`;
}
