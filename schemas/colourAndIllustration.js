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
          'Teal coral topic gradient',
          'Teal lilac topic gradient',
          'Gray teal topic gradient',
          'Cornflower gray violet topic gradient',
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
