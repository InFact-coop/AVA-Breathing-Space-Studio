import { RiUserHeartLine } from 'react-icons/ri'

export default {
  name: 'selfcareTechnique',
  title: 'Self-Care Technique',
  type: 'document',
  icon: RiUserHeartLine,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'selfcareCategory' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'videoLink',
      title: 'Link to Video',
      type: 'url',
      validation: Rule =>
        Rule.custom(url => {
          if (typeof url === 'undefined') {
            return true // Allow undefined values
          }
          return (
            url.startsWith('https://www.youtube.com/embed/') ||
            'Not a valid embed URL'
          )
        }),
      description:
        "To upload a YouTube video, go to the video on YouTube, click 'Share', then 'Embed' and copy the url from the codeblock. It should start with 'https://www.youtube.com/embed/'",
    },
    {
      name: 'audio',
      title: 'Audio file',
      type: 'file',
      accept: 'audio/mp3',
      validation: Rule =>
        Rule.custom(
          file =>
            file === undefined ||
            ['mp3', 'ogg', 'wav'].some(ext => file.asset._ref.endsWith(ext)) ||
            'Please choose an audio file with .mp3, .ogg, or .wav extension',
        ),
      description: 'You can choose MP3 files, WAV files, or OGG files',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'likes',
      title: 'Number of likes',
      type: 'number',
      readOnly: 'true',
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'comment' } }],
    },
  ],
  initialValue: {
    likes: 0,
  },
}
