import { GrSupport } from 'react-icons/gr'

export default {
  name: 'supportService',
  title: 'Support Service',
  type: 'document',
  icon: GrSupport,
  fields: [
    {
      name: 'name',
      title: 'Name of organisation',
      type: 'string',
    },
    {
      name: 'shortName',
      title: 'Short name of organisation',
      type: 'string',
      options: {
        maxLength: 20,
      },
    },
    {
      name: 'regions',
      title: 'Regions',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'region' } }],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'supportCategory' } }],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'supportTag' } }],
    },
    {
      name: 'filterTypes',
      title: 'Filter Types',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'supportFilterType' } }],
    },
    {
      name: 'phonelines',
      title: 'Phonelines',
      type: 'array',
      of: [{ type: 'supportPhoneline' }],
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'url',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'likes',
      title: 'Number of likes',
      type: 'number',
      readOnly: 'true',
    },
    {
      name: 'commentsToggle',
      title: 'Comments enabled?',
      type: 'boolean',
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'comment' } }],
    },
  ],
  initialValue: {
    likes: 0,
  },
}
