import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/frontapp1/',   // 👈 ensures assets load relative to WAR context
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
