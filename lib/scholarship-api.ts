export type SchoolEntry = {
  school: string;
  yearOfPassing: string;
  percentage: string;
};

export type ReferenceEntry = {
  name: string;
  relationship: string;
  homePhone: string;
  workPhone: string;
};

export type ScholarshipFormData = {
  fullName: string;
  dateOfBirth: string;
  isIndianCitizen: string;
  gender: string;
  schools: SchoolEntry[];
  courseDetails: string;
  courseCompletionDate: string;
  extracurricular: string;
  communityActivities: string;
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  familyIncome: string;
  references: ReferenceEntry[];
  phone: string;
  email: string;
  address: string;
  digitalSignature: string;
  essay: string;
  declarationAccepted: boolean;
};

export type ScholarshipSubmitResponse = {
  success: boolean;
  applicationId?: string;
  message?: string;
};

export async function submitScholarshipApplication(
  data: ScholarshipFormData
): Promise<ScholarshipSubmitResponse> {
  const res = await fetch("/api/scholarship", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    return {
      success: false,
      message: json?.error || "Submission failed. Please try again.",
    };
  }

  return {
    success: true,
    applicationId: json.applicationId,
  };
}