import { AiOutlineMail } from 'react-icons/ai'

export default {
  name: 'message',
  title: 'Message',
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
      name: 'message',
      title: 'Message',
      type: 'blockContent',
    },
  ],
}
