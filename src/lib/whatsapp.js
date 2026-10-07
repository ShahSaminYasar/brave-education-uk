/**
 * Pure, dependency-free helpers for building wa.me links.
 *
 * IMPORTANT: This file must never import DB clients or `next/cache` — it is
 * imported directly by client components (e.g. the floating WhatsApp CTA)
 * and would otherwise get pulled into the client bundle and break the build.
 * Any component that needs contact data should receive it as a prop from a
 * server component ancestor and just call these helpers with that data.
 */

/**
 * Builds a wa.me deep link from a dial number and optional prefilled text.
 * @param {string} dial - phone number in any format (spaces/+ allowed)
 * @param {string} [text] - optional prefilled message
 * @returns {string}
 */
export function buildWhatsAppLink(dial, text) {
  const digitsOnly = (dial || "").replace(/[^0-9]/g, "");
  const base = `https://wa.me/${digitsOnly}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
