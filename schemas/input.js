import { BsList } from 'react-icons/bs'

export default {
  name: 'input',
  title: 'Input',
  type: 'document',
  icon: BsList,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'placeholder',
      title: 'Placeholder',
      type: 'string',
    },
    {
      name: 'required',
      title: 'Required?',
      type: 'boolean',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Single line text field', value: 'input' },
          { title: 'Multi line text field', value: 'textarea' },
          { title: 'Radio button', value: 'radio' },
          { title: 'Need immediate help button', value: 'button' },
        ],
      },
      validation: Rule => Rule.length(1),
    },
  ],
}
