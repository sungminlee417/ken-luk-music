import { groq } from 'next-sanity'

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