import { MdOutlineTopic } from 'react-icons/md'

export default {
  name: 'topic',
  title: 'Topic',
  type: 'document',
  icon: MdOutlineTopic,
  fields: [
    {
      name: 'summaryTitle',
      title: 'Summary Title',
      type: 'string',
      description: 'A short title to be used as the page header',
    },
    {
      name: 'quoteTitle',
      title: 'Quote Title',
      type: 'string',
      description:
        'A title in the form of a quote to help the user understand what kind of content will be contained in this topic',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'illustration',
      title: 'Featured illustration',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'colourAndBackgroundIllustration',
      title: 'Colour and illustration for cards',
      type: 'reference',
      to: [{ type: 'colourAndIllustration' }],
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
    },
    {
      name: 'onHomepage',
      title: 'Featured on homepage?',
      type: 'boolean',
    },
    {
      name: 'articles',
      title: 'Articles',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'article' } }],
    },
    {
      name: 'people',
      title: 'People',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'person' } }],
    },
    {
      name: 'stories',
      title: 'Stories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'story' } }],
    },
    {
      name: 'services',
      title: 'Support services',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'supportService' } }],
    },
  ],
}
