export default function resolveProductionUrl(document) {
  return `https://breathingspace-staging.herokuapp.com/${document.slug.current}`
}
