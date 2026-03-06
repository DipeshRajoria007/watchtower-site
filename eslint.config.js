import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

export default defineConfig([
  globalIgnores(['.next/**', 'dist/**', 'next-env.d.ts', 'out/**', 'tmp/**']),
  ...nextVitals,
  ...nextTypescript,
])
