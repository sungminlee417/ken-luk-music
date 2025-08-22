import { groq } from 'next-sanity'

// Page content queries
export const pageContentQuery = groq`
  *[_type == "pageContent" && pageId == $pageId][0] {
    _id,
    pageId,
    title,
    subtitle,
    heroHeading,
    heroSubheading,
    heroImage {
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
    sections[] {
      sectionId,
      heading,
      content,
      quote,
      ctaText,
      ctaLink,
      backgroundImage {
        asset-> {
          _id,
          url,
          metadata {
            lqip,
            dimensions
          }
        },
        alt
      }
    },
    seo {
      metaTitle,
      metaDescription
    }
  }
`