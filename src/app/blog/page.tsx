'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getAllPosts, getFeaturedPosts, getPageContent, BlogPost, PageContent } from '@/cms'

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([])
  const [pageContent, setPageContent] = useState<PageContent | null>(null)
  
  useEffect(() => {
    async function fetchContent() {
      try {
        const [allPosts, featured, content] = await Promise.all([
          getAllPosts(),
          getFeaturedPosts(),
          getPageContent('blog')
        ])
        setPosts(allPosts)
        setFeaturedPosts(featured)
        setPageContent(content)
      } catch (error) {
        console.log('No Sanity content found, using fallbacks')
        setPosts([])
        setFeaturedPosts([])
        setPageContent(null)
      }
    }
    fetchContent()
  }, [])
  
  const categories = ['All', 'Classical Guitar', 'Mandolin', 'Reggae', 'Performance', 'Recording']
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Modern Design */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-background to-accent-100 opacity-60"></div>
        <div className="absolute top-32 right-32 w-96 h-96 bg-accent-200 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-accent-300 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto py-32 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block mb-8"
            >
              <span className="text-accent font-bold text-lg uppercase tracking-widest bg-accent-50 px-6 py-3 rounded-full">
                {pageContent?.subtitle}
              </span>
            </motion.div>
            
            <h1 className="text-6xl lg:text-8xl font-display font-bold text-foreground mb-8 leading-none">
              {pageContent?.heroHeading}
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-text-light leading-relaxed max-w-4xl mx-auto"
            >
              {pageContent?.heroSubheading}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-20 px-4">
        
        {/* Category Filter with Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              {pageContent?.sections?.[0]?.heading}
            </h2>
            <p className="text-lg text-text-muted">
              {pageContent?.sections?.[0]?.quote}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                className={`px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-2xl ${
                  category === "All"
                    ? "bg-gradient-to-r from-accent to-accent-light text-white shadow-xl transform scale-105"
                    : "bg-card-bg text-text-light border-2 border-border hover:bg-accent-50 hover:text-accent hover:border-accent-light hover:shadow-lg hover:scale-105"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          {featuredPosts.map((post) => (
            <div key={post._id} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-background rounded-3xl"></div>
              <div className="relative card-modern shadow-2xl overflow-hidden bg-gradient-to-br from-card-bg/90 to-accent-50/90 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-accent-light"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12">
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="bg-gradient-to-r from-accent to-accent-light text-white text-sm px-4 py-2 rounded-full font-bold shadow-lg">
                        ✨ Featured Post
                      </span>
                      <span className="text-accent font-medium">{post.category}</span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                      <Link href={`/blog/${post.slug.current}`} className="hover:text-accent transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-xl text-text-light leading-relaxed mb-8">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="bg-accent-100 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Link 
                        href={`/blog/${post.slug.current}`} 
                        className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg"
                      >
                        Read Full Article
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      
                      <div className="text-sm text-text-muted">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-80 bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl shadow-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-light/30"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center shadow-2xl">
                          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.section>

        {/* Regular Posts Grid */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">Latest Articles</h2>
            <p className="text-lg text-text-muted">Dive deeper into musical techniques and insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-modern shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-light/20 to-accent/30"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center shadow-xl opacity-80 group-hover:opacity-100 transition-opacity">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-text-muted font-medium">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="text-sm text-accent font-medium">{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-foreground mb-4 group-hover:text-accent transition-colors leading-tight">
                    <Link href={`/blog/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-text-light mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-gray-100 text-text-muted px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug.current}`} 
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-semibold transition-all duration-300 group-hover:gap-3"
                  >
                    Read Article
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-background rounded-3xl"></div>
            <div className="relative card-modern shadow-2xl p-16 bg-gradient-to-br from-card-bg/90 to-accent-50/90 backdrop-blur-sm">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                  Never Miss a Note
                </h3>
                <p className="text-xl text-text-light mb-12 leading-relaxed">
                  Get the latest insights on classical guitar, mandolin techniques, and musical reflections 
                  delivered straight to your inbox. Join a community of fellow music enthusiasts.
                </p>
                
                <div className="flex flex-col lg:flex-row gap-6 max-w-2xl mx-auto mb-8">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 border-2 border-border rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-card-bg"
                  />
                  <button className="btn-primary px-10 py-4 text-lg font-semibold whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                
                <div className="flex items-center justify-center gap-6 text-sm text-text-muted">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Weekly insights
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    No spam
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Unsubscribe anytime
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}