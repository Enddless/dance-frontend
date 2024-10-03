import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), envCompatible()],
  base: '/studia/',
  resolve: {
    alias: {
      public: path.resolve(__dirname, 'public'),
      '@': path.resolve(__dirname, 'src'),
      '@fonts': path.resolve(__dirname, 'public/fonts')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString(); // Разделяет модули по пакетам
          }
        }
      }
    }
  }
});
