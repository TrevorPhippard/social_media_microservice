    // vite.config.ts
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue' // or other framework plugin
    import tailwindcss from '@tailwindcss/vite'

    // export default defineConfig({
    //   plugins: [
    //     vue(), // or other framework plugin
    //     tailwindcss(),
    //   ],
    // })



    /** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: { extend: {} },
  plugins: [],
}