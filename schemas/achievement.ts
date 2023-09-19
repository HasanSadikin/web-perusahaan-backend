import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'achievements',
  title: 'Achievements',
  type: 'document',
  fields: [
    defineField({
        name: 'totalEmployees',
        title: 'Total Employee',
        type: 'number',
    }),
    defineField({
        name: 'totalCustomer',
        title: 'Total Customer',
        type: 'number',
    }),
    defineField({
        name: 'totalSales',
        title: 'Total Sales',
        type: 'number',
    }),
    defineField({
        name: 'totalLocations',
        title: 'Total Locations',
        type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
