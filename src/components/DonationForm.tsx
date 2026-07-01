"use client";

import { useState } from "react";

const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
const MOBILE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

// The "view" link for your Razorpay Payment Button
const RAZORPAY_BUTTON_URL =
  "https://razorpay.com/payment-button/pl_K14WzDNuDgdtYs/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button";

type FormState = {
  name: string;
  email: string;
  mobile: string;
  pan: string;
};

export default function DonationForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    mobile: "",
    pan: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!EMAIL_REGEX.test(form.email)) errs.email = "Enter a valid email address.";
    if (!MOBILE_REGEX.test(form.mobile)) errs.mobile = "Enter a valid 10-digit mobile number.";
    if (!PAN_REGEX.test(form.pan.toUpperCase())) errs.pan = "Enter a valid PAN (e.g. ABCDE1234F).";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    // IMPORTANT: the query param key for the custom field must be lowercase
    // and match the field you created in the Razorpay dashboard
    // ("PAN Card Number" -> pan_card_number).
    const params = new URLSearchParams({
      name: form.name.trim(),
      email: form.email.trim(),
      contact: form.mobile.trim(),
      pan_card_number: form.pan.trim().toUpperCase(),
    });

    window.location.href = `${RAZORPAY_BUTTON_URL}?${params.toString()}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto space-y-4 p-6 bg-white rounded-xl shadow-md"
    >
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="donor-name">
          Full Name
        </label>
        <input
          id="donor-name"
          type="text"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="donor-email">
          Email
        </label>
        <input
          id="donor-email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="donor-mobile">
          Mobile Number
        </label>
        <input
          id="donor-mobile"
          type="tel"
          inputMode="numeric"
          maxLength={10}
          value={form.mobile}
          onChange={(e) => handleChange("mobile", e.target.value.replace(/\D/g, ""))}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {errors.mobile && <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="donor-pan">
          PAN Card Number
        </label>
        <input
          id="donor-pan"
          type="text"
          maxLength={10}
          value={form.pan}
          onChange={(e) => handleChange("pan", e.target.value.toUpperCase())}
          placeholder="ABCDE1234F"
          className="w-full border rounded-md px-3 py-2 uppercase focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {errors.pan && <p className="text-red-600 text-sm mt-1">{errors.pan}</p>}
        <p className="text-xs text-gray-500 mt-1">Required for 80G tax-exemption receipt.</p>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-orange-600 text-white font-semibold py-2.5 rounded-md hover:bg-orange-700 disabled:opacity-50 transition-colors"
      >
        {submitting ? "Redirecting to payment..." : "Donate Now"}
      </button>
    </form>
  );
}