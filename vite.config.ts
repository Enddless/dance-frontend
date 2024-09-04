import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), envCompatible()],
  resolve: {
    alias: {
      public: path.resolve(__dirname, 'public'),
      '@': path.resolve(__dirname, 'src'),
      '@fonts': path.resolve(__dirname, 'public/fonts')
    }
  }
});
