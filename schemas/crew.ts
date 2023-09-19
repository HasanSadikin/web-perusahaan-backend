import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'crew',
  title: 'Crew',
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
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter URL',
      type: 'url',
    }),
    defineField({
        name: 'facebookUrl',
        title: 'Facebook URL',
        type: 'url',
    }),
    defineField({
        name: 'instagramUrl',
        title: 'Instagram URL',
        type: 'url',
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
