import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const { name, email, subject, message }: ContactPayload = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"Website Contact by ${name}"`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: subject ? `New Contact: ${subject}` : "New Contact Form Submission",
      html: `
        <h2>New message from your website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json({ error: "Failed to send message." }, { status: 500 });
  }
}