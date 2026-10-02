import nodemailer from "nodemailer";

// ─── helpers ────────────────────────────────────────────────────────────────

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  // allow +, spaces, dashes, digits – at least 7 digits total
  return /^[\d\s\+\-\(\)]{7,20}$/.test(phone.trim());
}

function buildHtmlEmail({ name, email, phone, passengers, travelDate, numberOfDays, enquirySource }) {
  const rows = [
    ["Full Name", name],
    ["Email Address", email],
    ["Phone Number", phone],
    ["No. of Passengers", passengers],
    ["Travel Date", travelDate || "Not specified"],
    ["Number of Days", numberOfDays || "Not specified"],
    ["Enquiry From", enquirySource],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid #eef0f4;font-weight:600;color:#374151;width:40%;font-size:13px;">${label}</td>
          <td style="padding:10px 16px;border-bottom:1px solid #eef0f4;color:#1f2937;font-size:13px;">${value}</td>
        </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Enquiry - Umrah Planner</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <tr>
            <td style="background:linear-gradient(135deg,#06142e 0%,#0b2545 100%);border-radius:12px 12px 0 0;padding:32px 36px;text-align:center;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#D4AF37;">Umrah Planner</p>
              <h1 style="margin:0;font-size:24px;font-weight:800;color:#ffffff;line-height:1.3;">New Enquiry Received</h1>
              <p style="margin:8px 0 0;font-size:13px;color:#93c5fd;">A customer has submitted an enquiry via the website.</p>
            </td>
          </tr>

          <tr>
            <td style="background:#ffffff;padding:20px 36px 0;">
              <p style="margin:0;display:inline-block;background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:5px 14px;font-size:12px;font-weight:700;color:#1e40af;">
                Enquiry from: <span style="color:#06142e;">${enquirySource}</span>
              </p>
            </td>
          </tr>

          <tr>
            <td style="background:#ffffff;padding:20px 36px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
                <tr>
                  <th colspan="2" style="background:#f8fafc;padding:12px 16px;text-align:left;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#6b7280;border-bottom:1px solid #e5e7eb;">Customer Details</th>
                </tr>
                ${tableRows}
              </table>
            </td>
          </tr>

          <tr>
            <td style="background:#ffffff;padding:0 36px 32px;text-align:center;">
              <a href="mailto:${email}" style="display:inline-block;background:#D4AF37;color:#06142e;font-weight:800;font-size:14px;padding:13px 30px;border-radius:8px;text-decoration:none;">
                Reply to ${name}
              </a>
            </td>
          </tr>

          <tr>
            <td style="background:#f8fafc;border-top:1px solid #e5e7eb;border-radius:0 0 12px 12px;padding:20px 36px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#9ca3af;">This email was sent automatically from the Umrah Planner website contact form.</p>
              <p style="margin:4px 0 0;font-size:11px;color:#9ca3af;">2025 Umrah Planner - admin@umrahplaners.co.uk</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Route handler ──────────────────────────────────────────────────────────

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, passengers, travelDate, numberOfDays, enquirySource } = body;

    // Validation
    const errors = [];

    if (!name || name.trim().length < 2) {
      errors.push("Name must be at least 2 characters.");
    }
    if (!phone || !isValidPhone(phone)) {
      errors.push("Please enter a valid phone number.");
    }
    if (!email || !isValidEmail(email)) {
      errors.push("Please enter a valid email address.");
    }

    if (errors.length > 0) {
      return Response.json({ success: false, errors }, { status: 422 });
    }

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = buildHtmlEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      passengers: passengers || "Not specified",
      travelDate,
      numberOfDays,
      enquirySource: enquirySource || "Website",
    });

    await transporter.sendMail({
      from: `"Umrah Planner Website" <${process.env.SMTP_USER}>`,
      to: process.env.ENQUIRY_TO_EMAIL,
      replyTo: email.trim(),
      subject: `New ${enquirySource || "Website"} Enquiry - ${name.trim()}`,
      html,
    });

    return Response.json({ success: true, message: "Enquiry sent successfully." });
  } catch (err) {
    console.error("[send-enquiry] error:", err);
    return Response.json(
      { success: false, errors: ["Server error. Please try again later."] },
      { status: 500 }
    );
  }
}
