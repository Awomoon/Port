import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase limit to 1000 kB
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          framer: ['framer-motion'],
          tsparticles: ['@tsparticles/react'],
          swiper: ['swiper'],
          icons: ['react-icons']
        }
      }
    }
  }
})