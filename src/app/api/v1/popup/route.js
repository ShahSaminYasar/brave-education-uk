import crypto from "node:crypto";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { readJsonBody } from "@/lib/http";

export async function POST(request) {
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const { title, image, link, type, excludedLinks = [] } =
      await readJsonBody(request);

    if (!title || !image || !link) {
      return NextResponse.json(
        { message: "Title, image and link are required." },
        { status: 400 },
      );
    }

    const db = await getDb();
    const popupsCollection = db.collection("popups");

    const check = await popupsCollection.find({ active: true }).toArray();

    if (check?.length > 0) {
      return NextResponse.json({
        ok: false,
        message: "Please deactivate all other popups first",
      });
    }

    const result = await popupsCollection.insertOne({
      title,
      image,
      link,
      type,
      active: true,
      views: 0,
      clicks: 0,
      excludedLinks,
      key: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (result?.insertedId) {
      return NextResponse.json(
        { ok: true, message: "Popup published successfully" },
        { status: 201 },
      );
    } else {
      return NextResponse.json(
        {
          ok: false,
          message: "Failed to publish the popup. Please try again.",
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

export async function GET(request) {
  const active = request.nextUrl.searchParams.get("active");

  try {
    const db = await getDb();
    const result = await db
      .collection("popups")
      .find({ ...(active && { active: true }) })
      .toArray();

    return NextResponse.json({ ok: true, data: result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

// NOTE: kept without admin auth to match current production behavior — see
// the migration plan's "Deliberate deviations" section. PopUpList.jsx does
// not send a token on this call today, so adding requireAdmin() here would
// break it.
export async function PATCH(request) {
  try {
    const { id, activeStatus } = await readJsonBody(request);
    const db = await getDb();
    const popupsCollection = db.collection("popups");

    if (activeStatus === true) {
      await popupsCollection.updateMany(
        { active: true },
        { $set: { active: false, updatedAt: new Date() } },
      );
    }

    const result = await popupsCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          active: activeStatus,
          updatedAt: new Date(),
          ...(activeStatus === true && { key: crypto.randomUUID() }),
        },
      },
    );

    if (result?.modifiedCount > 0) {
      return NextResponse.json({ ok: true, message: "Modification successful" });
    } else {
      return NextResponse.json({ ok: false, message: "Failed to update popup" });
    }
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
      .collection("popups")
      .deleteOne({ _id: new ObjectId(id) });

    if (result?.deletedCount > 0) {
      return NextResponse.json({ ok: true, message: "Deletion successful" });
    } else {
      return NextResponse.json({ ok: false, message: "Failed to delete popup" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
