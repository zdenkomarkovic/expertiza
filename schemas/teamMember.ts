import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Članovi Tima',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Ime i Prezime',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Pozicija/Uloga',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Fotografija',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biografija',
      type: 'text',
      rows: 4,
      description: 'Kratak opis člana tima, njegovih kvalifikacija i iskustva',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Telefon',
      type: 'string',
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
      title: 'name',
      subtitle: 'position',
      media: 'image',
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
