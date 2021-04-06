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
      name: 'filterCategories',
      title: 'Filter Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'supportFilterCategory' } }],
    },
  ],
}
