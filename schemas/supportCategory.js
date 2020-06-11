import { FaShapes } from 'react-icons/fa'

export default {
  name: 'supportCategory',
  title: 'Support Category',
  type: 'document',
  icon: FaShapes,
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
