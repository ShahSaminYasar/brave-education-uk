import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { sendMail, renderEmailShell } from "@/lib/mail";
import { readJsonBody } from "@/lib/http";
import { getContactSettings } from "@/lib/settings";

export async function POST(request) {
  const captchaFail = await verifyRecaptcha(request);
  if (captchaFail) return captchaFail;

  try {
    const { name, phone, email, message } = await readJsonBody(request);
    const contact = await getContactSettings();
    const primaryPhone = contact?.phones?.[0];

    if (!name || !phone || !email) {
      return NextResponse.json(
        { message: "Name, phone, and email are required." },
        { status: 400 },
      );
    }

    const db = await getDb();
    const result = await db.collection("messages").insertOne({
      name,
      phone,
      email,
      message,
      createdAt: new Date(),
    });

    if (result?.insertedId) {
      await sendMail(
        email,
        "We got your message!",
        renderEmailShell({
          heading: "Thank You for Contacting Us",
          bodyHtml: `
                <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#333;">
                  Hello <strong>${name}</strong>,
                </p>

                <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#333;">
                  Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.
                </p>

                <!-- Original Message Quote -->
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:20px 0; border-left:4px solid #e02f33; background-color:#f8f9fa;">
                  <tr>
                    <td style="padding:15px;">
                      <p style="margin:0 0 10px 0; font-size:14px; color:#666; font-style:italic;">
                        In response to your message:
                      </p>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff; border:1px solid #e9ecef; border-radius:4px;">
                        <tr>
                          <td style="padding:15px; font-size:14px; line-height:1.5; color:#555;">
                            ${message}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#333;">
                  We typically respond within 6-48 hours. If you have any urgent inquiries, please feel free to contact us directly at <a href="tel:${primaryPhone?.dial}" style="color:#e02f33; text-decoration:none;">${primaryPhone?.display}</a>.
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
        { ok: true, message: "Message sent successfully." },
        { status: 201 },
      );
    } else {
      return NextResponse.json(
        { ok: false, message: "Failed to send message. Please try again." },
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
      .collection("messages")
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
