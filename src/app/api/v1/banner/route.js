import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function GET(request) {
  try {
    const page = request.nextUrl.searchParams.get("page");
    const db = await getDb();
    const data = await db.collection("banners").find({ page }).toArray();

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
