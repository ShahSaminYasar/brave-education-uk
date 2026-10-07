import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { readJsonBody } from "@/lib/http";

export async function POST(request) {
  const captchaFail = await verifyRecaptcha(request);
  if (captchaFail) return captchaFail;

  try {
    const { text } = await readJsonBody(request);
    const db = await getDb();
    const result = await db.collection("complaints").insertOne({
      text,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (result?.insertedId) {
      return NextResponse.json({
        ok: true,
        message: "Complaint sent successfully",
      });
    } else {
      return NextResponse.json(
        {
          ok: false,
          message: "Failed to send the complaint.",
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
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const db = await getDb();
    const result = await db
      .collection("complaints")
      .find()
      .sort({ updatedAt: -1 })
      .toArray();

    return NextResponse.json({
      ok: true,
      message: "Complaints fetched successfully.",
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
