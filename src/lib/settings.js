import { unstable_cache } from "next/cache";
import { getDb } from "./mongodb";
import {
  DEFAULT_CONTACT_SETTINGS,
  DEFAULT_GENERAL_SETTINGS,
} from "./contactDefaults";

export { DEFAULT_CONTACT_SETTINGS, DEFAULT_GENERAL_SETTINGS };

function mergeContactSettings(doc) {
  return {
    phones:
      Array.isArray(doc?.phones) && doc.phones.length > 0
        ? doc.phones
        : DEFAULT_CONTACT_SETTINGS.phones,
    whatsapp: {
      ...DEFAULT_CONTACT_SETTINGS.whatsapp,
      ...(doc?.whatsapp || {}),
    },
    socials: {
      ...DEFAULT_CONTACT_SETTINGS.socials,
      ...(doc?.socials || {}),
    },
  };
}

async function fetchContactSettings() {
  const db = await getDb();
  const doc = await db.collection("settings").findOne({ _id: "contact" });
  return mergeContactSettings(doc);
}

async function fetchGeneralSettings() {
  const db = await getDb();
  const doc = await db.collection("settings").findOne({ _id: "general" });
  return {
    introVideoUrl:
      doc?.introVideoUrl || DEFAULT_GENERAL_SETTINGS.introVideoUrl,
  };
}

/**
 * Cached contact settings reader. Tagged "contact-settings" - call
 * `revalidateTag("contact-settings")` from the admin save route whenever the
 * document changes so pages pick up the new values immediately without a
 * rebuild, while still being statically generated in between edits.
 */
export const getContactSettings = unstable_cache(
  fetchContactSettings,
  ["contact-settings"],
  { tags: ["contact-settings"] },
);

/**
 * Cached general settings reader (currently just the intro/home video URL).
 * Tagged "general-settings".
 */
export const getGeneralSettings = unstable_cache(
  fetchGeneralSettings,
  ["general-settings"],
  { tags: ["general-settings"] },
);
