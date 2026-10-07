import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "noreply@braveeducationuk.com",
    pass: process.env.MAIL_PASSWORD,
  },
});

export function sendMail(email, subject, html) {
  return new Promise((resolve, reject) => {
    try {
      transporter.sendMail(
        {
          from: "noreply@braveeducationuk.com",
          to: email,
          subject,
          html,
        },
        (error, info) => {
          if (error) {
            console.log("ERROR: ", error);
            return reject({
              message: "An error occurred while sending the email.",
              error,
            });
          }
          return resolve({ message: "success", info });
        },
      );
    } catch (error) {
      console.error(error);
      reject({
        message:
          error?.message || "Unknown error occurred while sending email",
        error,
      });
    }
  });
}

/**
 * Shared header/footer chrome for all outbound emails. Each caller supplies
 * only the heading and the unique body content.
 */
export function renderEmailShell({ heading, bodyHtml }) {
  return `<body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f9f9f9;">
  <center>
    <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f9f9f9">
      <tr>
        <td align="center">
          <!-- Container Table -->
          <table width="600" border="0" cellspacing="0" cellpadding="0" style="max-width:600px;">

            <!-- Header -->
            <tr>
              <td align="center" bgcolor="#000000" style="padding: 20px; background-image: url('https://braveeducationuk.com/bg-dark.jpg'); background-size: cover; background-position: center;">
                <img src="https://braveeducationuk.com/logo-white.png" width="180" alt="Brave Education UK" style="display:block; margin-bottom:10px;">
                <h1 style="margin:0; font-size:24px; color:#ffffff;">${heading}</h1>
              </td>
            </tr>

            <!-- Main Content -->
            <tr>
              <td bgcolor="#ffffff" style="padding: 30px; border-radius: 0 0 5px 5px;">
                ${bodyHtml}
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="padding:20px; font-size:12px; color:#666;">
                <p style="margin:0 0 10px 0;">&copy; 2025 Brave Education UK Ltd. All rights reserved.</p>
                <p style="margin:0;"><a href="https://www.braveeducationuk.com" style="color:#e02f33; text-decoration:none;">Visit our website</a></p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </center>
</body>`;
}
