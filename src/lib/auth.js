import { NextResponse } from "next/server";
import { getDb } from "./mongodb";

export async function isAdminTokenValid(token) {
  if (!token) return false;

  const db = await getDb();
  const check = await db.collection("tokens").findOne({ token });

  return !!(check?.validTill && check.validTill - Date.now() > 0);
}

/**
 * Call at the top of any admin-protected Route Handler.
 * Returns a NextResponse to `return` immediately if unauthorized, or null if OK.
 */
export async function requireAdmin(request) {
  const token = request.nextUrl.searchParams.get("token");

  if (!(await isAdminTokenValid(token))) {
    return NextResponse.json(
      { ok: false, message: "Authorization failed" },
      { status: 403 },
    );
  }

  return null;
}
