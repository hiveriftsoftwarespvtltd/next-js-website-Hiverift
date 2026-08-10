import { apiClient, ENDPOINTS } from "@/app/config/api.config";

export async function submitContactForm(formData: FormData) {
  try {
    const payload = {
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      phone: formData.get("phone") || "",
      company: formData.get("company") || "",
      service: formData.get("service") || "",
      message: formData.get("message") || "",
    };

    const response = await apiClient.post(`${ENDPOINTS.SUBMIT_FORM}/contact`, payload);
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error("Contact Form Submission Error:", error);
    return {
      success: false,
      message: error?.response?.data?.message || error?.message || "Failed to submit inquiry.",
    };
  }
}

export async function submitJobApplication(formData: FormData) {
  try {
    const response = await apiClient.post(ENDPOINTS.SUBMIT_FORM, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error("Job Application Submission Error:", error);
    return {
      success: false,
      message: error?.response?.data?.message || error?.message || "Failed to submit application.",
    };
  }
}
