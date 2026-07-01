import nodemailer from "nodemailer";
import type { ScholarshipFormData } from "../../../../lib/scholarship-api";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function generateApplicationId() {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `BPS-${ts}-${rand}`;
}

function esc(v: unknown) {
  return String(v ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderSchoolsTable(schools: ScholarshipFormData["schools"]) {
  const rows = schools
    .filter((s) => s.school.trim())
    .map(
      (s, i) => `
        <tr>
          <td style="padding:6px 10px;border:1px solid #ddd;">${i + 1}</td>
          <td style="padding:6px 10px;border:1px solid #ddd;">${esc(s.school)}</td>
          <td style="padding:6px 10px;border:1px solid #ddd;">${esc(s.yearOfPassing)}</td>
          <td style="padding:6px 10px;border:1px solid #ddd;">${esc(s.percentage)}</td>
        </tr>`
    )
    .join("");

  return `
    <table style="border-collapse:collapse;width:100%;margin:8px 0;">
      <thead>
        <tr style="background:#f5f5f5;">
          <th style="padding:6px 10px;border:1px solid #ddd;text-align:left;">Sr.</th>
          <th style="padding:6px 10px;border:1px solid #ddd;text-align:left;">School / College</th>
          <th style="padding:6px 10px;border:1px solid #ddd;text-align:left;">Year</th>
          <th style="padding:6px 10px;border:1px solid #ddd;text-align:left;">Percentage</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function renderReferencesTable(refs: ScholarshipFormData["references"]) {
  const rows = refs
    .filter((r) => r.name.trim())
    .map(
      (r) => `
        <tr>
          <td style="padding:6px 10px;border:1px solid #ddd;">${esc(r.name)}</td>
          <td style="padding:6px 10px;border:1px solid #ddd;">${esc(r.relationship)}</td>
          <td style="padding:6px 10px;border:1px solid #ddd;">${esc(r.homePhone)}</td>
          <td style="padding:6px 10px;border:1px solid #ddd;">${esc(r.workPhone)}</td>
        </tr>`
    )
    .join("");

  return `
    <table style="border-collapse:collapse;width:100%;margin:8px 0;">
      <thead>
        <tr style="background:#f5f5f5;">
          <th style="padding:6px 10px;border:1px solid #ddd;text-align:left;">Name</th>
          <th style="padding:6px 10px;border:1px solid #ddd;text-align:left;">Relationship</th>
          <th style="padding:6px 10px;border:1px solid #ddd;text-align:left;">Home Phone</th>
          <th style="padding:6px 10px;border:1px solid #ddd;text-align:left;">Work Phone</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
}

export async function POST(request: Request) {
  try {
    const data: ScholarshipFormData = await request.json();

    // Minimal server-side sanity check (client already validates the full form)
    if (!data?.fullName || !data?.email || !data?.phone || !data?.declarationAccepted) {
      return Response.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const applicationId = generateApplicationId();

    const html = `
      <h2>New Scholarship Application — Bhagat Phool Singh Scholarship</h2>
      <p><strong>Application ID:</strong> ${applicationId}</p>

      <h3>Personal Information</h3>
      <p><strong>Full Name:</strong> ${esc(data.fullName)}</p>
      <p><strong>Date of Birth:</strong> ${esc(data.dateOfBirth)}</p>
      <p><strong>Indian Citizen:</strong> ${esc(data.isIndianCitizen)}</p>
      <p><strong>Gender:</strong> ${esc(data.gender)}</p>

      <h3>Academic Record</h3>
      ${renderSchoolsTable(data.schools)}
      <p><strong>Course Details:</strong> ${esc(data.courseDetails)}</p>
      <p><strong>Anticipated Completion:</strong> ${esc(data.courseCompletionDate)}</p>

      <h3>Activities</h3>
      <p><strong>Extracurricular:</strong> ${esc(data.extracurricular) || "—"}</p>
      <p><strong>Community Activities:</strong> ${esc(data.communityActivities) || "—"}</p>

      <h3>Family Details</h3>
      <p><strong>Father's Name:</strong> ${esc(data.fatherName)} (${esc(data.fatherOccupation) || "—"})</p>
      <p><strong>Mother's Name:</strong> ${esc(data.motherName)} (${esc(data.motherOccupation) || "—"})</p>
      <p><strong>Family Annual Income:</strong> ${esc(data.familyIncome)}</p>

      <h3>References</h3>
      ${renderReferencesTable(data.references)}

      <h3>Contact & Signature</h3>
      <p><strong>Phone:</strong> ${esc(data.phone)}</p>
      <p><strong>Email:</strong> ${esc(data.email)}</p>
      <p><strong>Address:</strong> ${esc(data.address)}</p>
      <p><strong>Digital Signature:</strong> ${esc(data.digitalSignature)}</p>

      <h3>Essay</h3>
      <p>${esc(data.essay).replace(/\n/g, "<br/>")}</p>

      <p><strong>Declaration Accepted:</strong> ${data.declarationAccepted ? "Yes" : "No"}</p>
    `;

    await transporter.sendMail({
      from: `"Scholarship Application" <${process.env.GMAIL_USER}>`,
      to: process.env.SCHOLARSHIP_TO_EMAIL || process.env.CONTACT_TO_EMAIL,
      replyTo: data.email,
      subject: `New Scholarship Application: ${data.fullName} [${applicationId}]`,
      html,
    });

    return Response.json({ success: true, applicationId });
  } catch (err) {
    console.error("Scholarship form error:", err);
    return Response.json({ error: "Failed to submit application." }, { status: 500 });
  }
}