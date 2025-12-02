import { cwd } from 'node:process'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(cwd())

import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_8etg6Khumknz@ep-round-truth-ahy1pa41-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require',
  },
})
