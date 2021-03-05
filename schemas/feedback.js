import { AiOutlineMail } from 'react-icons/ai'

export default {
  name: 'feedback',
  title: 'Feedback',
  type: 'document',
  icon: AiOutlineMail,
  fields: [
    {
      name: 'from',
      title: 'From',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'blockContent',
    },
  ],
}
