import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { readJsonBody } from "@/lib/http";
import { getContactSettings } from "@/lib/settings";

export async function GET() {
  try {
    const data = await getContactSettings();
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
    const { phones, whatsapp, socials } = await readJsonBody(request);

    const db = await getDb();
    await db.collection("settings").updateOne(
      { _id: "contact" },
      {
        $set: {
          phones: Array.isArray(phones) ? phones : [],
          whatsapp: whatsapp || {},
          socials: socials || {},
          updatedAt: new Date(),
        },
      },
      { upsert: true },
    );

    revalidateTag("contact-settings", { expire: 0 });

    return NextResponse.json({
      ok: true,
      message: "Contact information updated successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
