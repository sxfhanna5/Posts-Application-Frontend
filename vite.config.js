import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // use a different port than the backend (which listens on 1234)
    // default Vite port is 5173, but 3000 is fine too
    port: 3000
  },
  // ensure relative asset paths in production (helpful for static hosts)
  base: './'
});