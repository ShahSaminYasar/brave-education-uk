import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { readJsonBody } from "@/lib/http";

export async function PUT(request) {
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const {
      bg,
      hero,
      title,
      description,
      keyPoints,
      badge,
      button,
      active,
      themeColor,
      page = "courses",
    } = await readJsonBody(request);

    const db = await getDb();
    const result = await db.collection("banners").updateOne(
      { page: "courses" },
      {
        $set: {
          bg,
          hero,
          title,
          description,
          keyPoints,
          badge,
          button,
          page,
          active,
          themeColor,
        },
      },
      { upsert: true },
    );

    if (result?.upsertedCount > 0 || result?.modifiedCount > 0) {
      return NextResponse.json({
        ok: true,
        message: "Courses' banner modified successfully",
      });
    } else {
      return NextResponse.json(
        {
          ok: false,
          message: "Failed to modify courses' banner.",
        },
        { status: 500 },
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
