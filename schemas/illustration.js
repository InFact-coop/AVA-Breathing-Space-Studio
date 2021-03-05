import { RiUserHeartLine } from 'react-icons/ri'

export default {
  name: 'illustration',
  title: 'Illustration',
  icon: RiUserHeartLine,
  type: 'document',
  fields: [
    { name: 'description', type: 'string', title: 'Description' },
    {
      name: 'color',
      type: 'string',
      options: {
        list: ['Coral', 'Light violet', 'Light teal'],
        layout: 'radio',
      },
    },
    {
      name: 'file',
      type: 'image',
      title: 'Illustration SVG file',
      accept: '.svg',
    },
  ],
}
