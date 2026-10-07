/**
 * Pure, dependency-free slug helpers.
 */

/**
 * Turns arbitrary text into a clean kebab-case slug.
 * @param {string} text
 * @returns {string}
 */
export function slugify(text) {
  return (text || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Builds a URL slug from a title with a short random suffix, so two posts
 * titled the same never collide (e.g. "new-visa-rules-a1b2c3").
 * @param {string} title
 * @returns {string}
 */
export function generateSlug(title) {
  const base = slugify(title) || "post";
  const suffix = Math.random().toString(36).slice(2, 8);
  return `${base}-${suffix}`;
}
