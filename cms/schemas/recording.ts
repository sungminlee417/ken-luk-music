import { defineType, defineField } from 'sanity'

export const recording = defineType({
  name: 'recording',
  title: 'Recording',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'instrument',
      title: 'Instrument',
      type: 'string',
      options: {
        list: [
          { title: 'Classical Guitar', value: 'classical-guitar' },
          { title: 'Mandolin', value: 'mandolin' },
          { title: 'Both', value: 'both' },
        ],
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'genre',
      title: 'Genre',
      type: 'string',
      options: {
        list: [
          { title: 'Classical', value: 'classical' },
          { title: 'Reggae', value: 'reggae' },
          { title: 'Folk', value: 'folk' },
          { title: 'Jazz', value: 'jazz' },
          { title: 'Original', value: 'original' },
        ],
      },
    }),
    defineField({
      name: 'audioFile',
      title: 'Audio File',
      type: 'file',
      options: {
        accept: 'audio/*',
      },
    }),
    defineField({
      name: 'duration',
      title: 'Duration (seconds)',
      type: 'number',
    }),
    defineField({
      name: 'recordedAt',
      title: 'Recorded Date',
      type: 'date',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Recording',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL (Spotify, etc.)',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'instrument',
      media: 'coverImage',
    },
  },
})