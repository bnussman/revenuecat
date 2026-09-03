import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig([
  {
    input: './openapi-v1.yaml',
    output: 'src/v1/',
    plugins: ['@hey-api/client-fetch'],
    parser: {
      transforms: {
        propertiesRequiredByDefault: true,
      },
    },
  },
  {
    input: './openapi-v2.yaml',
    output: 'src/v2/',
    plugins: ['@hey-api/client-fetch'],
  },
]);