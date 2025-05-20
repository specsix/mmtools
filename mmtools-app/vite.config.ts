import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/mmtools/',    // ← your repo name
  plugins: [react()],
  build: { outDir: 'docs' }
})
