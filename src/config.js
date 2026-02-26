// central configuration values
// Default to localhost at port 1234, matching backend default port.
// (Can be overridden via VITE_API_URL environment variable.)
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1234';
