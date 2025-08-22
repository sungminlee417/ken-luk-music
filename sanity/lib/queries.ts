import { groq } from 'next-sanity'

// Blog post queries
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    featured,
    category,
    featuredImage {
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
  }
`

export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    featuredImage {
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
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    featured,
    category,
    featuredImage {
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
    content
  }
`

export const postsByCategoryQuery = groq`
  *[_type == "post" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    featured,
    category,
    featuredImage {
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
  }
`

// Recording queries
export const recordingsQuery = groq`
  *[_type == "recording"] | order(recordedAt desc) {
    _id,
    title,
    slug,
    description,
    instrument,
    genre,
    duration,
    recordedAt,
    featured,
    externalUrl,
    coverImage {
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
    audioFile {
      asset-> {
        _id,
        url
      }
    }
  }
`

export const featuredRecordingsQuery = groq`
  *[_type == "recording" && featured == true] | order(recordedAt desc) {
    _id,
    title,
    slug,
    description,
    instrument,
    genre,
    duration,
    recordedAt,
    featured,
    externalUrl,
    coverImage {
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
    audioFile {
      asset-> {
        _id,
        url
      }
    }
  }
`

export const recordingBySlugQuery = groq`
  *[_type == "recording" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    instrument,
    genre,
    duration,
    recordedAt,
    featured,
    externalUrl,
    coverImage {
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
    audioFile {
      asset-> {
        _id,
        url
      }
    }
  }
`

export const recordingsByGenreQuery = groq`
  *[_type == "recording" && genre == $genre] | order(recordedAt desc) {
    _id,
    title,
    slug,
    description,
    instrument,
    genre,
    duration,
    recordedAt,
    featured,
    externalUrl,
    coverImage {
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
    audioFile {
      asset-> {
        _id,
        url
      }
    }
  }
`

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