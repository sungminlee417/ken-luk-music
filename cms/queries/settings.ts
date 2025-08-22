import { groq } from 'next-sanity'

// Site settings query
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    siteName,
    siteTitle,
    siteDescription,
    logo {
      asset-> {
        _id,
        url,
        metadata {
          lqip,
          dimensions
        }
      },
      alt
    },
    navigation[] {
      title,
      href,
      isExternal
    },
    socialLinks,
    contact
  }
`