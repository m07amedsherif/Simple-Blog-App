import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // <- correct import

export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // <- now this works because you imported the Vite plugin
  ],
});