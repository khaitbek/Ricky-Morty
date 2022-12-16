import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
      styl: {
        additionalData: `$injectedColor ?= orange`
      }
    }
  },
  build:{
    assetsInlineLimit:5000
  },
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src'),
      '@components':path.resolve(__dirname,"src","components")
    }
  }
})
