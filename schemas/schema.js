// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import comment from './comment'
import selfcareCategory from './selfcareCategory'
import selfcareTechnique from './selfcareTechnique'
import supportCategory from './supportCategory'
import supportService from './supportService'
import supportPhoneline from './supportPhoneline'
import supportTag from './supportTag'
import supportFilterType from './supportFilterType'
import supportFilterCategory from './supportFilterCategory'
import story from './story'
import storyTag from './storyTag'
import fileType from './file'
import page from './page'
import input from './input'
import form from './form'
import message from './message'
import feedback from './feedback'
import illustration from './illustration'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    comment,
    selfcareCategory,
    selfcareTechnique,
    illustration,
    supportCategory,
    supportTag,
    supportService,
    supportPhoneline,
    supportFilterType,
    supportFilterCategory,
    story,
    storyTag,
    blockContent,
    fileType,
    page,
    input,
    form,
    message,
    feedback,
  ]),
})
