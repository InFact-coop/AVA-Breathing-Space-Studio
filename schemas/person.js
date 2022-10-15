import { ImProfile } from 'react-icons/im'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: ImProfile,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'topic' } }],
    },
  ],
}
