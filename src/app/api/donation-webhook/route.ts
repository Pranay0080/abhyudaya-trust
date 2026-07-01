import nodemailer from "nodemailer";
import crypto from "crypto";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function isValidSignature(rawBody: string, signature: string | null, secret: string) {
  if (!signature) return false;
  const expected = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  try {
    return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-razorpay-signature");
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

  if (!secret) {
    console.error("RAZORPAY_WEBHOOK_SECRET is not set.");
    return Response.json({ error: "Server misconfigured." }, { status: 500 });
  }

  if (!isValidSignature(rawBody, signature, secret)) {
    return Response.json({ error: "Invalid signature." }, { status: 400 });
  }

  let payload: any;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const event = payload.event;

  // Only act on a successfully captured payment
  if (event !== "payment.captured" && event !== "payment_link.paid") {
    return Response.json({ received: true });
  }

  const payment = payload.payload?.payment?.entity;
  if (!payment) {
    return Response.json({ received: true });
  }

  const { id: paymentId, amount, currency, email, contact, notes = {} } = payment;

  // "name" and "pan_card_number" come from the prefilled/custom fields
  // set up on the Razorpay Payment Button.
  const donorName = notes.name || notes.Name || "Not provided";
  const pan =
    notes.pan_card_number || notes.Pan_Card_Number || notes["PAN Card Number"] || "Not provided";
  const amountFormatted = (Number(amount) / 100).toFixed(2);

  try {
    await transporter.sendMail({
      from: `"Abhyudaya Trust Donations" <${process.env.GMAIL_USER}>`,
      to: process.env.DONATION_TO_EMAIL || process.env.CONTACT_TO_EMAIL,
      replyTo: email || undefined,
      subject: `New Donation Received - ₹${amountFormatted}`,
      html: `
        <h2>New Donation Payment Captured</h2>
        <p><strong>Name:</strong> ${donorName}</p>
        <p><strong>Email:</strong> ${email || "N/A"}</p>
        <p><strong>Mobile:</strong> ${contact || "N/A"}</p>
        <p><strong>PAN Card Number:</strong> ${pan}</p>
        <p><strong>Amount:</strong> ₹${amountFormatted} ${currency}</p>
        <p><strong>Razorpay Payment ID:</strong> ${paymentId}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Donation webhook email error:", err);
    // Still return 200 so Razorpay doesn't endlessly retry on an email hiccup.
    // Log err and check server logs / retry manually if needed.
    return Response.json({ received: true, emailFailed: true });
  }
}