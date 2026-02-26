// central configuration values
// When running in development we proxy requests to the backend (see
// vite.config.js) so the base URL can be empty.  In production you can
// set VITE_API_URL to the full backend URL (e.g. https://api.example.com).
// strip any trailing slash to avoid ‘//posts’ problems
const rawApiUrl = import.meta.env.VITE_API_URL || '';
export const API_URL = rawApiUrl.replace(/\/+$/g, '');
