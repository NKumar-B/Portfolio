


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5173,
//     strictPort: true, // Forces consistent port use
//   }
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist',
//   },
//   server: {
//     port: 5173,
//     strictPort: true,
//   }
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Changing to absolute root path to ensure production consistency
  base: '/', 
  build: {
    outDir: 'dist',
    // This helps debug by keeping file names readable in the build
    minify: false, 
  }
})