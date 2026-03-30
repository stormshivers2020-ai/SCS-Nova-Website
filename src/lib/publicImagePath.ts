/** URL path for a file in `public/` whose name may contain spaces or special characters. */
export function publicImagePath(filename: string): string {
  return `/${encodeURIComponent(filename)}`;
}
