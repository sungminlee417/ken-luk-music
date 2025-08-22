// Sanity Image and Asset Types
export interface SanityImage {
  asset: {
    _id: string
    url: string
    metadata: {
      lqip: string
      dimensions: {
        width: number
        height: number
      }
    }
  }
  alt?: string
}

export interface SanityAudioFile {
  asset: {
    _id: string
    url: string
  }
}

// Content Types
export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  publishedAt: string
  featured: boolean
  category: string
  featuredImage?: SanityImage
  content?: any[]
}

export interface Recording {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  instrument: string
  genre: string
  duration?: number
  recordedAt: string
  featured: boolean
  externalUrl?: string
  coverImage?: SanityImage
  audioFile?: SanityAudioFile
}

export interface PageSection {
  sectionId?: string
  heading?: string
  content?: any[]
  quote?: string
  ctaText?: string
  ctaLink?: string
  backgroundImage?: SanityImage
}

export interface PageContent {
  _id: string
  pageId: string
  title: string
  subtitle?: string
  heroHeading?: string
  heroSubheading?: string
  heroImage?: SanityImage
  sections?: PageSection[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

// Navigation and Site Settings
export interface NavigationItem {
  title: string
  href: string
  isExternal?: boolean
}

export interface SiteSettings {
  _id: string
  siteName: string
  siteTitle?: string
  siteDescription?: string
  logo?: SanityImage
  navigation?: NavigationItem[]
  socialLinks?: {
    youtube?: string
    spotify?: string
    instagram?: string
    facebook?: string
    twitter?: string
  }
  contact?: {
    email?: string
    phone?: string
    address?: string
  }
}