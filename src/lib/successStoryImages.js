import { unstable_cache } from "next/cache";
import { getDb } from "./mongodb";

async function fetchSuccessStoryImages() {
  const db = await getDb();
  const stories = await db
    .collection("success")
    .find({}, { projection: { image: 1 } })
    .toArray();

  return stories.map((story) => story.image).filter(Boolean);
}

/**
 * Cached list of every success story's image URL. Stories have no
 * individual detail pages, so sitemap.js attaches every photo here to the
 * single /success-stories listing URL. Tagged "success-stories" - call
 * `revalidateTag("success-stories", { expire: 0 })` from the admin
 * create/update/delete routes so the sitemap picks up changes.
 */
export const getSuccessStoryImages = unstable_cache(
  fetchSuccessStoryImages,
  ["success-story-images"],
  { tags: ["success-stories"] },
);
