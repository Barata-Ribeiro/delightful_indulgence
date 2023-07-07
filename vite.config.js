import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import autoprefixer from 'autoprefixer';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
  },
  publicDir: 'public',
  plugins: [react(), svgr(), eslint({ cache: false, fix: true })],
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
