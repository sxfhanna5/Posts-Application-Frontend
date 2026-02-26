import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // use a different port than the backend (which listens on 1234)
    port: 3000,
    // proxy API calls during development so frontend consumes the same
    // origin and we don't accidentally fetch its own index.html.
    proxy: {
      '/posts': {
        target: 'http://localhost:1234',
        changeOrigin: true,
      },
    },
  },
  // ensure relative asset paths in production (helpful for static hosts)
  base: './'
});