import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Fun AI'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
