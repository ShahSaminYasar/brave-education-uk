import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { sendMail, renderEmailShell } from "@/lib/mail";
import { readJsonBody } from "@/lib/http";
import { getContactSettings } from "@/lib/settings";

export async function POST(request) {
  try {
    const { name, email, phone, datetime, message } = await readJsonBody(request);
    const contact = await getContactSettings();
    const primaryPhone = contact?.phones?.[0];

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required." },
        { status: 400 },
      );
    }

    const db = await getDb();
    const result = await db.collection("appointments").insertOne({
      name,
      email,
      phone,
      datetime,
      message,
      createdAt: new Date(),
    });

    if (result?.insertedId) {
      await sendMail(
        email,
        "Your Appointment Is Being Scheduled",
        renderEmailShell({
          heading: "Appointment Request Received",
          bodyHtml: `
                <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#333;">
                  Hello <strong>${name}</strong>,
                </p>

                <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#333;">
                  Thank you for scheduling an appointment with us. We have received your request and will confirm your appointment shortly.
                </p>

                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:20px 0; border-left:4px solid #e02f33; background-color:#f8f9fa;">
                  <tr>
                    <td style="padding:15px;">
                      <p style="margin:0 0 10px 0; font-size:14px; color:#666; font-style:italic;">
                        Your appointment details:
                      </p>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff; border:1px solid #e9ecef; border-radius:4px;">
                        <tr>
                          <td style="padding:15px; font-size:14px; line-height:1.5; color:#555;">
                            <p style="margin:0 0 10px 0;"><strong>Date & Time:</strong> ${new Date(
                              datetime,
                            ).toUTCString()}</p>
                            <p style="margin:0 0 10px 0;"><strong>Email:</strong> ${email}</p>
                            <p style="margin:0 0 10px 0;"><strong>Phone:</strong> ${phone}</p>
                            <p style="margin:0;"><strong>Message:</strong> ${message}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#333;">
                  We will contact you within 24 hours to confirm your appointment. If you need to make any changes, please feel free to contact us directly at <a href="tel:${primaryPhone?.dial}" style="color:#e02f33; text-decoration:none;">${primaryPhone?.display}</a>.
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
        { ok: true, message: "Appointment booked successfully" },
        { status: 201 },
      );
    } else {
      return NextResponse.json(
        {
          ok: false,
          message: "Failed to book an appointment. Please try again.",
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
      .collection("appointments")
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
