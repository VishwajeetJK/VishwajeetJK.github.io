import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/vishwajeet-website/',
  server: {
    port: 3001,
  },
})

