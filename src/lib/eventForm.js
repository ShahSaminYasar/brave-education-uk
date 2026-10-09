/**
 * Pure, dependency-free helpers for the admin Events wizard's form state.
 * Kept separate from `lib/events.js` (which imports the Mongo client and
 * `next/cache`) so this can be imported straight into client components.
 */

/**
 * The wizard's live form state always matches this exact shape. Every step
 * component can read e.g. `formData.cta.label` or `formData.hero.cta.link`
 * without null-checking while the admin is typing, even though the API
 * legitimately stores the standalone `cta` as `null` once saved (see
 * `mergeEventIntoForm` below for why that matters).
 */
export function emptyEventForm() {
  return {
    title: "",
    published: false,
    startDate: "",
    endDate: "",
    hero: {
      bgImage: "",
      titleType: "text",
      titleText: "",
      titleImage: "",
      description: "",
      secondaryImage: null,
      cta: { label: "", link: "", openInNewTab: false },
    },
    perks: {
      enabled: false,
      title: "",
      description: "",
      theme: "split",
      items: [],
    },
    content: "",
    cta: { label: "", link: "", openInNewTab: false },
    gallery: {
      enabled: false,
      title: "",
      description: "",
      images: [],
    },
  };
}

/**
 * Shallow-merges a loaded event doc over the empty-form defaults for
 * editing. Deliberately NOT just `{ ...emptyEventForm(), ...event }` -
 * a plain spread would let the loaded doc's `cta: null` (the normal,
 * correct value for an event with no standalone CTA set) clobber the
 * default `cta` object, and every step reading `formData.cta.label` would
 * throw the moment an admin opened that event for editing. This bit the
 * BD site in production; the explicit `cta` fallback below is the fix.
 *
 * Same reasoning applies one level down for `hero` and its own nested
 * `cta`, and for `perks`/`gallery` - a partially-shaped loaded doc (e.g.
 * from before a field existed) must not blow up the merge either.
 */
export function mergeEventIntoForm(event) {
  const empty = emptyEventForm();
  if (!event) return empty;

  return {
    ...empty,
    ...event,
    startDate: event.startDate || empty.startDate,
    endDate: event.endDate || empty.endDate,
    hero: {
      ...empty.hero,
      ...event.hero,
      cta: event.hero?.cta || empty.hero.cta,
    },
    perks: {
      ...empty.perks,
      ...event.perks,
      items: Array.isArray(event.perks?.items) ? event.perks.items : empty.perks.items,
    },
    cta: event.cta || empty.cta,
    gallery: {
      ...empty.gallery,
      ...event.gallery,
      images: Array.isArray(event.gallery?.images) ? event.gallery.images : empty.gallery.images,
    },
  };
}
