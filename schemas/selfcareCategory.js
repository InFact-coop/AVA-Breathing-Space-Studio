import { RiUserHeartLine } from 'react-icons/ri'

export default {
  name: 'selfcareCategory',
  title: 'Self-Care Category',
  type: 'document',
  icon: RiUserHeartLine,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'illustration',
      title: 'Illustration for cards',
      type: 'reference',
      to: [{ type: 'illustration' }],
    },
  ],
}
