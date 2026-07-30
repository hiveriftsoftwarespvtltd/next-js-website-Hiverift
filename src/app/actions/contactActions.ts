

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") || "N/A";
    const email = formData.get("email") || "N/A";
    const phone = formData.get("phone") || "N/A";
    const company = formData.get("company") || "N/A";
    const service = formData.get("service") || "N/A";
    const message = formData.get("message") || "N/A";

    const text = `*New Contact Inquiry* 🚀\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Company:* ${company}\n*Service:* ${service}\n\n*Message:*\n${message}`;
    
    const whatsappUrl = `https://wa.me/918814930229?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
    
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message || "Could not open WhatsApp." };
  }
}

export async function submitJobApplication(formData: FormData) {
  try {
    const name = formData.get("fullName") || "N/A";
    const email = formData.get("email") || "N/A";
    const phone = formData.get("phone") || "N/A";
    const position = formData.get("position") || "N/A";
    const portfolio = formData.get("portfolio") || "N/A";
    const coverLetter = formData.get("coverLetter") || "N/A";

    const text = `*New Job Application* 💼\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Position:* ${position}\n*Portfolio:* ${portfolio}\n\n*Cover Letter:*\n${coverLetter}\n\n_(Note: Please attach your resume to this chat if required.)_`;
    
    const whatsappUrl = `https://wa.me/918814930229?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');

    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message || "Could not open WhatsApp." };
  }
}
