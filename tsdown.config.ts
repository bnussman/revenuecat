import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    './src/v1/index.ts',
    './src/v2/index.ts'
  ],
});