import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Keep Vite on its default port
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Redirect API calls to Vercel Dev
        changeOrigin: true,
      },
    },
  },
})