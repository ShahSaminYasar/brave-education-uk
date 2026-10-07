import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { readJsonBody } from "@/lib/http";
import { getGeneralSettings } from "@/lib/settings";

export async function GET() {
  try {
    const data = await getGeneralSettings();
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

export async function PUT(request) {
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const { introVideoUrl } = await readJsonBody(request);

    const db = await getDb();
    await db.collection("settings").updateOne(
      { _id: "general" },
      {
        $set: {
          introVideoUrl: introVideoUrl || "",
          updatedAt: new Date(),
        },
      },
      { upsert: true },
    );

    revalidateTag("general-settings", { expire: 0 });

    return NextResponse.json({
      ok: true,
      message: "General settings updated successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
