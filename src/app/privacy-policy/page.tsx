import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Abhyudaya Jan Kalyan Nyas",
  description:
    "Read how Abhyudaya Jan Kalyan Nyas collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we collect, use and protect your personal information."
      lastUpdated="January 2025"
      sections={[
        {
          content: (
            <p>
              Abhyudaya Jan Kalyan Nyas is committed to the ethical collection,
              retention and use of information that you provide to us about
              yourself ("Personal Information") on this site{" "}
              <a
                href="https://abhyudaya-trust.vercel.app"
                className="text-terracotta hover:underline"
              >
                abhyudaya-trust.vercel.app
              </a>{" "}
              ("Site"). Your use of the website constitutes your consent to all
              the terms and conditions contained in this Privacy Policy (as
              amended from time to time) and you shall be bound by the same.
            </p>
          ),
        },
        {
          heading: "1. Personal Information We Collect",
          content: (
            <>
              <p>Your Personal Information may comprise the following:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5 text-pine/70">
                <li>Your name, age and occupation</li>
                <li>A user ID and password of your choice</li>
                <li>Your email and mailing address</li>
                <li>Your telephone number</li>
                <li>Your payment processing details</li>
                <li>Limited personal details</li>
                <li>Any other data as Abhyudaya Jan Kalyan Nyas may require</li>
              </ul>
            </>
          ),
        },
        {
          heading: "2. Site Browsing & General Information",
          content: (
            <>
              <p>
                You browse the Site anonymously. We do not require you to
                identify yourself or reveal any Personal Information while
                browsing. However, you may not be able to access certain
                sections of the Site or make donations without supplying
                Personal Information.
              </p>
              <p>
                While you browse, the Site's operating system may automatically
                record general information such as: the date and time you visit,
                the address of the previous website you were visiting, the type
                of browser you are using, and which visit it is on the Site.
                This General Information is not Personal Information and is used
                only for statistical analysis and tracking overall traffic
                patterns.
              </p>
            </>
          ),
        },
        {
          heading: "3. Cookies",
          content: (
            <>
              <p>
                "Cookies" are small amounts of data that a website sends to a
                web browser on a visitor's computer. They may enable the site to
                track how a visitor navigates through the site and the areas in
                which they show interest — similar to a traffic report that
                tracks trends, but does not identify individuals.
              </p>
              <p>
                <strong className="text-pine">Types of Cookies:</strong> Cookies
                can be set to expire on a specified date, after a specific time
                period, when a transaction is completed, or when the browser is
                closed. "Session" cookies are erased when your browser closes;
                "persistent" cookies expire based on a time set by the server.
              </p>
              <p>
                You may set your browser to disable or delete cookies. Please
                note that disabling cookies for some services may impact your
                ability to use those services. Some features on our site require
                cookies to establish a session link — these cookies contain only
                unique session IDs and no customer data is stored in them.
              </p>
            </>
          ),
        },
        {
          heading: "4. Use of Personal Information",
          content: (
            <>
              <p>
                Personal Information will be used by Abhyudaya Jan Kalyan Nyas
                for internal purposes including:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5 text-pine/70">
                <li>
                  Sending you emails, features, promotional material, surveys,
                  brochures, catalogues, Annual Reports, donation reminders, and
                  updates on utilisation of donations.
                </li>
                <li>Processing your donations and purchases on the Site.</li>
                <li>
                  Delivering products purchased or donation receipts to you.
                </li>
                <li>
                  Maintaining an internal confidential database of all Personal
                  Information collected from Site visitors.
                </li>
                <li>
                  Evaluating and administering the Site and responding to any
                  problems that may arise.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "5. Disclosure of Personal Information",
          content: (
            <>
              <p>
                Within Abhyudaya Jan Kalyan Nyas, access to Personal
                Information will be given only to authorised persons and third
                parties hired to perform administrative services (e.g. managing
                databases, processing orders, sending emails). Abhyudaya Jan
                Kalyan Nyas cannot guarantee that such parties will keep your
                Personal Information confidential.
              </p>
              <p>
                Personal Information may also be shared with persons associated
                with Abhyudaya Jan Kalyan Nyas, including affiliated companies
                and non-governmental organisations. Abhyudaya Jan Kalyan Nyas
                will retain ownership rights over such information and will
                share only such portions as it deems fit.
              </p>
              <p>
                Abhyudaya Jan Kalyan Nyas reserves the right to disclose any
                Personal Information without notice or consent as needed to
                satisfy any requirement of law, regulation, legal request or
                legal investigation, or to protect the Site, its property, and
                visitors.
              </p>
            </>
          ),
        },
        {
          heading: "6. Security",
          content: (
            <p>
              Abhyudaya Jan Kalyan Nyas endeavors to use up-to-date security
              measures to protect your Personal Information. However, no
              warranty is provided regarding the absolute security of such
              measures. We make no express or implied warranty with respect to
              the security measures employed from time to time for the
              protection of Personal Information.
            </p>
          ),
        },
        {
          heading: "7. Links to Other Websites",
          content: (
            <p>
              The Site contains links to other websites for the benefit of its
              visitors. This Privacy Policy does not apply to such other
              websites. Abhyudaya Jan Kalyan Nyas is not responsible for, or
              liable to any loss or damage caused by, the collection, use and
              retention of Personal Information by such websites. Please review
              the privacy policies of all websites you visit before you disclose
              any information to them.
            </p>
          ),
        },
        {
          heading: "8. Copyright Protection",
          content: (
            <p>
              All content on this Site — including graphics, text, icons,
              interfaces, audio clips, logos, images, and software — is the
              property of Abhyudaya Jan Kalyan Nyas and/or its content suppliers
              and is protected by Indian and international copyright laws.
              Permission is given to use the resources of this Site only for the
              purposes of making enquiries or donations. Any other use, including
              reproduction, modification, distribution, transmission, or
              republication, requires the express permission of Abhyudaya Jan
              Kalyan Nyas.
            </p>
          ),
        },
        {
          heading: "9. Variation of this Privacy Policy",
          content: (
            <p>
              Abhyudaya Jan Kalyan Nyas shall be absolutely entitled at its sole
              discretion to add to, alter, delete, or modify any of the terms
              and conditions contained herein at any time. Such changes shall be
              binding on you once you visit the Site after the Privacy Policy has
              been amended.
            </p>
          ),
        },
      ]}
    />
  );
}