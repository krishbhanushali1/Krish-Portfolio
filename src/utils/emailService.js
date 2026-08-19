import emailjs from '@emailjs/browser';

// ═══════════════════════════════════════════════════════════════
// Email Service Configuration
// Choose the method easiest for you:
//
// OPTION A (Recommended - 1 Key only): Web3Forms
// 1. Visit https://web3forms.com and type your email to get a free Access Key.
// 2. Paste it in WEB3FORMS_ACCESS_KEY below (or set VITE_WEB3FORMS_ACCESS_KEY in .env).
//
// OPTION B: EmailJS
// Fill in your Service ID, Template ID, and Public Key below (or in .env).
// ═══════════════════════════════════════════════════════════════

export const EMAIL_CONFIG = {
  // Option A: Web3Forms (Easiest — just 1 key, no template setup required)
  WEB3FORMS_ACCESS_KEY:
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'e557b635-3e7a-4825-a48c-b5c799b03a34',

  // Option B: EmailJS
  EMAILJS_SERVICE_ID:
    import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
  EMAILJS_TEMPLATE_ID:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
  EMAILJS_PUBLIC_KEY:
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
};

/**
 * Sends a contact form email using Web3Forms or EmailJS.
 * @param {Object} formData - The form data containing name, email, and message.
 * @returns {Promise} - The send result.
 */
export const sendEmail = async (formData) => {
  // 1. Check if Web3Forms key is provided
  if (
    EMAIL_CONFIG.WEB3FORMS_ACCESS_KEY &&
    EMAIL_CONFIG.WEB3FORMS_ACCESS_KEY !== 'YOUR_WEB3FORMS_ACCESS_KEY_HERE'
  ) {
    const formPayload = new FormData();
    formPayload.append('access_key', EMAIL_CONFIG.WEB3FORMS_ACCESS_KEY.trim());
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('message', formData.message);
    formPayload.append('subject', `New Portfolio Message from ${formData.name}`);
    formPayload.append('from_name', formData.name);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formPayload,
    });

    const data = await response.json();
    if (!data.success) {
      throw new Error(data.message || 'Failed to send message via Web3Forms');
    }
    return data;
  }

  // 2. Check if EmailJS is configured
  if (
    EMAIL_CONFIG.EMAILJS_SERVICE_ID !== 'your_service_id' &&
    EMAIL_CONFIG.EMAILJS_TEMPLATE_ID !== 'your_template_id' &&
    EMAIL_CONFIG.EMAILJS_PUBLIC_KEY !== 'your_public_key'
  ) {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Krish Bhanushali',
    };

    return emailjs.send(
      EMAIL_CONFIG.EMAILJS_SERVICE_ID,
      EMAIL_CONFIG.EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.EMAILJS_PUBLIC_KEY
    );
  }

  // 3. Fallback mock in development when no keys are configured
  console.warn(
    'No email service keys configured. To receive real emails, add your Web3Forms Access Key or EmailJS keys in src/utils/emailService.js',
    formData
  );
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, text: 'Success (Simulated)' });
    }, 1200);
  });
};

