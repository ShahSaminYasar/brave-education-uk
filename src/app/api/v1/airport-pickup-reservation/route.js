import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { sendMail, renderEmailShell } from "@/lib/mail";
import { readJsonBody } from "@/lib/http";
import { getContactSettings } from "@/lib/settings";

export async function POST(request) {
  try {
    const data = await readJsonBody(request);
    data.confirmed = false;
    data.createdAt = new Date();
    const contact = await getContactSettings();
    const primaryPhone = contact?.phones?.[0];

    const db = await getDb();
    const result = await db
      .collection("airport-pickup-reservations")
      .insertOne(data);

    if (result?.insertedId) {
      await sendMail(
        data?.email,
        "Your Airport Pickup Request Is Being Processed",
        renderEmailShell({
          heading: "Airport Pickup Request Received",
          bodyHtml: `
                <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#333;">
                  Hello <strong>${data?.firstName} ${data?.lastName}</strong>,
                </p>

                <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#333;">
                  Thank you for submitting your airport pickup request through <strong>Brave Education UK</strong>. We have successfully received your details and our team will review your request shortly.
                </p>

                <table width="100%" border="0" cellspacing="0" cellpadding="8" style="border-collapse:collapse; background-color:#f5f5f5; border-radius:5px; margin-bottom:20px;">
                  <tr>
                    <td width="40%" style="font-weight:bold; color:#333;">Name:</td>
                    <td style="color:#333;">${data?.firstName} ${data?.lastName}</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold; color:#333;">Email:</td>
                    <td style="color:#333;">${data?.email}</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold; color:#333;">Phone:</td>
                    <td style="color:#333;">${data?.phone}</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold; color:#333;">Flight Number:</td>
                    <td style="color:#333;">${data?.flightNumber}</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold; color:#333;">Arrival Date:</td>
                    <td style="color:#333;">${new Date(
                      data?.arrivalDate,
                    )?.toDateString()}</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold; color:#333;">Arrival Time:</td>
                    <td style="color:#333;">${data?.arrivalTime}</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold; color:#333;">Airport:</td>
                    <td style="color:#333;">${data?.airport}</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold; color:#333;">Destination:</td>
                    <td style="color:#333;">${data?.destination}</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold; color:#333;">Number of Passengers:</td>
                    <td style="color:#333;">${data?.passengerNumber}</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold; color:#333;">Number of Luggage:</td>
                    <td style="color:#333;">${data?.luggageNumber}</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold; color:#333;">Special Requirements:</td>
                    <td style="color:#333;">${data?.specialRequirements}</td>
                  </tr>
                </table>

                <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#333;">
                  Our team will verify your details and confirm your booking within 1–2 business days. Once approved, you'll receive a confirmation email with your pickup instructions.
                </p>

                <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#333;">
                  If you need to update any information or have questions, please contact us at
                  <a href="tel:${primaryPhone?.dial}" style="color:#e02f33; text-decoration:none;">${primaryPhone?.display}</a> or reply directly to this message.
                </p>

                <p style="margin:0 0 10px 0; font-size:16px; line-height:1.6; color:#333;">
                  Thank you for choosing Brave Education UK. We look forward to assisting you with a smooth arrival experience.
                </p>
                <p style="margin:0; font-size:16px; line-height:1.6; color:#333;">
                  <strong>Brave Education UK</strong> Team
                </p>`,
        }),
      );

      return NextResponse.json(
        {
          ok: true,
          message: "Airport pickup requested successfully.",
        },
        { status: 201 },
      );
    } else {
      return NextResponse.json(
        {
          ok: false,
          message: "Failed to submit the request. Please try again.",
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
    const data = await db
      .collection("airport-pickup-reservations")
      .find()
      .sort({ _id: -1 })
      .toArray();

    return NextResponse.json({ ok: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
