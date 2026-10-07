import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { readJsonBody } from "@/lib/http";

export async function PATCH(request) {
  try {
    const { id, value } = await readJsonBody(request);
    const fieldToInc = value === "clicks" ? "clicks" : "views";

    const db = await getDb();
    const result = await db
      .collection("popups")
      .updateOne({ _id: new ObjectId(id) }, { $inc: { [fieldToInc]: 1 } });

    if (result?.modifiedCount > 0) {
      return NextResponse.json({ ok: true, message: "Modification successful" });
    } else {
      return NextResponse.json({
        ok: false,
        message: "Failed to update popup count",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
