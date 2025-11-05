import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Biro za Veštačenja CMS',
  basePath: '/studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Sadržaj')
          .items([
            S.documentTypeListItem('blog').title('Blog'),
            S.documentTypeListItem('partnerBanner').title('Partner Baneri'),
            S.documentTypeListItem('teamMember').title('Naš Tim'),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
