import { cache } from "react";
import { unstable_cache } from "next/cache";
import { getDb } from "./mongodb";

// Full rich-text `content` is intentionally excluded from the list
// projection - it's not needed on the index page and can be large.
const LIST_PROJECTION = { content: 0 };

function serializeEvent(event) {
  if (!event) return null;
  return {
    ...event,
    _id: event._id.toString(),
    createdAt: event.createdAt?.toISOString?.() || event.createdAt,
    updatedAt: event.updatedAt?.toISOString?.() || event.updatedAt,
  };
}

async function fetchPublishedEvents() {
  const db = await getDb();
  const events = await db
    .collection("events")
    .find({ published: true }, { projection: LIST_PROJECTION })
    .sort({ startDate: 1 })
    .toArray();

  return events.map(serializeEvent);
}

async function fetchEventBySlug(slug) {
  const db = await getDb();
  const event = await db.collection("events").findOne({ slug });
  return serializeEvent(event);
}

/**
 * Cached list reader (published only, soonest-upcoming first, no `content`
 * field). Tagged "events" - call `revalidateTag("events", { expire: 0 })`
 * from the admin create/update/publish-toggle/delete routes so /events
 * picks up changes immediately.
 */
export const getPublishedEvents = unstable_cache(
  fetchPublishedEvents,
  ["published-events"],
  { tags: ["events"] },
);

const getCachedEventBySlug = unstable_cache(
  fetchEventBySlug,
  ["event-by-slug"],
  { tags: ["events"] },
);

/**
 * Cached by-slug reader, additionally wrapped in React's `cache()` so that
 * within a single request, `generateMetadata` and the page body share one
 * DB/cache lookup instead of hitting it twice. Returns the event regardless
 * of `published` - both callers must check that themselves and call
 * `notFound()` for an unpublished/missing slug (see events/[slug]).
 */
export const getEventBySlug = cache(getCachedEventBySlug);
