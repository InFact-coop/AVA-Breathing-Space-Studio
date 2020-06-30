import { BsFileRichtext } from 'react-icons/bs'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: BsFileRichtext,
  fields: [
    {
      name: 'title',
      title: 'Nav Title',
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
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'blockContent',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
}
