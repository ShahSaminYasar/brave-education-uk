import { NextResponse } from "next/server";

/**
 * Call at the top of any recaptcha-gated Route Handler.
 * Returns a NextResponse to `return` immediately if verification failed, or
 * null if OK.
 */
export async function verifyRecaptcha(request) {
  const token = request.nextUrl.searchParams.get("captoken");
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const verificationResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      { method: "POST" },
    );

    const verification = await verificationResponse.json();

    if (verification.success === true) {
      return null;
    }

    return NextResponse.json({
      ok: false,
      message: "ReCaptcha Verification Failed",
      verification,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: String(error),
        message: error?.message || "ERROR: ReCaptcha Verification Failed",
      },
      { status: 403 },
    );
  }
}
