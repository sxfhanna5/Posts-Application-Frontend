// central configuration values
// Default to localhost at port 3000, no '/api' prefix since the backend
// now serves routes at the root.
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
