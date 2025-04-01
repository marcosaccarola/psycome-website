import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignora tutti gli errori TypeScript durante il build
        if (warning.code?.startsWith('TS')) return
        warn(warning)
      }
    }
  },
  esbuild: {
    logLevel: 'error',
    logLimit: 0
  }
})
