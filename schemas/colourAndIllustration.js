import { IoColorPaletteOutline } from 'react-icons/io'

export default {
  name: 'colourAndIllustration',
  title: 'Colour And Illustration',
  icon: IoColorPaletteOutline,
  type: 'document',
  fields: [
    { name: 'description', type: 'string', title: 'Description' },
    {
      name: 'color',
      type: 'string',
      options: {
        list: [
          'Coral',
          'Light violet',
          'Light teal',
          'Teal coral',
          'Gray lilac',
          'Pale blue cornflower',
          'Gray teal',
        ],
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
