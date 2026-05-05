import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes the built asset URLs relative, so the app works both
// on GitHub Pages project sites like https://user.github.io/repo-name/
// and in local previews.
export default defineConfig({
  plugins: [react()],
  base: './',
})
