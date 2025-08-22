import { client } from './client'
import { 
  postsQuery, 
  featuredPostsQuery, 
  postBySlugQuery, 
  postsByCategoryQuery,
  recordingsQuery,
  featuredRecordingsQuery,
  recordingBySlugQuery,
  recordingsByGenreQuery,
  pageContentQuery,
  siteSettingsQuery
} from './queries'

// Types
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

// Blog post functions
export async function getAllPosts(): Promise<BlogPost[]> {
  return await client.fetch(postsQuery)
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  return await client.fetch(featuredPostsQuery)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return await client.fetch(postBySlugQuery, { slug })
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  return await client.fetch(postsByCategoryQuery, { category })
}

// Recording functions
export async function getAllRecordings(): Promise<Recording[]> {
  return await client.fetch(recordingsQuery)
}

export async function getFeaturedRecordings(): Promise<Recording[]> {
  return await client.fetch(featuredRecordingsQuery)
}

export async function getRecordingBySlug(slug: string): Promise<Recording | null> {
  return await client.fetch(recordingBySlugQuery, { slug })
}

export async function getRecordingsByGenre(genre: string): Promise<Recording[]> {
  return await client.fetch(recordingsByGenreQuery, { genre })
}

// Page content functions
export async function getPageContent(pageId: string): Promise<PageContent | null> {
  return await client.fetch(pageContentQuery, { pageId })
}

// Site settings functions
export async function getSiteSettings(): Promise<SiteSettings | null> {
  return await client.fetch(siteSettingsQuery)
}

// Utility functions
export function urlFor(source: SanityImage) {
  if (!source?.asset) return ''
  return source.asset.url
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}