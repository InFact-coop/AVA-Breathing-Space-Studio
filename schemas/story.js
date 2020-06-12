import { RiQuillPenLine } from 'react-icons/ri'

export default {
  name: 'story',
  title: 'Story',
  type: 'document',
  icon: RiQuillPenLine,
  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'storyTag' } }],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'author',
        maxLength: 96,
      },
    },
    {
      name: 'preview',
      title: 'Preview',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'likes',
      title: 'Number of likes',
      type: 'number',
      readOnly: 'true',
    },
  ],
}
