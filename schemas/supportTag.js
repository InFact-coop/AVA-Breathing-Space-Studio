import { GrSupport } from 'react-icons/gr'

export default {
  name: 'supportTag',
  title: 'Support Tag',
  type: 'document',
  icon: GrSupport,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'text',
      validation: Rule =>
        Rule.custom(text => {
          if (typeof text === 'undefined') {
            return true // Allow undefined values
          }
          return text.startsWith('<svg ') || 'Not a valid SVG icon'
        }),
      description:
        "Choose your icon from this page - https://remixicon.com/ - click the icon you want, change the color to #A8A8B7, select 'Copy SVG' and then paste the text here.",
    },
  ],
}
