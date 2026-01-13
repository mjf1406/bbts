import path from 'path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { tanstackRouter } from '@tanstack/router-plugin/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    devtools(),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React
          'vendor-react': ['react', 'react-dom'],
          // InstantDB (typically large)
          'vendor-instant': ['@instantdb/react', '@instantdb/core'],
          // Router
          'vendor-router': ['@tanstack/react-router'],
          // UI libraries
          'vendor-ui': [
            '@radix-ui/react-avatar',
            '@radix-ui/react-dialog',
            'vaul',
            'class-variance-authority',
            'clsx',
            'tailwind-merge',
          ],
          // Icons (often large due to tree-shaking limits)
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },
})
