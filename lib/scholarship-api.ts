export type ScholarshipFormData = {
  fullName: string;
  dateOfBirth: string;
  isIndianCitizen: string;
  gender: string;
  schools: { school: string; yearOfPassing: string; percentage: string }[];
  courseDetails: string;
  courseCompletionDate: string;
  extracurricular: string;
  communityActivities: string;
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  familyIncome: string;
  references: { name: string; relationship: string; homePhone: string; workPhone: string }[];
  phone: string;
  email: string;
  address: string;
  digitalSignature: string;
  essay: string;
  declarationAccepted: boolean;
};

export type ApiResponse = {
  success: boolean;
  message: string;
  applicationId?: string;
};

const API_URL = "/api/scholarship";

export async function submitScholarshipApplication(
  data: ScholarshipFormData
): Promise<ApiResponse> {
  // TODO: uncomment when backend is ready
  // const response = await fetch(API_URL, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });
  // if (!response.ok) throw new Error("Server error");
  // return response.json();

  // ── MOCK (remove when backend is ready) ──
  console.log("📋 Scholarship form submitted:", data);
  await new Promise((res) => setTimeout(res, 1500));
  return {
    success: true,
    message: "Application submitted successfully.",
    applicationId: `BPS-${Date.now()}`,
  };
}