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