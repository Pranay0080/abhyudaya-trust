import DonationForm from "../../components/DonationForm";

export const metadata = {
  title: "Donate Now | Abhyudaya Trust",
  description:
    "Support Abhyudaya Trust's initiatives. Enter your details to make a secure donation.",
};

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Donate Now
        </h1>
        <p className="mt-3 text-gray-600">
          Your contribution helps us continue our mission. Fill in your
          details below to proceed to secure payment.
        </p>
      </div>

      <DonationForm />
    </main>
  );
}