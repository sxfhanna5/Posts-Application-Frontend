// central configuration values
// When running in development we proxy requests to the backend (see
// vite.config.js) so the base URL can be empty.  In production you can
// set VITE_API_URL to the full backend URL (e.g. https://api.example.com).
export const API_URL = import.meta.env.VITE_API_URL || '';
