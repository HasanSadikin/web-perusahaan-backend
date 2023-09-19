import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'feedback',
  title: 'Feedback',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
        name: 'from',
        title: 'From',
        type: 'string',
      }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
    defineField({
        name: 'feedback',
        title: 'Feedback',
        type: 'blockContent',
      }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
