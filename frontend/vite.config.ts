import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// http://formflow.codespark.lt
// http://localhost:6001

export default defineConfig({
  plugins: [react()],
  base: "http://formflow.codespark.lt",
});
