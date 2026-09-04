import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    target: 'es2018',
    cssCodeSplit: true,
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalizedId = id.replaceAll('\\', '/')
          if (normalizedId.includes('/node_modules/react/')) return 'react-vendor'
          if (normalizedId.includes('/node_modules/react-dom/')) return 'react-dom-vendor'
          if (normalizedId.includes('/node_modules/lucide-react/')) return 'lucide-vendor'
        },
      },
    },
  },
})