import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  assetsInclude: ['**/*.webp', '**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg', '**/*.gif'],
  build: {
    chunkSizeWarningLimit: 1000,  // Aumentar el límite de chunk (por defecto es 500 KB)
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['@lottiefiles/react-lottie-player', 'react', 'react-dom'],  // Dividir en chunks más pequeños
        },
      },
    },
  },
});
