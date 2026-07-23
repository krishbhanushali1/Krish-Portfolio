import emailjs from '@emailjs/browser';

// ═══════════════════════════════════════════════════════════════
// EmailJS Integration Service
// Configure your Service ID, Template ID, and Public Key below.
// ═══════════════════════════════════════════════════════════════

const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id',   // TODO: Replace with your EmailJS service ID
  TEMPLATE_ID: 'your_template_id', // TODO: Replace with your EmailJS template ID
  PUBLIC_KEY: 'your_public_key',   // TODO: Replace with your EmailJS public key
};

/**
 * Sends a contact form email using EmailJS.
 * @param {Object} formData - The form data containing name, email, and message.
 * @returns {Promise} - The EmailJS send result.
 */
export const sendEmail = async (formData) => {
  // If the user hasn't configured EmailJS yet, mock a successful response in development
  if (
    EMAILJS_CONFIG.SERVICE_ID === 'your_service_id' ||
    EMAILJS_CONFIG.TEMPLATE_ID === 'your_template_id' ||
    EMAILJS_CONFIG.PUBLIC_KEY === 'your_public_key'
  ) {
    console.warn(
      'EmailJS is not fully configured. Simulating email sending in development mode.',
      formData
    );
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ status: 200, text: 'Success (Mocked)' });
      }, 1500);
    });
  }

  // Actual EmailJS send
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_name: 'Krish Bhanushali',
  };

  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    templateParams,
    EMAILJS_CONFIG.PUBLIC_KEY
  );
};
