import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { dataset, projectId } from './cms/config/env'
import { schemaTypes } from './cms/schemas'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool(),
  ],
})