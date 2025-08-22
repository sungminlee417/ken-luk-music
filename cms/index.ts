import { client } from './config/client'
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

// Export types
export * from './types'

// Blog post functions
export async function getAllPosts() {
  return await client.fetch(postsQuery)
}

export async function getFeaturedPosts() {
  return await client.fetch(featuredPostsQuery)
}

export async function getPostBySlug(slug: string) {
  return await client.fetch(postBySlugQuery, { slug })
}

export async function getPostsByCategory(category: string) {
  return await client.fetch(postsByCategoryQuery, { category })
}

// Recording functions
export async function getAllRecordings() {
  return await client.fetch(recordingsQuery)
}

export async function getFeaturedRecordings() {
  return await client.fetch(featuredRecordingsQuery)
}

export async function getRecordingBySlug(slug: string) {
  return await client.fetch(recordingBySlugQuery, { slug })
}

export async function getRecordingsByGenre(genre: string) {
  return await client.fetch(recordingsByGenreQuery, { genre })
}

// Page content functions
export async function getPageContent(pageId: string) {
  return await client.fetch(pageContentQuery, { pageId })
}

// Site settings functions
export async function getSiteSettings() {
  return await client.fetch(siteSettingsQuery)
}

// Utility functions
export function urlFor(source: any) {
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