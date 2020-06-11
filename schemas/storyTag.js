import { RiQuillPenLine } from 'react-icons/ri'

export default {
  name: 'storyTag',
  title: 'Story Tag',
  type: 'document',
  icon: RiQuillPenLine,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
}
