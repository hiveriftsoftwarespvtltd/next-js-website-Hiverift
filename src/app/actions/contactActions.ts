

export async function submitContactForm(formData: FormData) {
  try {
    const response = await fetch("https://hiverift.com/api/sendmail.php", {
      method: "POST",
      body: formData,
    });
    
    const result = await response.json().catch(() => null);
    if (response.ok && result && (result.status === true || result.status === "success" || result.success === true)) {
      return { success: true };
    }
    return { success: false, message: result?.message || "Failed to send message." };
  } catch (error: any) {
    return { success: false, message: error.message || "Could not connect to the server." };
  }
}

export async function submitJobApplication(formData: FormData) {
  try {
   
    const response = await fetch("https://hiverift.com/submitfrom_api/api/v1/submitfrom", {
      method: "POST",
      body: formData,
    });

    const result = await response.json().catch(() => null);
    if (response.ok && result && (result.success === true || result.status === "success")) {
      return { success: true };
    }
    return { success: false, message: result?.message || "Failed to submit application." };
  } catch (error: any) {
    return { success: false, message: error.message || "Could not connect to the server." };
  }
}
