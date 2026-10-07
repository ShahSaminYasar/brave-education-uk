import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { readJsonBody } from "@/lib/http";

export async function GET() {
  try {
    const db = await getDb();
    const data = await db
      .collection("team_members")
      .find()
      .sort({ order: 1 })
      .toArray();

    return NextResponse.json({
      ok: true,
      message: "Fetch successful",
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

export async function POST(request) {
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const { name, role, photo } = await readJsonBody(request);

    if (!name || !photo) {
      return NextResponse.json(
        { ok: false, message: "Name and photo are required" },
        { status: 400 },
      );
    }

    const db = await getDb();
    const collection = db.collection("team_members");

    // New members go to the end of the display order.
    const last = await collection.findOne({}, { sort: { order: -1 } });
    const nextOrder = (last?.order ?? -1) + 1;

    const result = await collection.insertOne({
      name,
      role: role || "",
      photo,
      order: nextOrder,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (result?.insertedId) {
      revalidateTag("team-members", { expire: 0 });
      return NextResponse.json({
        ok: true,
        message: "Team member added successfully",
      });
    }

    return NextResponse.json(
      { ok: false, message: "Failed to add team member" },
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
    const { name, role, photo } = await readJsonBody(request);

    const updateDoc = {
      $set: {
        ...(name && { name }),
        ...(role !== undefined && { role }),
        ...(photo && { photo }),
        updatedAt: new Date(),
      },
    };

    const db = await getDb();
    const result = await db
      .collection("team_members")
      .updateOne({ _id: new ObjectId(id) }, updateDoc);

    if (result.matchedCount === 1) {
      revalidateTag("team-members", { expire: 0 });
      return NextResponse.json({
        ok: true,
        message: "Team member updated successfully",
      });
    }

    return NextResponse.json(
      { ok: false, message: "Team member not found" },
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
      .collection("team_members")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      revalidateTag("team-members", { expire: 0 });
      return NextResponse.json({
        ok: true,
        message: "Team member deleted successfully",
      });
    }

    return NextResponse.json(
      { ok: false, message: "Team member not found" },
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

/**
 * Reorders team members. Body: { order: [id1, id2, id3, ...] } - the array
 * position becomes the new `order` value for each id.
 */
export async function PATCH(request) {
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const { order } = await readJsonBody(request);

    if (!Array.isArray(order) || order.length === 0) {
      return NextResponse.json(
        { ok: false, message: "order must be a non-empty array of ids" },
        { status: 400 },
      );
    }

    const db = await getDb();
    const collection = db.collection("team_members");

    await Promise.all(
      order.map((id, index) =>
        collection.updateOne(
          { _id: new ObjectId(id) },
          { $set: { order: index, updatedAt: new Date() } },
        ),
      ),
    );

    revalidateTag("team-members", { expire: 0 });

    return NextResponse.json({
      ok: true,
      message: "Team order updated successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
