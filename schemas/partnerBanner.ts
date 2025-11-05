import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'partnerBanner',
  title: 'Partner Baneri',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Naziv Partnera',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Slika/Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link ka sajtu partnera',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'order',
      title: 'Redosled prikaza',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'active',
      title: 'Aktivan',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'order',
    },
    prepare({ title, media, subtitle }) {
      return {
        title,
        media,
        subtitle: `Redosled: ${subtitle}`,
      }
    },
  },
  orderings: [
    {
      title: 'Redosled prikaza',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
