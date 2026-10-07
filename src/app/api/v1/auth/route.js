import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { readJsonBody } from "@/lib/http";

export async function POST(request) {
  try {
    const { uname, pass, token } = await readJsonBody(request);
    const db = await getDb();
    const tokensCollection = db.collection("tokens");

    if (token) {
      const check = await tokensCollection.findOne({ token });

      if (!check || !check?.validTill) {
        return NextResponse.json({
          ok: false,
          message: "Invalid token",
        });
      }

      if (check?.validTill - Date.now() > 0) {
        return NextResponse.json({
          ok: true,
          message: "Authenticated",
        });
      } else {
        return NextResponse.json({
          ok: false,
          message: "Expired token",
        });
      }
    }

    if (
      uname !== process.env.ADMIN_USERNAME ||
      pass !== process.env.ADMIN_PASSWORD
    ) {
      return NextResponse.json({
        ok: false,
        message: "Invalid Credentials",
      });
    }

    const newToken = {
      token: crypto.randomUUID(),
      validTill: Date.now() + 604800000,
    };

    const insertToken = await tokensCollection.insertOne(newToken);

    if (insertToken?.insertedId) {
      return NextResponse.json({
        ok: true,
        message: "Logged in as Admin",
        token: newToken.token,
      });
    } else {
      return NextResponse.json({
        ok: false,
        message: "Token insertion failed",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
