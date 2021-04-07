import { GrSupport } from 'react-icons/gr'

export default {
  name: 'supportFilterType',
  title: 'Support Filter Type',
  type: 'document',
  icon: GrSupport,
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'filterCategory',
      title: 'Filter Category',
      type: 'reference',
      to: [{ type: 'supportFilterCategory' }],
    },
  ],
}
