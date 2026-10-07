import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { readJsonBody } from "@/lib/http";

export async function POST(request) {
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const {
      name,
      classNo,
      mockNo,
      duration,
      four,
      fees,
      offerFees,
      mode,
      image,
      bgColor,
      accentColor,
      link,
      waLink,
      id,
    } = await readJsonBody(request);

    const db = await getDb();
    const result = await db.collection("courses").insertOne({
      name,
      classNo,
      mockNo,
      duration,
      four,
      fees,
      offerFees,
      mode,
      image,
      bgColor,
      accentColor,
      link,
      waLink,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (result?.insertedId) {
      return NextResponse.json(
        { ok: true, message: "Course data inserted successfully" },
        { status: 201 },
      );
    } else {
      return NextResponse.json(
        {
          ok: false,
          message: "Failed to insert the course data. Please try again.",
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

export async function PUT(request) {
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const {
      name,
      classNo,
      mockNo,
      duration,
      four,
      fees,
      offerFees,
      mode,
      image,
      bgColor,
      accentColor,
      link,
      waLink,
      id,
      courseId,
    } = await readJsonBody(request);

    const db = await getDb();
    const result = await db.collection("courses").updateOne(
      { _id: new ObjectId(courseId) },
      {
        $set: {
          name,
          classNo,
          mockNo,
          duration,
          four,
          fees,
          offerFees,
          mode,
          image,
          bgColor,
          accentColor,
          link,
          waLink,
          id,
          updatedAt: new Date(),
        },
      },
    );

    if (result?.modifiedCount > 0) {
      return NextResponse.json(
        { ok: true, message: "Course data updated successfully" },
        { status: 201 },
      );
    } else {
      return NextResponse.json(
        {
          ok: false,
          message: "Failed to update the course data. Please try again.",
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
    const data = await db.collection("courses").find().toArray();

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

export async function DELETE(request) {
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { ok: false, message: "Course ID is required" },
        { status: 400 },
      );
    }

    const db = await getDb();
    const result = await db
      .collection("courses")
      .deleteOne({ _id: new ObjectId(id) });

    if (result?.deletedCount > 0) {
      return NextResponse.json({
        ok: true,
        message: "Course deleted successfully",
      });
    } else {
      return NextResponse.json(
        {
          ok: false,
          message: "Course not found or already deleted.",
        },
        { status: 404 },
      );
    }
  } catch (error) {
    console.error("Delete Error:", error);
    return NextResponse.json(
      { ok: false, message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
