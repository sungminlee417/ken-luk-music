'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { getPageContent, PageContent } from '@/cms'
import { PortableText, getSection } from '@/cms/utils/portableText'

export default function About() {
  const [pageContent, setPageContent] = useState<PageContent | null>(null)
  
  useEffect(() => {
    async function fetchContent() {
      try {
        const content = await getPageContent('about')
        setPageContent(content)
      } catch {
        console.log('No Sanity content found')
        setPageContent(null)
      }
    }
    fetchContent()
  }, [])
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Dramatic Design */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-background to-accent-100 opacity-60"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-300 rounded-full opacity-15 blur-3xl"></div>
        
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-24 px-4">
        
        {/* Musical Journey Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="card-modern shadow-xl p-12 bg-gradient-to-br from-card-bg to-accent-50">
                <h2 className="text-5xl font-display font-bold text-foreground mb-8">
                  {getSection(pageContent?.sections || [], 'musical-journey')?.heading || 'My Musical Journey'}
                </h2>
                <div className="space-y-8">
                  <PortableText content={getSection(pageContent?.sections || [], 'musical-journey')?.content} />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-accent-100 to-accent-200 rounded-3xl shadow-2xl"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-accent-200 to-accent-300 rounded-3xl opacity-60"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-accent-300 to-accent-400 rounded-3xl opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center shadow-xl">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Instruments Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              {getSection(pageContent?.sections || [], 'instruments-mastery')?.heading || 'Instruments & Mastery'}
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
              {getSection(pageContent?.sections || [], 'instruments-mastery')?.quote || 'Two instruments, countless possibilities for musical expression and artistic exploration'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Classical Guitar */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="card-modern shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-amber-100 to-orange-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-light/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-display font-bold text-foreground mb-6 group-hover:text-accent transition-colors">
                    {getSection(pageContent?.sections || [], 'classical-guitar')?.heading || 'Classical Guitar'}
                  </h3>
                  <div className="mb-6">
                    <PortableText content={getSection(pageContent?.sections || [], 'classical-guitar')?.content} />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-text-muted">Spanish Classical Tradition</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-text-muted">Latin American Compositions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-text-muted">Contemporary Interpretations</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mandolin */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="card-modern shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-light/20 to-accent/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-display font-bold text-foreground mb-6 group-hover:text-accent transition-colors">
                    {getSection(pageContent?.sections || [], 'mandolin')?.heading || 'Mandolin'}
                  </h3>
                  <div className="mb-6">
                    <PortableText content={getSection(pageContent?.sections || [], 'mandolin')?.content} />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-text-muted">Folk Traditions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-text-muted">Reggae Fusion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-text-muted">Cross-Cultural Exploration</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Philosophy Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-background rounded-3xl"></div>
            <div className="relative card-modern shadow-2xl p-16 bg-gradient-to-br from-card-bg/90 to-accent-50/90 backdrop-blur-sm">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-5xl font-display font-bold text-foreground mb-12">
                  {getSection(pageContent?.sections || [], 'philosophy')?.heading || 'Musical Philosophy'}
                </h2>
                
                <div className="relative mb-12">
                  <div className="absolute -top-8 -left-8 text-8xl text-accent-200 font-serif leading-none">&ldquo;</div>
                  <blockquote className="text-3xl lg:text-4xl text-foreground leading-relaxed font-light relative z-10 px-12">
                    {getSection(pageContent?.sections || [], 'philosophy')?.quote || 'Music is the universal language that speaks to the soul. Through my instruments, I strive to create authentic connections—honoring the traditions that came before while finding new ways to express the emotions and stories that define our human experience.'}
                  </blockquote>
                  <div className="absolute -bottom-8 -right-8 text-8xl text-accent-200 font-serif leading-none">&rdquo;</div>
                </div>
                
                <div className="flex items-center justify-center gap-4 pt-8 border-t border-border/30">
                  <div className="w-12 h-0.5 bg-accent"></div>
                  <p className="text-xl text-text-muted font-medium tracking-wider">Ken Luk</p>
                  <div className="w-12 h-0.5 bg-accent"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="card-modern shadow-xl p-12 bg-gradient-to-br from-accent-50 to-card-bg">
            <h3 className="text-4xl font-display font-bold text-foreground mb-6">
              {getSection(pageContent?.sections || [], 'experience-music')?.heading || 'Experience the Music'}
            </h3>
            <div className="text-xl mb-10 max-w-2xl mx-auto">
              <PortableText content={getSection(pageContent?.sections || [], 'experience-music')?.content} />
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/recordings" className="btn-primary px-8 py-4 text-lg">
                Listen to Recordings
              </a>
              <a href="/blog" className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300">
                Read My Blog
              </a>
              <a href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-text-light px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                Get in Touch
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}