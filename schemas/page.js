import { BsFileRichtext } from 'react-icons/bs'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: BsFileRichtext,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'pageTitle',
      title: 'Page Title (if different from nav title above)',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
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
  ],
}
