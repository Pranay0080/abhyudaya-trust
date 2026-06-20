import type { Metadata } from "next";
import Link from "next/link";
import { Clock, FileText, AlertCircle, CheckCircle } from "lucide-react";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Refund Policy | Abhyudaya Jan Kalyan Nyas",
  description:
    "Understand the refund policy for donations made to Abhyudaya Jan Kalyan Nyas.",
};

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund Policy"
      subtitle="We take utmost care to process every donation correctly."
      lastUpdated="January 2025"
      sections={[
        {
          content: (
            <p>
              <strong className="text-pine">Abhyudaya Jan Kalyan Nyas</strong>{" "}
              takes the utmost care to process donations as per the instructions
              given by our donors, online and offline. However, in case of an
              unlikely event of an erroneous donation or if the donor would like
              to cancel their donation, Abhyudaya Jan Kalyan Nyas will respond
              to the donor within{" "}
              <strong className="text-pine">7 working days</strong> of receiving
              a valid request for refund.
            </p>
          ),
        },
        {
          heading: "Key Timelines at a Glance",
          content: (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose mt-2">
              <div className="rounded-xl border border-pine/10 bg-[#FFF4E6] p-5 flex flex-col items-center text-center">
                <div className="bg-terracotta/10 rounded-full p-3 mb-3">
                  <Clock className="text-terracotta" size={22} />
                </div>
                <p className="font-display font-semibold text-pine text-sm">
                  Request Window
                </p>
                <p className="text-2xl font-bold text-terracotta mt-1">
                  2 Days
                </p>
                <p className="text-xs text-pine/60 mt-1">
                  from the date of donation
                </p>
              </div>
              <div className="rounded-xl border border-pine/10 bg-[#FFF4E6] p-5 flex flex-col items-center text-center">
                <div className="bg-terracotta/10 rounded-full p-3 mb-3">
                  <CheckCircle className="text-terracotta" size={22} />
                </div>
                <p className="font-display font-semibold text-pine text-sm">
                  Processing Time
                </p>
                <p className="text-2xl font-bold text-terracotta mt-1">
                  7 Days
                </p>
                <p className="text-xs text-pine/60 mt-1">
                  working days after valid request
                </p>
              </div>
              <div className="rounded-xl border border-pine/10 bg-[#FFF4E6] p-5 flex flex-col items-center text-center">
                <div className="bg-terracotta/10 rounded-full p-3 mb-3">
                  <AlertCircle className="text-terracotta" size={22} />
                </div>
                <p className="font-display font-semibold text-pine text-sm">
                  Tax Certificate
                </p>
                <p className="text-2xl font-bold text-terracotta mt-1">
                  No Refund
                </p>
                <p className="text-xs text-pine/60 mt-1">
                  if 80G certificate issued
                </p>
              </div>
            </div>
          ),
        },
        {
          heading: "How to Request a Refund",
          content: (
            <>
              <p>
                The donor will have to send Abhyudaya Jan Kalyan Nyas a written
                request for a refund within <strong className="text-pine">2 days</strong> of
                making the donation to our official address or by email at{" "}
                <a
                  href="mailto:info@abhyudayatrust.org"
                  className="text-terracotta hover:underline"
                >
                  info@abhyudayatrust.org
                </a>{" "}
                along with the following:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-pine/70">
                <li>Proof of the deduction of the donation amount.</li>
                <li>
                  In cases where a donation receipt has already been issued, the
                  donor will have to return the original receipt to us at our
                  office address.
                </li>
                <li>
                  If a tax exemption certificate (80G) has already been issued,
                  we are unable to process a refund.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "Errors on Our Part",
          content: (
            <p>
              In case of a valid refund request due to any error on Abhyudaya
              Jan Kalyan Nyas's part, Abhyudaya Jan Kalyan Nyas will refund the
              donation in full and bear the costs of the same. The timely refund
              of the donation will also depend upon the type of credit
              card/banking instrument used during the transaction.
            </p>
          ),
        },
        {
          heading: "Contact for Refund Requests",
          content: (
            <div className="rounded-xl border border-pine/10 bg-white p-6 not-prose">
              <div className="flex items-start gap-3">
                <div className="bg-terracotta/10 rounded-full p-2 mt-0.5">
                  <FileText className="text-terracotta" size={18} />
                </div>
                <div>
                  <p className="font-display font-semibold text-pine">
                    Abhyudaya Jan Kalyan Nyas
                  </p>
                  <p className="text-pine/65 text-sm mt-1">
                    453/12 Vishnu Nagar, Gohana, Sonipat, Haryana
                  </p>
                  <a
                    href="mailto:info@abhyudayatrust.org"
                    className="text-sm text-terracotta hover:underline mt-1 block"
                  >
                    info@abhyudayatrust.org
                  </a>
                  <a
                    href="tel:+918571820670"
                    className="text-sm text-terracotta hover:underline mt-0.5 block"
                  >
                    +91 857-182-0670
                  </a>
                </div>
              </div>
            </div>
          ),
        },
      ]}
    />
  );
}