import { RiChatSmile3Line } from 'react-icons/ri'

export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  icon: RiChatSmile3Line,
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'text',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'publishInApp',
      title: 'Publish in app',
      type: 'boolean',
    },
  ],
  initialValue: {
    publishedAt: new Date().toISOString(),
    publishInApp: false,
  },
}
