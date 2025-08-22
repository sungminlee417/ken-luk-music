'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { getAllRecordings, getFeaturedRecordings, getPageContent, Recording, PageContent } from '@/sanity/lib/sanity'

export default function Recordings() {
  const [recordings, setRecordings] = useState<Recording[]>([])
  const [featuredRecordings, setFeaturedRecordings] = useState<Recording[]>([])
  const [pageContent, setPageContent] = useState<PageContent | null>(null)
  const [selectedGenre, setSelectedGenre] = useState('All')
  
  useEffect(() => {
    async function fetchData() {
      const [allRecordings, featured, content] = await Promise.all([
        getAllRecordings(),
        getFeaturedRecordings(),
        getPageContent('recordings')
      ])
      setRecordings(allRecordings)
      setFeaturedRecordings(featured)
      setPageContent(content)
    }
    fetchData()
  }, [])

  const genres = ['All', 'Classical', 'Folk', 'Reggae', 'Original', 'Jazz']

  // Filter recordings by genre (for future use)
  // const filteredRecordings = selectedGenre === 'All' 
  //   ? recordings 
  //   : recordings.filter(recording => recording.genre === selectedGenre)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Dynamic Design */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-background to-accent-100 opacity-60"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-200 to-blue-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-accent-200 to-accent-300 rounded-full opacity-25 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-orange-200 to-red-300 rounded-full opacity-15 blur-2xl"></div>
        
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
        
        {/* Genre Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Explore by Genre</h2>
            <p className="text-lg text-text-muted">Discover recordings across different musical styles</p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {genres.map((genre, index) => (
              <motion.button
                key={genre}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                onClick={() => setSelectedGenre(genre)}
                className={`px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-2xl ${
                  genre === selectedGenre
                    ? "bg-gradient-to-r from-accent to-accent-light text-white shadow-xl transform scale-105"
                    : "bg-card-bg text-text-light border-2 border-border hover:bg-accent-50 hover:text-accent hover:border-accent-light hover:shadow-lg hover:scale-105"
                }`}
              >
                {genre}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Recordings */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">Featured Recordings</h2>
            <p className="text-lg text-text-muted">Highlighted musical pieces and performances</p>
          </div>
          
          <div className="space-y-12">
            {featuredRecordings.map((recording) => (
              <div key={recording._id} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-background rounded-3xl"></div>
                <div className="relative card-modern shadow-2xl overflow-hidden bg-gradient-to-br from-card-bg/90 to-accent-50/90 backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-accent-light"></div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12">
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="bg-gradient-to-r from-accent to-accent-light text-white text-sm px-4 py-2 rounded-full font-bold shadow-lg">
                          ✨ Featured
                        </span>
                        <span className="text-accent font-medium">{recording.instrument}</span>
                      </div>
                      
                      <h3 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                        {recording.title}
                      </h3>
                      
                      <p className="text-xl text-text-light leading-relaxed mb-8">
                        {recording.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="bg-accent-100 text-accent px-3 py-1 rounded-full text-sm font-medium">
                            {recording.genre}
                          </span>
                          {recording.duration && (
                            <span className="text-text-muted">
                              {Math.floor(recording.duration / 60)}:{(recording.duration % 60).toString().padStart(2, '0')}
                            </span>
                          )}
                        </div>
                        
                        {recording.externalUrl && (
                          <a 
                            href={recording.externalUrl}
                            className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Listen Now
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-10V4a1 1 0 00-1-1H5a1 1 0 00-1 1v1m1 4v10a1 1 0 001 1h10a1 1 0 001-1V10M9 7h6" />
                            </svg>
                          </a>
                        )}
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
          </div>
        </motion.section>

        {/* All Recordings Grid */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Discover More Music
            </h3>
            <p className="text-xl text-text-light mb-12 leading-relaxed">
              Follow me on streaming platforms to stay updated with new releases and performances. 
              Let&apos;s connect through the universal language of music and explore the boundaries of classical guitar and mandolin together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#"
                className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.479.359-.78.719-.84 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.78.059 1.081zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Listen on Spotify
              </a>
              
              <a
                href="#"
                className="px-8 py-4 text-lg border-2 border-red-500 text-red-500 rounded-xl font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 inline-flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch on YouTube
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}