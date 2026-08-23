import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default async function handler(req, res) {
  // Only POST requests allowed
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    const { name, email, phone, message, website } = req.body || {};

    // -----------------------------
    // Honeypot check - agar ye field bhara hai, bot hai
    // -----------------------------

    if (website) {
      // Bot ko normal success response do, isse usko pata nahi chalega ki block hua
      return res.status(200).json({
        success: true,
        message: "Message sent successfully!",
      });
    }

    // -----------------------------
    // Server-side validation
    // -----------------------------

    if (!name?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please enter your name.",
      });
    }

    if (!email?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please enter your email address.",
      });
    }

    if (!EMAIL_PATTERN.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (!message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please enter your message.",
      });
    }

    // -----------------------------
    // Send email through Resend
    // -----------------------------

    const { error } = await resend.emails.send({
      from:"Mr.Compliance <contact@mrcompliance.co>",
      to: [process.env.OWNER_EMAIL],
      replyTo: email.trim(),

     subject: `New Contact Form Submission - ${name.trim()} - ${Date.now()}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>

          <p>
            <strong>Name:</strong>
            ${escapeHtml(name.trim())}
          </p>

          <p>
            <strong>Email:</strong>
            ${escapeHtml(email.trim())}
          </p>

          <p>
            <strong>Phone:</strong>
            ${escapeHtml(phone?.trim()) || "Not provided"}
          </p>

          <h3>Message</h3>

          <p>
            ${escapeHtml(message.trim()).replace(/\n/g, "<br>")}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Unable to send your message right now.",
      });
    }

    // -----------------------------
    // Success
    // -----------------------------

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
}

// from: "Website Contact <onboarding@resend.dev>",