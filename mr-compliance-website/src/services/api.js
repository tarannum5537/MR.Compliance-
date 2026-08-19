// API helpers for the site.
//
// Keep all network calls here so components stay focused on UI.
// Secrets (for example a Resend API key) must NEVER live in this file —
// they belong in a serverless function on the server side.
//
// Suggested production flow:
//   Contact form  ->  POST /api/contact (Vercel serverless function)
//                 ->  Resend  ->  email delivered to the client inbox

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

/**
 * Send a contact / assessment request.
 * @param {{ name: string, email: string, company?: string, message: string }} payload
 * @returns {Promise<{ ok: boolean, error?: string }>}
 */
export async function sendContactRequest(payload) {
  try {
    const res = await fetch(CONTACT_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return { ok: false, error: `Request failed with status ${res.status}` };
    }

    return { ok: true };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}
