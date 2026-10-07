import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { readJsonBody } from "@/lib/http";

export async function POST(request) {
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const { video, image } = await readJsonBody(request);
    const db = await getDb();
    const result = await db.collection("success").insertOne({
      video,
      image,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (result?.insertedId) {
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

    return NextResponse.json({
      ok: true,
      message: "Success stories fetched successfully.",
      data: result,
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
    const { video, image } = await readJsonBody(request);

    const updateDoc = {
      $set: {
        ...(video && { video }),
        ...(image && { image }),
        updatedAt: new Date(),
      },
    };

    const db = await getDb();
    const result = await db
      .collection("success")
      .updateOne({ _id: new ObjectId(id) }, updateDoc);

    if (result.modifiedCount === 1) {
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
