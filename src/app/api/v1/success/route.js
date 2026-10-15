import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { readJsonBody } from "@/lib/http";
import { DEFAULT_SUCCESS_CATEGORY, SUCCESS_CATEGORIES } from "@/lib/successStories";

export async function POST(request) {
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const { video, image, category, country } = await readJsonBody(request);

    if (!SUCCESS_CATEGORIES.includes(category)) {
      return NextResponse.json(
        { ok: false, message: "A valid category is required." },
        { status: 400 },
      );
    }

    const db = await getDb();
    const result = await db.collection("success").insertOne({
      video,
      image,
      category,
      ...(category === "Immigration" && country ? { country } : {}),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (result?.insertedId) {
      revalidateTag("success-stories", { expire: 0 });
      return NextResponse.json({
        ok: true,
        message: "Success story added successfully",
      });
    } else {
      return NextResponse.json(
        {
          ok: false,
          message: "Failed to add the success story.",
        },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const db = await getDb();
    const result = await db
      .collection("success")
      .find()
      .sort({ updatedAt: -1 })
      .toArray();

    // Stories created before the category field existed have no category in
    // the database. Rather than a bulk migration, default them here at read
    // time so they still render under a section on the public page.
    const data = result.map((story) => ({
      ...story,
      category: story.category || DEFAULT_SUCCESS_CATEGORY,
    }));

    return NextResponse.json({
      ok: true,
      message: "Success stories fetched successfully.",
      data,
    });
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
      .collection("success")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      revalidateTag("success-stories", { expire: 0 });
      return NextResponse.json({
        ok: true,
        message: "Story deleted successfully",
      });
    } else {
      return NextResponse.json(
        { ok: false, message: "Story not found" },
        { status: 404 },
      );
    }
  } catch (error) {
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
    const { video, image, category, country } = await readJsonBody(request);

    if (category && !SUCCESS_CATEGORIES.includes(category)) {
      return NextResponse.json(
        { ok: false, message: "A valid category is required." },
        { status: 400 },
      );
    }

    const updateDoc = {
      $set: {
        ...(video && { video }),
        ...(image && { image }),
        ...(category && { category }),
        updatedAt: new Date(),
      },
    };

    if (category === "Immigration" && country) {
      updateDoc.$set.country = country;
    } else if (category && category !== "Immigration") {
      updateDoc.$unset = { country: "" };
    }

    const db = await getDb();
    const result = await db
      .collection("success")
      .updateOne({ _id: new ObjectId(id) }, updateDoc);

    if (result.modifiedCount === 1) {
      revalidateTag("success-stories", { expire: 0 });
      return NextResponse.json({
        ok: true,
        message: "Story updated successfully",
      });
    } else {
      return NextResponse.json(
        { ok: false, message: "No changes made or story not found" },
        { status: 400 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
