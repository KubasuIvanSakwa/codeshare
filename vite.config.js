import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@uiw/react-codemirror', '@codemirror/lang-javascript', '@codemirror/theme-one-dark'],
  },
})
