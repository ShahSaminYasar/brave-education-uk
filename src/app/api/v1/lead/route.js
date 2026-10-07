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
    const body = await readJsonBody(request);
    const { name, email, phone } = body;
    const course = body?.course || request.nextUrl.searchParams.get("course");
    const contact = await getContactSettings();
    const primaryPhone = contact?.phones?.[0];

    const data = {
      name,
      email,
      phone,
      createdAt: new Date(),
      source: course || "",
      contacted: false,
    };

    const db = await getDb();
    const result = await db.collection("leads").insertOne(data);

    if (result?.insertedId) {
      await sendMail(
        email,
        `${course || ""} Course Enquiry Received`,
        renderEmailShell({
          heading: "Thank You for Your Interest!",
          bodyHtml: `
                        <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#333;">
                          Hello <strong>${name}</strong>,
                        </p>

                        <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#333;">
                          Thank you for showing interest in our <strong>${
                            course || ""
                          } Course</strong> with Brave Education UK! We've successfully received your enquiry, and one of our education advisors will reach out to you soon with full details about the course, pricing, and enrolment process.
                        </p>

                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:20px 0; border-left:4px solid #e02f33; background-color:#f8f9fa;">
                          <tr>
                            <td style="padding:15px;">
                              <p style="margin:0 0 10px 0; font-size:14px; color:#666; font-style:italic;">
                                We have received the following information:
                              </p>
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff; border:1px solid #e9ecef; border-radius:4px;">
                                <tr>
                                  <td style="padding:15px; font-size:14px; line-height:1.5; color:#555;">
                                    <strong>Name:</strong> ${name}<br>
                                    <strong>Email:</strong> ${email}<br>
                                    <strong>Phone:</strong> ${phone}<br>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <p style="margin:0 0 15px 0; font-size:16px; line-height:1.6; color:#333;">
                          <strong>What happens next?</strong>
                        </p>
                        <ul style="margin:0 0 20px 0; padding-left:20px; font-size:16px; line-height:1.6; color:#333;">
                          <li>Our advisor will contact you within 24 hours.</li>
                          <li>You'll receive details about available batches and preparation materials.</li>
                          <li>We'll guide you step-by-step through your registration and exam preparation process.</li>
                        </ul>

                        <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#333;">
                          We typically respond within <strong>6–24 hours</strong> on business days. For urgent questions, you can call us directly at
                          <a href="tel:${primaryPhone?.dial}" style="color:#e02f33; text-decoration:none;">${primaryPhone?.display}</a>.
                        </p>

                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:25px 0;">
                          <tr>
                            <td align="center">
                              <a href="https://www.braveeducationuk.com/courses" style="background-color:#e02f33; color:#ffffff; padding:12px 30px; text-decoration:none; border-radius:4px; font-size:16px; font-weight:bold; display:inline-block;">
                                Learn More About the Course
                              </a>
                            </td>
                          </tr>
                        </table>

                        <p style="margin:0 0 10px 0; font-size:16px; line-height:1.6; color:#333;">
                          Best regards,
                        </p>
                        <p style="margin:0; font-size:16px; line-height:1.6; color:#333;">
                          <strong>The Brave Education UK Team</strong>
                        </p>

                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top:20px; padding-top:20px; border-top:1px solid #e9ecef; text-align:center;">
                          <tr>
                            <td>
                              <p style="margin:0 0 10px 0; font-size:14px; color:#666;">
                                <strong>Contact Information</strong><br>
                                Phone: <a href="tel:${primaryPhone?.dial}" style="color:#e02f33; text-decoration:none;">${primaryPhone?.display}</a><br>
                                Email: <a href="mailto:info@braveeducationuk.com" style="color:#e02f33; text-decoration:none;">info@braveeducationuk.com</a>
                              </p>
                              <p style="margin:0;">
                                <a href="https://www.braveeducationuk.com/privacy-policy" style="color:#e02f33; text-decoration:none;">Privacy Policy</a> |
                                <a href="https://www.braveeducationuk.com/terms-and-conditions" style="color:#e02f33; text-decoration:none;">Terms of Service</a>
                              </p>
                            </td>
                          </tr>
                        </table>`,
        }),
      );

      return NextResponse.json(
        {
          ok: true,
          message: "Form submitted successfully",
        },
        { status: 201 },
      );
    } else {
      return NextResponse.json(
        {
          ok: false,
          message: "Failed to submit the form. Please try again.",
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
      .collection("leads")
      .find()
      .sort({ _id: -1 })
      .toArray();

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
