import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { sendMail, renderEmailShell } from "@/lib/mail";
import { readJsonBody } from "@/lib/http";
import { getContactSettings } from "@/lib/settings";

export async function POST(request) {
  try {
    const data = await readJsonBody(request);
    data.createdAt = new Date();
    const contact = await getContactSettings();
    const primaryPhone = contact?.phones?.[0];

    const db = await getDb();
    const result = await db.collection("visa-applications").insertOne(data);

    if (result?.insertedId) {
      await sendMail(
        data?.email,
        "Visa application submitted",
        renderEmailShell({
          heading: "Visa Application Received",
          bodyHtml: `
                <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#333;">
                  Hello <strong>${data?.firstName} ${data?.lastName}</strong>,
                </p>

                <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#333;">
                  Thank you for submitting your visa application through Brave Education UK. We have successfully received your application and will begin processing it shortly.
                </p>

                <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#333;">
                  <strong>What happens next?</strong><br>
                  Our team will review your application and contact you within 2-3 business days with the next steps. Please ensure all required documents are ready for submission.
                </p>

                <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#333;">
                  If you have any questions or need to provide additional information, please contact our support team at <a href="tel:${primaryPhone?.dial}" style="color:#e02f33; text-decoration:none;">${primaryPhone?.display}</a> or reply to this email.
                </p>

                <p style="margin:0 0 10px 0; font-size:16px; line-height:1.6; color:#333;">
                  Best regards,
                </p>
                <p style="margin:0; font-size:16px; line-height:1.6; color:#333;">
                  <strong>Brave Education UK</strong> Team
                </p>`,
        }),
      );
      return NextResponse.json(
        {
          ok: true,
          message: "Visa application submitted successfully.",
        },
        { status: 201 },
      );
    } else {
      return NextResponse.json(
        {
          ok: false,
          message: "Failed to submit the visa application. Please try again.",
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
      .collection("visa-applications")
      .find()
      .sort({ _id: -1 })
      .toArray();

    return NextResponse.json({ ok: true, data: result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
