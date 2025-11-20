import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Reference',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Ime Firme',
      type: 'string',
      description: 'Naziv firme ili klijenta (opciono)',
    }),
    defineField({
      name: 'clientImage',
      title: 'Slika Klijenta/Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'testimonial',
      title: 'Opis',
      type: 'text',
      rows: 3,
      description: 'Kratak opis reference (opciono)',
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
      title: 'Aktivna',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'clientName',
      media: 'clientImage',
      order: 'order',
    },
    prepare({ title, media, order }) {
      return {
        title,
        media,
        subtitle: `Redosled: ${order}`,
      }
    },
  },
  orderings: [
    {
      title: 'Redosled prikaza',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Datum (najnovije prvo)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
})
