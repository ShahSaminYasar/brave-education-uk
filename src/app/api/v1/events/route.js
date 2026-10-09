import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { readJsonBody } from "@/lib/http";
import { generateSlug } from "@/lib/slug";

// Full rich-text `content` is intentionally excluded from the list
// projection - it's not needed there and can be large.
const LIST_PROJECTION = { content: 0 };

const normalizeHero = (hero = {}) => ({
  bgImage: hero?.bgImage || "",
  titleType: hero?.titleType === "image" ? "image" : "text",
  titleText: hero?.titleText || "",
  titleImage: hero?.titleImage || "",
  description: hero?.description || "",
  secondaryImage: hero?.secondaryImage || null,
  cta: {
    label: hero?.cta?.label || "",
    link: hero?.cta?.link || "",
    openInNewTab: !!hero?.cta?.openInNewTab,
  },
});

const normalizePerks = (perks = {}) => ({
  enabled: !!perks?.enabled,
  title: perks?.title || "",
  description: perks?.description || "",
  theme: perks?.theme === "centered" ? "centered" : "split",
  items: Array.isArray(perks?.items)
    ? perks.items.map((item) => ({
        icon: item?.icon || "",
        heading: item?.heading || "",
        description: item?.description || "",
      }))
    : [],
});

const normalizeGallery = (gallery = {}) => ({
  enabled: !!gallery?.enabled,
  title: gallery?.title || "",
  description: gallery?.description || "",
  images: Array.isArray(gallery?.images) ? gallery.images.filter(Boolean) : [],
});

// The standalone CTA (independent of hero.cta) is stored as `null`, not an
// empty object, whenever both fields are blank - the admin wizard always
// keeps a live `cta` object in its form state so every step can read
// `formData.cta.label` without null-checking while typing, but the API is
// where that gets collapsed back down to the schema's nullable shape.
const normalizeCta = (cta) => {
  const label = (cta?.label || "").trim();
  const link = (cta?.link || "").trim();
  if (!label && !link) return null;
  return { label, link, openInNewTab: !!cta?.openInNewTab };
};

export async function GET(request) {
  try {
    const slug = request.nextUrl.searchParams.get("slug");
    const all = request.nextUrl.searchParams.get("all") === "true";
    const db = await getDb();

    if (slug) {
      const event = await db.collection("events").findOne({ slug });

      if (!event) {
        return NextResponse.json(
          { ok: false, message: "Event not found" },
          { status: 404 },
        );
      }

      return NextResponse.json({
        ok: true,
        message: "Fetch successful",
        data: event,
      });
    }

    // Plain `GET /events` (no `all=true`) only ever returns published
    // events, so the endpoint is safe even if hit directly/unauthenticated.
    // `all=true` (used by the admin list page) includes drafts.
    const filter = all ? {} : { published: true };
    const events = await db
      .collection("events")
      .find(filter, { projection: LIST_PROJECTION })
      .sort({ startDate: 1 })
      .toArray();

    return NextResponse.json({
      ok: true,
      message: "Fetch successful",
      data: events,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const body = await readJsonBody(request);
    const { title, startDate, endDate, hero, perks, content, cta, gallery, published } = body;

    const normalizedHero = normalizeHero(hero);

    if (!title || !normalizedHero.bgImage || !startDate) {
      return NextResponse.json(
        {
          ok: false,
          message: "Title, hero background image and start date are required.",
        },
        { status: 400 },
      );
    }

    const db = await getDb();
    const result = await db.collection("events").insertOne({
      title,
      published: !!published,
      // Assigned once, here, and never touched again - public URLs must
      // stay stable across edits, unlike blog posts which regenerate theirs
      // on every PUT.
      slug: generateSlug(title),
      startDate,
      endDate: endDate || "",
      hero: normalizedHero,
      perks: normalizePerks(perks),
      content: content || "",
      cta: normalizeCta(cta),
      gallery: normalizeGallery(gallery),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (result?.insertedId) {
      revalidateTag("events", { expire: 0 });
      return NextResponse.json({
        ok: true,
        message: "Event created successfully",
      });
    }

    return NextResponse.json(
      { ok: false, message: "Failed to create event" },
      { status: 500 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function PUT(request) {
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const id = request.nextUrl.searchParams.get("id");
    const body = await readJsonBody(request);
    const { title, startDate, endDate, hero, perks, content, cta, gallery, published } = body;

    if (!title || !hero?.bgImage || !startDate) {
      return NextResponse.json(
        {
          ok: false,
          message: "Title, hero background image and start date are required.",
        },
        { status: 400 },
      );
    }

    const updateDoc = {
      $set: {
        title,
        startDate,
        endDate: endDate || "",
        hero: normalizeHero(hero),
        perks: normalizePerks(perks),
        content: content || "",
        cta: normalizeCta(cta),
        gallery: normalizeGallery(gallery),
        ...(published !== undefined && { published: !!published }),
        updatedAt: new Date(),
        // Deliberately no `slug` here - see the POST handler's comment.
      },
    };

    const db = await getDb();
    const result = await db
      .collection("events")
      .updateOne({ _id: new ObjectId(id) }, updateDoc);

    if (result.matchedCount === 1) {
      revalidateTag("events", { expire: 0 });
      return NextResponse.json({
        ok: true,
        message: "Event updated successfully",
      });
    }

    return NextResponse.json(
      { ok: false, message: "Event not found" },
      { status: 404 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

// Quick publish/unpublish toggle from the admin list page, without going
// through the full wizard payload.
export async function PATCH(request) {
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const id = request.nextUrl.searchParams.get("id");
    const { published } = await readJsonBody(request);

    if (typeof published !== "boolean") {
      return NextResponse.json(
        { ok: false, message: "published must be a boolean" },
        { status: 400 },
      );
    }

    const db = await getDb();
    const result = await db
      .collection("events")
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: { published, updatedAt: new Date() } },
      );

    if (result.matchedCount === 1) {
      revalidateTag("events", { expire: 0 });
      return NextResponse.json({
        ok: true,
        message: published ? "Event published" : "Event unpublished",
      });
    }

    return NextResponse.json(
      { ok: false, message: "Event not found" },
      { status: 404 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function DELETE(request) {
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const id = request.nextUrl.searchParams.get("id");
    const db = await getDb();
    const result = await db
      .collection("events")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      revalidateTag("events", { expire: 0 });
      return NextResponse.json({
        ok: true,
        message: "Event deleted successfully",
      });
    }

    return NextResponse.json(
      { ok: false, message: "Event not found" },
      { status: 404 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
