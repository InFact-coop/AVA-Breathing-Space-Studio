import { GrSupport } from 'react-icons/gr'

export default {
  name: 'supportCategory',
  title: 'Support Category',
  type: 'document',
  icon: GrSupport,
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
  ],
}
