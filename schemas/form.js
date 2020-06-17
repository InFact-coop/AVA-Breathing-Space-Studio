import { BsList } from 'react-icons/bs'

export default {
  name: 'form',
  title: 'Form',
  type: 'document',
  icon: BsList,
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'inputs',
      title: 'Inputs',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'input' } }],
    },
    {
      name: 'confirmationText',
      title: 'Confirmation Text',
      type: 'string',
    },
  ],
}
