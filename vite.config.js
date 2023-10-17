// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { resolve } from 'path';

// // https://vitejs.dev/config/
// export default defineConfig({ 

//   resolve: {
//     alias: {
//       '@': resolve(__dirname, './src')
//     },
//   },
//   plugins: [react()],
// })

// https://vitejs.dev/config/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  server: {},
});