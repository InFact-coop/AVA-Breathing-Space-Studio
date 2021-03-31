import { RiQuillPenLine } from 'react-icons/ri'

export default {
  name: 'story',
  title: 'Story',
  type: 'document',
  icon: RiQuillPenLine,
  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: string => string.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'storyTag' } }],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'author',
        maxLength: 96,
      },
      validation: string => string.required(),
    },
    {
      name: 'preview',
      title: 'Preview',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description:
        'Enter the story here if it is only in written format. If you have a media file and transcript, please use the fields supplied below.',
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
      name: 'video',
      title: 'Video file',
      type: 'file',
      accept: 'video/mp4',
      validation: Rule =>
        Rule.custom(
          file =>
            file === undefined ||
            ['mp4'].some(ext => file.asset._ref.endsWith(ext)) ||
            'Please choose an audio file with .mp4 extension',
        ),
      description: 'You can only upload an mp4 video file',
    },
    {
      name: 'transcript',
      title: 'Transcript',
      type: 'blockContent',
      description:
        'Only enter the transcript if you have also uploaded a video or audio file.',
    },
    {
      name: 'likes',
      title: 'Number of likes',
      type: 'number',
      readOnly: 'true',
    },
  ],
  initialValue: {
    likes: 0,
  },
}
