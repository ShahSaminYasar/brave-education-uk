import { notFound } from "next/navigation";
import { getEventBySlug } from "@/lib/events";
import { toEventIsoString } from "@/lib/eventDisplay";
import EventHero from "@/components/events/EventHero";
import EventPerks from "@/components/events/EventPerks";
import EventCtaBand from "@/components/events/EventCtaBand";
import EventGallerySection from "@/components/events/EventGallerySection";

const SITE_URL = "https://www.braveeducationuk.com";

// DB-backed, no generateStaticParams - render on demand per request rather
// than Next attempting to statically pre-render this route at build time.
export const dynamic = "force-dynamic";

/**
 * `generateMetadata` fully resolves before Next starts streaming the
 * response, so this is where we must do the "does this event exist and is
 * it published" check and call `notFound()` - same reasoning as
 * `src/app/updates/[slug]/page.jsx`. This route also has its own dedicated
 * layout (no shared `(main)` Suspense boundary) as the structural half of
 * the fix; this check is the other half, needed regardless for correct
 * metadata on a 404. `getEventBySlug` is wrapped in React's `cache()`, so
 * this lookup and the one in the page body below share a single DB/cache
 * hit per request.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event || !event.published) notFound();

  return {
    title: event.title,
    description: event.hero?.description || event.title,
    robots: "index, follow",
    openGraph: {
      title: event.title,
      description: event.hero?.description || event.title,
      images: event.hero?.bgImage ? [{ url: event.hero.bgImage }] : undefined,
    },
  };
}

const buildEventSchema = (event) => {
  const startIso = toEventIsoString(event.startDate);
  // Google's structured data validator rejects an Event with no startDate -
  // skip emitting the block entirely rather than ship invalid markup.
  if (!startIso) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.hero?.description || event.title,
    startDate: startIso,
    ...(toEventIsoString(event.endDate) && { endDate: toEventIsoString(event.endDate) }),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Brave Education UK",
      address: {
        "@type": "PostalAddress",
        streetAddress: "129 Whitechapel Road",
        addressLocality: "London",
        postalCode: "E1 1DT",
        addressCountry: "GB",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Brave Education UK",
      url: SITE_URL,
    },
    ...(event.hero?.bgImage && { image: [event.hero.bgImage] }),
  };
};

const page = async ({ params }) => {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event || !event.published) notFound();

  const schema = buildEventSchema(event);

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <EventHero event={event} />
      <EventPerks perks={event.perks} />

      {event.content && (
        <section className="px-5 py-16">
          <div
            className="prose prose-sm sm:prose-base max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: event.content }}
          />
        </section>
      )}

      <EventCtaBand cta={event.cta} />
      <EventGallerySection gallery={event.gallery} eventTitle={event.title} />
    </>
  );
};

export default page;
