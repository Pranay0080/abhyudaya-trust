import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions | Abhyudaya Jan Kalyan Nyas",
  description:
    "Read the terms and conditions governing your use of the Abhyudaya Jan Kalyan Nyas website.",
};

export default function TermsConditionsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using our website."
      lastUpdated="January 2025"
      sections={[
        {
          content: (
            <p>
              You may download, display or print information from this Site (the
              "Information") solely for non-commercial personal use. You must
              retain and reproduce each and every copyright notice or other
              proprietary rights notice contained in any Information you
              download. You may not distribute, modify, transmit, reuse, repost,
              or use the content of the Site for public or commercial purposes —
              including text, images, graphics, audio, and video — without the
              written permission of{" "}
              <strong className="text-pine">Abhyudaya Jan Kalyan Nyas</strong>.
            </p>
          ),
        },
        {
          heading: "Intellectual Property",
          content: (
            <>
              <p>
                You should assume that everything you see or read on this Site
                is copyrighted unless otherwise noted, and may not be used
                except as provided in these Terms and Conditions or with the
                written permission of Abhyudaya Jan Kalyan Nyas.
              </p>
              <p>
                This Site may contain or reference trademarks, patents,
                proprietary information, technologies, products, processes or
                other proprietary rights of Abhyudaya Jan Kalyan Nyas and/or
                other parties. No license to or right in any such intellectual
                property is granted to or conferred upon you.
              </p>
            </>
          ),
        },
        {
          heading: "Accuracy of Information",
          content: (
            <>
              <p>
                While Abhyudaya Jan Kalyan Nyas uses reasonable efforts to
                include accurate and up-to-date information in the Site,
                Abhyudaya Jan Kalyan Nyas makes no warranties or representations
                with respect to the content of the Site, which is provided "as
                is".
              </p>
              <p>
                Abhyudaya Jan Kalyan Nyas accepts no responsibility or liability
                whatsoever arising from or in any way connected with the use of
                this Site or its content, including the accuracy, completeness,
                adequacy, timeliness, or comprehensiveness of the information
                contained on the Site.
              </p>
            </>
          ),
        },
        {
          heading: "Viruses and Damages",
          content: (
            <p>
              Abhyudaya Jan Kalyan Nyas assumes no responsibility, and shall not
              be liable for, any damages to, or viruses that may infect, your
              computer equipment or other property on account of your access to,
              use of, or browsing in the Site or your downloading of any
              materials, data, text, images, video, or audio from the Site.
            </p>
          ),
        },
        {
          heading: "Service Interruption",
          content: (
            <p>
              Abhyudaya Jan Kalyan Nyas reserves the right to interrupt or
              discontinue any or all of the functionality of its Site. Abhyudaya
              Jan Kalyan Nyas accepts no responsibility or liability whatsoever
              for any such interruption or discontinuance, whether the result of
              actions or omissions of Abhyudaya Jan Kalyan Nyas or a third
              party.
            </p>
          ),
        },
        {
          heading: "Communications",
          content: (
            <p>
              Any communication or material you transmit to the Site by
              electronic mail or otherwise, including any data, questions,
              feedback, ideas, queries, comments, or suggestions, is and will be
              treated as non-confidential and non-proprietary. Anything you
              transmit or post becomes the property of Abhyudaya Jan Kalyan Nyas
              or its affiliates and may be used for any purpose, including
              reproduction, disclosure, transmission, publication, broadcast, and
              posting. Abhyudaya Jan Kalyan Nyas is free to use any ideas,
              concepts, know-how, or techniques contained in any communication
              you send to the Site for any purpose whatsoever.
            </p>
          ),
        },
        {
          heading: "External Links",
          content: (
            <p>
              Because Abhyudaya Jan Kalyan Nyas has no control over and does not
              endorse any of the sites to which the Site is linked, you
              acknowledge that Abhyudaya Jan Kalyan Nyas is not responsible for
              the content of any off-Site pages or any other sites linked to the
              Site. Your linking to the Site, off-Site pages, or other sites is
              entirely at your own risk.
            </p>
          ),
        },
        {
          heading: "User Conduct",
          content: (
            <>
              <p>
                You are prohibited from posting or transmitting any unlawful,
                threatening, libelous, defamatory, obscene, scandalous,
                inflammatory, pornographic, or profane material, or any material
                that could constitute or encourage conduct that would be
                considered a criminal offense, give rise to civil liability, or
                otherwise violate any law.
              </p>
              <p>
                Abhyudaya Jan Kalyan Nyas will fully cooperate with any law
                enforcement authorities or court order requesting or directing
                Abhyudaya Jan Kalyan Nyas to disclose the identity of anyone
                posting any such information or materials.
              </p>
            </>
          ),
        },
        {
          heading: "Framing and Linking",
          content: (
            <p>
              Framing of this Site by external parties is not permitted.
              In-line linking or any other manner of incorporating parts of this
              Site in external websites is equally prohibited without the express
              permission of Abhyudaya Jan Kalyan Nyas.
            </p>
          ),
        },
        {
          heading: "Updates to Terms",
          content: (
            <p>
              Abhyudaya Jan Kalyan Nyas may at any time revise these Terms and
              Conditions by updating this posting. You are bound by any such
              revisions and should therefore periodically visit this page to
              review the then-current Terms and Conditions to which you are
              bound.
            </p>
          ),
        },
      ]}
    />
  );
}