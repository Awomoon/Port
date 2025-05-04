import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

// Generate last updated date
const getLastUpdated = () => {
  try {
    return execSync('git log -1 --format=%cd --date=format:"%B %d, %Y"').toString().trim()
  } catch {
    return new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'last-updated',
      transform(code, id) {
        if (id.includes('Footer.jsx')) {
          return code.replace(
            /__LAST_UPDATED__/g,
            JSON.stringify(getLastUpdated())
          )
        }
      }
    }
  ]
})