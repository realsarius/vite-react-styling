import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TailwindCSSVitePlugin } from 'tailwindcss-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TailwindCSSVitePlugin()],
});
