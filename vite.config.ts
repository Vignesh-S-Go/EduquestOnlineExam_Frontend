import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',   // 👈 ensures assets load relative to WAR context
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
