"use client";

import Link from "next/link";
import { ChevronRight, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import ThreadEyebrow from "@/components/ThreadEyebrow";
import { useState } from "react";
import {
  submitScholarshipApplication,
  type ScholarshipFormData,
} from "../../../lib/scholarship-api";

// ─── Types ────────────────────────────────────────────────────────────────────
type FormErrors = Partial<Record<keyof ScholarshipFormData | string, string>>;

// ─── Helpers ─────────────────────────────────────────────────────────────────
const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isValidPhone = (v: string) => /^[+]?[\d\s\-()]{8,15}$/.test(v);
const isValidDate = (v: string) => {
  if (!v) return false;
  const d = new Date(v);
  const now = new Date();
  return d < now && d.getFullYear() > 1950;
};

function validate(data: ScholarshipFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) errors.fullName = "Full name is required.";
  else if (data.fullName.trim().length < 3) errors.fullName = "Enter at least 3 characters.";

  if (!data.dateOfBirth) errors.dateOfBirth = "Date of birth is required.";
  else if (!isValidDate(data.dateOfBirth)) errors.dateOfBirth = "Enter a valid past date.";

  if (!data.isIndianCitizen) errors.isIndianCitizen = "Please select an option.";
  if (!data.gender) errors.gender = "Please select your gender.";

  const filledSchools = data.schools.filter((s) => s.school.trim());
  if (filledSchools.length === 0) errors.schools = "Enter at least one school or college.";
  data.schools.forEach((s, i) => {
    if (s.school.trim() && !s.yearOfPassing.trim())
      errors[`school_year_${i}`] = "Year required.";
    if (s.school.trim() && !s.percentage.trim())
      errors[`school_pct_${i}`] = "Percentage required.";
    if (s.yearOfPassing && !/^\d{4}$/.test(s.yearOfPassing))
      errors[`school_year_${i}`] = "Enter a 4-digit year.";
  });

  if (!data.courseDetails.trim()) errors.courseDetails = "Course details are required.";
  if (!data.courseCompletionDate) errors.courseCompletionDate = "Please enter expected completion.";

  if (!data.fatherName.trim()) errors.fatherName = "Father's name is required.";
  if (!data.motherName.trim()) errors.motherName = "Mother's name is required.";
  if (!data.familyIncome.trim()) errors.familyIncome = "Family income is required.";

  const filledRefs = data.references.filter((r) => r.name.trim());
  if (filledRefs.length < 2) errors.references = "Please provide at least 2 references.";
  data.references.forEach((r, i) => {
    if (r.name.trim() && !r.relationship.trim())
      errors[`ref_rel_${i}`] = "Relationship required.";
    if (r.homePhone && !isValidPhone(r.homePhone))
      errors[`ref_hp_${i}`] = "Invalid phone.";
    if (r.workPhone && !isValidPhone(r.workPhone))
      errors[`ref_wp_${i}`] = "Invalid phone.";
  });

  if (!data.phone.trim()) errors.phone = "Phone number is required.";
  else if (!isValidPhone(data.phone)) errors.phone = "Enter a valid phone number.";

  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!isValidEmail(data.email)) errors.email = "Enter a valid email address.";

  if (!data.address.trim()) errors.address = "Address is required.";
  if (!data.digitalSignature.trim()) errors.digitalSignature = "Digital signature is required.";

  if (!data.essay.trim()) errors.essay = "Please write your essay.";
  else if (data.essay.trim().split(/\s+/).length < 100)
    errors.essay = "Essay must be at least 100 words.";

  if (!data.declarationAccepted) errors.declarationAccepted = "You must accept the declaration.";

  return errors;
}

// ─── Input Components ─────────────────────────────────────────────────────────
function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
      <AlertCircle size={11} /> {msg}
    </p>
  );
}

const inputCls = (err?: string) =>
  `w-full rounded-xl border px-4 py-3 text-sm text-pine placeholder:text-pine/35 focus:outline-none focus:ring-1 transition ${
    err
      ? "border-red-400 focus:border-red-400 focus:ring-red-300"
      : "border-pine/20 focus:border-terracotta focus:ring-terracotta"
  }`;

const smallInputCls = (err?: string) =>
  `w-full rounded-lg border px-3 py-2 text-sm focus:outline-none transition ${
    err
      ? "border-red-400 focus:border-red-400"
      : "border-pine/15 focus:border-terracotta"
  }`;

// ─── Default state ────────────────────────────────────────────────────────────
const defaultForm = (): ScholarshipFormData => ({
  fullName: "",
  dateOfBirth: "",
  isIndianCitizen: "",
  gender: "",
  schools: [
    { school: "", yearOfPassing: "", percentage: "" },
    { school: "", yearOfPassing: "", percentage: "" },
    { school: "", yearOfPassing: "", percentage: "" },
    { school: "", yearOfPassing: "", percentage: "" },
  ],
  courseDetails: "",
  courseCompletionDate: "",
  extracurricular: "",
  communityActivities: "",
  fatherName: "",
  fatherOccupation: "",
  motherName: "",
  motherOccupation: "",
  familyIncome: "",
  references: [
    { name: "", relationship: "", homePhone: "", workPhone: "" },
    { name: "", relationship: "", homePhone: "", workPhone: "" },
    { name: "", relationship: "", homePhone: "", workPhone: "" },
  ],
  phone: "",
  email: "",
  address: "",
  digitalSignature: "",
  essay: "",
  declarationAccepted: false,
});

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ScholarshipFormPage() {
  const [form, setForm] = useState<ScholarshipFormData>(defaultForm());
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [applicationId, setApplicationId] = useState("");

  function setField<K extends keyof ScholarshipFormData>(key: K, value: ScholarshipFormData[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function setSchool(i: number, field: string, value: string) {
    const updated = form.schools.map((s, idx) =>
      idx === i ? { ...s, [field]: value } : s
    );
    setForm((f) => ({ ...f, schools: updated }));
    setErrors((e) => ({ ...e, schools: undefined, [`school_year_${i}`]: undefined, [`school_pct_${i}`]: undefined }));
  }

  function setRef(i: number, field: string, value: string) {
    const updated = form.references.map((r, idx) =>
      idx === i ? { ...r, [field]: value } : r
    );
    setForm((f) => ({ ...f, references: updated }));
    setErrors((e) => ({ ...e, references: undefined, [`ref_rel_${i}`]: undefined, [`ref_hp_${i}`]: undefined, [`ref_wp_${i}`]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // scroll to first error
      setTimeout(() => {
        document.querySelector("[data-error]")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await submitScholarshipApplication(form);
      if (res.success) {
        setApplicationId(res.applicationId || "");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setSubmitError(res.message || "Submission failed. Please try again.");
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // ── Success screen ──
  if (applicationId) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#FFF4E6] px-6">
        <div className="text-center max-w-md bg-white rounded-3xl border border-pine/10 shadow-sm p-12">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-green-500" />
          </div>
          <h2 className="font-display text-3xl font-semibold text-pine mb-3">
            Application Submitted!
          </h2>
          <p className="text-pine/60 leading-relaxed mb-3">
            Thank you for applying for the Bhagat Phool Singh Scholarship.
            We will review your application and get in touch shortly.
          </p>
          <p className="text-xs text-pine/40 mb-8 font-mono bg-pine/5 rounded-lg px-4 py-2">
            Application ID: {applicationId}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta text-ivory px-7 py-3 font-semibold hover:bg-terracotta/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const sectionCls = "bg-white rounded-2xl border border-pine/10 p-8 shadow-sm";
  const headingCls = "font-display text-xl font-semibold text-pine mb-6 pb-4 border-b border-pine/10";

  return (
    <>
      <section className="bg-pine text-ivory">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="flex items-center gap-2 text-sm text-ivory/50 mb-6 flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gold">Scholarship Form</span>
          </div>
          <ThreadEyebrow label="Bhagat Phool Singh Scholarship Scheme" light />
          <h1 className="font-display text-4xl sm:text-5xl font-semibold mt-2 max-w-2xl leading-tight">
            Scholarship Application Form
          </h1>
          <p className="mt-4 text-ivory/60 max-w-xl leading-relaxed">
            Fill in all fields carefully. Incomplete applications may not be
            considered. All information will be kept confidential.
          </p>
        </div>
      </section>

      <section className="bg-[#FFF4E6] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          {submitError && (
            <div className="mb-6 rounded-xl bg-red-50 border border-red-200 px-5 py-4 text-sm text-red-600 flex items-center gap-2">
              <AlertCircle size={16} /> {submitError}
            </div>
          )}

          {Object.keys(errors).length > 0 && (
            <div className="mb-6 rounded-xl bg-red-50 border border-red-200 px-5 py-4 text-sm text-red-600 flex items-center gap-2">
              <AlertCircle size={16} /> Please fix the errors below before submitting.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-8">

            {/* 1. Personal Info */}
            <div className={sectionCls}>
              <h2 className={headingCls}>Personal Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div className="sm:col-span-2" data-error={errors.fullName || undefined}>
                  <label className="block text-sm font-semibold text-pine mb-1.5">
                    1. Student's Full Name <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setField("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    className={inputCls(errors.fullName)}
                  />
                  <FieldError msg={errors.fullName} />
                </div>

                <div data-error={errors.dateOfBirth || undefined}>
                  <label className="block text-sm font-semibold text-pine mb-1.5">
                    2. Date of Birth <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="date"
                    value={form.dateOfBirth}
                    onChange={(e) => setField("dateOfBirth", e.target.value)}
                    className={inputCls(errors.dateOfBirth)}
                  />
                  <FieldError msg={errors.dateOfBirth} />
                </div>

                <div data-error={errors.gender || undefined}>
                  <label className="block text-sm font-semibold text-pine mb-1.5">
                    5. Gender <span className="text-terracotta">*</span>
                  </label>
                  <select
                    value={form.gender}
                    onChange={(e) => setField("gender", e.target.value)}
                    className={inputCls(errors.gender) + " bg-white"}
                  >
                    <option value="">Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  <FieldError msg={errors.gender} />
                </div>

                <div className="sm:col-span-2" data-error={errors.isIndianCitizen || undefined}>
                  <label className="block text-sm font-semibold text-pine mb-2">
                    3. Are you an Indian Citizen? <span className="text-terracotta">*</span>
                  </label>
                  <div className="flex gap-6">
                    {["Yes", "No"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 text-sm text-pine cursor-pointer">
                        <input
                          type="radio"
                          name="citizen"
                          value={opt}
                          checked={form.isIndianCitizen === opt}
                          onChange={() => setField("isIndianCitizen", opt)}
                          className="accent-terracotta w-4 h-4"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                  <FieldError msg={errors.isIndianCitizen} />
                </div>
              </div>
            </div>

            {/* 2. Academic */}
            <div className={sectionCls}>
              <h2 className={headingCls}>Academic Record</h2>
              <p className="text-sm font-semibold text-pine mb-4">
                4. List of Schools / Colleges Attended <span className="text-terracotta">*</span>
              </p>
              {errors.schools && (
                <p className="text-xs text-red-500 mb-3 flex items-center gap-1">
                  <AlertCircle size={11} /> {errors.schools}
                </p>
              )}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-pine/5 text-pine/70">
                      <th className="text-left px-4 py-3 rounded-tl-xl font-semibold w-8">Sr.</th>
                      <th className="text-left px-4 py-3 font-semibold">School / College</th>
                      <th className="text-left px-4 py-3 font-semibold">Year of Passing</th>
                      <th className="text-left px-4 py-3 rounded-tr-xl font-semibold">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {form.schools.map((s, i) => (
                      <tr key={i} className="border-t border-pine/8">
                        <td className="px-4 py-3 text-pine/40 text-xs">{i + 1}.</td>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            value={s.school}
                            onChange={(e) => setSchool(i, "school", e.target.value)}
                            placeholder="School / College name"
                            className={smallInputCls()}
                          />
                        </td>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            value={s.yearOfPassing}
                            onChange={(e) => setSchool(i, "yearOfPassing", e.target.value)}
                            placeholder="e.g. 2022"
                            maxLength={4}
                            className={smallInputCls(errors[`school_year_${i}`])}
                          />
                          <FieldError msg={errors[`school_year_${i}`]} />
                        </td>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            value={s.percentage}
                            onChange={(e) => setSchool(i, "percentage", e.target.value)}
                            placeholder="e.g. 85%"
                            className={smallInputCls(errors[`school_pct_${i}`])}
                          />
                          <FieldError msg={errors[`school_pct_${i}`]} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="sm:col-span-2" data-error={errors.courseDetails || undefined}>
                  <label className="block text-sm font-semibold text-pine mb-1.5">
                    8. Course Details <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.courseDetails}
                    onChange={(e) => setField("courseDetails", e.target.value)}
                    placeholder="e.g. B.Tech Computer Science, 2nd Year"
                    className={inputCls(errors.courseDetails)}
                  />
                  <FieldError msg={errors.courseDetails} />
                </div>
                <div className="sm:col-span-2" data-error={errors.courseCompletionDate || undefined}>
                  <label className="block text-sm font-semibold text-pine mb-1.5">
                    11. Anticipated Date of Course Completion <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="month"
                    value={form.courseCompletionDate}
                    onChange={(e) => setField("courseCompletionDate", e.target.value)}
                    className={inputCls(errors.courseCompletionDate)}
                  />
                  <FieldError msg={errors.courseCompletionDate} />
                </div>
              </div>
            </div>

            {/* 3. Activities */}
            <div className={sectionCls}>
              <h2 className={headingCls}>Activities & Achievements</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-pine mb-1.5">
                    6. Extracurricular Activities
                    <span className="text-pine/45 font-normal ml-1">(sports, awards, scholarships)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={form.extracurricular}
                    onChange={(e) => setField("extracurricular", e.target.value)}
                    placeholder="Describe your extracurricular activities..."
                    className={inputCls() + " resize-none"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pine mb-1.5">
                    7. Community Activities
                    <span className="text-pine/45 font-normal ml-1">(NCC, NSS and others)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={form.communityActivities}
                    onChange={(e) => setField("communityActivities", e.target.value)}
                    placeholder="Describe your community involvement..."
                    className={inputCls() + " resize-none"}
                  />
                </div>
              </div>
            </div>

            {/* 4. Family */}
            <div className={sectionCls}>
              <h2 className={headingCls}>Family Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div data-error={errors.fatherName || undefined}>
                  <label className="block text-sm font-semibold text-pine mb-1.5">
                    Father's Name <span className="text-terracotta">*</span>
                  </label>
                  <input type="text" value={form.fatherName} onChange={(e) => setField("fatherName", e.target.value)} placeholder="Father's full name" className={inputCls(errors.fatherName)} />
                  <FieldError msg={errors.fatherName} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pine mb-1.5">Father's Occupation</label>
                  <input type="text" value={form.fatherOccupation} onChange={(e) => setField("fatherOccupation", e.target.value)} placeholder="Occupation" className={inputCls()} />
                </div>
                <div data-error={errors.motherName || undefined}>
                  <label className="block text-sm font-semibold text-pine mb-1.5">
                    Mother's Name <span className="text-terracotta">*</span>
                  </label>
                  <input type="text" value={form.motherName} onChange={(e) => setField("motherName", e.target.value)} placeholder="Mother's full name" className={inputCls(errors.motherName)} />
                  <FieldError msg={errors.motherName} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-pine mb-1.5">Mother's Occupation</label>
                  <input type="text" value={form.motherOccupation} onChange={(e) => setField("motherOccupation", e.target.value)} placeholder="Occupation" className={inputCls()} />
                </div>
                <div className="sm:col-span-2" data-error={errors.familyIncome || undefined}>
                  <label className="block text-sm font-semibold text-pine mb-1.5">
                    Family Annual Income <span className="text-terracotta">*</span>
                  </label>
                  <input type="text" value={form.familyIncome} onChange={(e) => setField("familyIncome", e.target.value)} placeholder="e.g. ₹2,40,000" className={inputCls(errors.familyIncome)} />
                  <FieldError msg={errors.familyIncome} />
                </div>
              </div>
            </div>

            {/* 5. References */}
            <div className={sectionCls}>
              <h2 className={headingCls}>Personal References</h2>
              <p className="text-sm text-pine/50 mb-5">
                10. Please supply 3 personal adult references (other than relatives). At least 2 required. <span className="text-terracotta">*</span>
              </p>
              {errors.references && (
                <p className="text-xs text-red-500 mb-3 flex items-center gap-1">
                  <AlertCircle size={11} /> {errors.references}
                </p>
              )}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-pine/5 text-pine/70">
                      {["Name", "Relationship", "Home Phone", "Work Phone"].map((h, i) => (
                        <th key={h} className={`text-left px-4 py-3 font-semibold ${i === 0 ? "rounded-tl-xl" : ""} ${i === 3 ? "rounded-tr-xl" : ""}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {form.references.map((r, i) => (
                      <tr key={i} className="border-t border-pine/8">
                        <td className="px-4 py-2">
                          <input type="text" value={r.name} onChange={(e) => setRef(i, "name", e.target.value)} placeholder="Full name" className={smallInputCls()} />
                        </td>
                        <td className="px-4 py-2">
                          <input type="text" value={r.relationship} onChange={(e) => setRef(i, "relationship", e.target.value)} placeholder="e.g. Teacher" className={smallInputCls(errors[`ref_rel_${i}`])} />
                          <FieldError msg={errors[`ref_rel_${i}`]} />
                        </td>
                        <td className="px-4 py-2">
                          <input type="tel" value={r.homePhone} onChange={(e) => setRef(i, "homePhone", e.target.value)} placeholder="+91 00000 00000" className={smallInputCls(errors[`ref_hp_${i}`])} />
                          <FieldError msg={errors[`ref_hp_${i}`]} />
                        </td>
                        <td className="px-4 py-2">
                          <input type="tel" value={r.workPhone} onChange={(e) => setRef(i, "workPhone", e.target.value)} placeholder="+91 00000 00000" className={smallInputCls(errors[`ref_wp_${i}`])} />
                          <FieldError msg={errors[`ref_wp_${i}`]} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6. Contact */}
            <div className={sectionCls}>
              <h2 className={headingCls}>Contact & Signature</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div data-error={errors.phone || undefined}>
                  <label className="block text-sm font-semibold text-pine mb-1.5">
                    Phone Number <span className="text-terracotta">*</span>
                  </label>
                  <input type="tel" value={form.phone} onChange={(e) => setField("phone", e.target.value)} placeholder="+91 00000 00000" className={inputCls(errors.phone)} />
                  <FieldError msg={errors.phone} />
                </div>
                <div data-error={errors.email || undefined}>
                  <label className="block text-sm font-semibold text-pine mb-1.5">
                    Email Address <span className="text-terracotta">*</span>
                  </label>
                  <input type="email" value={form.email} onChange={(e) => setField("email", e.target.value)} placeholder="you@email.com" className={inputCls(errors.email)} />
                  <FieldError msg={errors.email} />
                </div>
                <div className="sm:col-span-2" data-error={errors.address || undefined}>
                  <label className="block text-sm font-semibold text-pine mb-1.5">
                    Full Address <span className="text-terracotta">*</span>
                  </label>
                  <textarea rows={2} value={form.address} onChange={(e) => setField("address", e.target.value)} placeholder="Your current residential address" className={inputCls(errors.address) + " resize-none"} />
                  <FieldError msg={errors.address} />
                </div>
                <div className="sm:col-span-2" data-error={errors.digitalSignature || undefined}>
                  <label className="block text-sm font-semibold text-pine mb-1.5">
                    12. Digital Signature <span className="text-terracotta">*</span>
                    <span className="text-pine/45 font-normal ml-1">(Type your full name)</span>
                  </label>
                  <input type="text" value={form.digitalSignature} onChange={(e) => setField("digitalSignature", e.target.value)} placeholder="Type your full name as signature" className={inputCls(errors.digitalSignature) + " italic"} />
                  <FieldError msg={errors.digitalSignature} />
                </div>
              </div>
            </div>

            {/* 7. Essay */}
            <div className={sectionCls}>
              <h2 className={headingCls}>Personal Essay</h2>
              <p className="text-sm text-pine/50 mb-4">
                14. Write about yourself, your goals, and why you deserve this scholarship. <span className="text-pine/40">(minimum 100 words)</span>
              </p>
              <textarea
                rows={10}
                value={form.essay}
                onChange={(e) => setField("essay", e.target.value)}
                placeholder="Write your essay here..."
                className={inputCls(errors.essay) + " resize-none"}
                data-error={errors.essay || undefined}
              />
              <div className="flex items-center justify-between mt-1">
                <FieldError msg={errors.essay} />
                <span className={`text-xs ml-auto ${form.essay.trim().split(/\s+/).filter(Boolean).length < 100 ? "text-pine/35" : "text-green-500"}`}>
                  {form.essay.trim() ? form.essay.trim().split(/\s+/).filter(Boolean).length : 0} / 100 words
                </span>
              </div>
            </div>

            {/* 8. Declaration */}
            <div className={sectionCls}>
              <div className="bg-pine/4 rounded-xl p-5 mb-6 border border-pine/10">
                <p className="text-sm text-pine/70 leading-relaxed">
                  I hereby declare that all information provided is true and correct to the best of my
                  knowledge. I understand that Abhyudaya Jan Kalyan Nyas reserves the right to verify,
                  reject, or withdraw the scholarship at any time without assigning a reason.
                </p>
              </div>
              <label className="flex items-start gap-3 cursor-pointer mb-8" data-error={errors.declarationAccepted || undefined}>
                <input
                  type="checkbox"
                  checked={form.declarationAccepted}
                  onChange={(e) => setField("declarationAccepted", e.target.checked)}
                  className="mt-0.5 accent-terracotta w-4 h-4 shrink-0"
                />
                <span className="text-sm text-pine/70">
                  I agree to the above declaration and confirm all information is accurate.
                </span>
              </label>
              <FieldError msg={errors.declarationAccepted} />

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-full bg-terracotta text-ivory px-8 py-4 font-semibold hover:bg-terracotta/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <><Loader2 size={16} className="animate-spin" /> Submitting...</>
                ) : (
                  <><Send size={16} /> Submit Application</>
                )}
              </button>
            </div>

          </form>
        </div>
      </section>
    </>
  );
}