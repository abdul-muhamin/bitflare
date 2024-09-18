// utils/calendlyUrl.js
export function getCalendlyUrl() {
  const baseUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
  console.log('Calendly Base URL:', baseUrl); // Add this line to debug

  if (!baseUrl) {
    console.error("Calendly URL is not defined in environment variables");
    return "";
  }

  // Return the base URL without dynamic parameters
  return baseUrl;
}
