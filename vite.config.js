import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_URL || '/',
  build: {
    outDir: 'dist', // Ensure this is correctly set to 'dist' for outputting files to /dist directory
  },
})
