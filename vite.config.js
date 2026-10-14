import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base works for both Vercel (root) and GitHub Pages (/<repo>/)
export default defineConfig({
  plugins: [react()],
  base: './',
})
