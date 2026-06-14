import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Abhyudaya Jan Kalyan Nyas | Service is Joy",
  description:
    "Abhyudaya Jan Kalyan Nyas works to uplift underprivileged communities in Sonipat, Haryana through education, healthcare, eye-care camps, scholarships and de-addiction programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-ivory text-pine">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
