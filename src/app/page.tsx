'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Modern Gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="relative bg-gradient-to-br from-background via-background to-accent-50 py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="text-accent font-medium text-sm uppercase tracking-widest mb-4 block">Musical Artistry</span>
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-primary mb-6 leading-tight">
                Ken Luk
              </h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <p className="text-xl lg:text-2xl text-primary font-medium mb-3">
                  Classical Guitarist & Mandolinist
                </p>
                <p className="text-lg text-text-light mb-8 max-w-3xl mx-auto leading-relaxed">
                  Exploring the depths of musical expression through traditional and contemporary compositions. 
                  Join me on a journey of classical guitar, mandolin artistry, and musical discovery.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button className="btn-primary px-8 py-4 text-lg">
                  Listen to Recordings
                </button>
                <button className="px-8 py-4 text-lg border-2 border-accent text-accent rounded-xl font-semibold hover:bg-accent hover:text-white transition-all duration-300">
                  Read Blog Posts
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-16 h-16 bg-accent-200 rounded-full opacity-20 blur-sm"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-16 w-24 h-24 bg-accent-300 rounded-full opacity-15 blur-md"
        ></motion.div>
      </section>

      {/* Recent Blog Posts - Main Content */}
      <section className="py-20 px-4 bg-gradient-to-br from-card-bg to-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
              Recent Reflections
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Insights from my musical journey, technique explorations, and artistic discoveries
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Blog Post Preview */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card-modern shadow-card group lg:col-span-2 xl:col-span-2"
            >
              <div className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-light"></div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm text-accent font-medium bg-accent-50 px-3 py-1 rounded-full">Featured</span>
                    <span className="text-sm text-text-muted">January 15, 2024</span>
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-primary mb-4 group-hover:text-accent transition-colors">
                    <Link href="/blog/musical-reflections">
                      Exploring Classical Guitar Technique and Expression
                    </Link>
                  </h3>
                  <p className="text-text-light mb-6 leading-relaxed text-lg">
                    In this post, I delve into the intricate relationship between technical mastery and emotional expression 
                    in classical guitar performance. Drawing from recent practice sessions and performance experiences...
                  </p>
                  <div className="flex items-center justify-between">
                    <Link href="/blog/musical-reflections" className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-semibold transition-colors">
                      Continue reading 
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <div className="text-sm text-text-muted flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Classical Guitar, Performance
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-modern shadow-card group"
            >
              <div className="p-6">
                <div className="text-sm text-text-muted mb-3">January 8, 2024</div>
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  <Link href="/blog/mandolin-journey">
                    My Journey with the Mandolin
                  </Link>
                </h3>
                <p className="text-text-light mb-4 leading-relaxed">
                  The mandolin entered my musical life almost by accident, but it has become an integral part of my 
                  artistic expression...
                </p>
                <Link href="/blog/mandolin-journey" className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-medium transition-colors">
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-modern shadow-card group xl:col-start-3 xl:row-start-1 xl:row-span-2"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="text-sm text-text-muted mb-3">December 28, 2023</div>
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  <Link href="/blog/new-recording">
                    Bach&apos;s Prelude in D Minor
                  </Link>
                </h3>
                <p className="text-text-light mb-6 leading-relaxed flex-grow">
                  My latest recording reflects years of study and interpretation of Bach&apos;s genius. This piece has been 
                  a cornerstone of my repertoire, and this performance captures my current understanding...
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-accent">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
                    New Recording
                  </div>
                  <Link href="/blog/new-recording" className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-medium transition-colors">
                    Listen & Read
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/blog"
              className="btn-primary inline-block text-lg px-8 py-4"
            >
              Explore All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter and Links Section */}
      <section className="bg-gradient-to-br from-accent-50 to-background py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-display font-bold text-primary mb-4">Stay Connected</h3>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Join the journey of musical discovery. Get updates on new recordings, blog posts, and performance announcements.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 card-modern shadow-card p-8"
            >
              <h4 className="text-xl font-semibold text-primary mb-4">Newsletter Subscription</h4>
              <p className="text-text-light mb-6">
                Be the first to know about new recordings, blog posts, and upcoming performances.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <button className="btn-primary px-6 py-3 text-base whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-modern shadow-card p-8"
            >
              <h4 className="text-xl font-semibold text-primary mb-6">Quick Links</h4>
              <div className="space-y-4">
                <Link href="/blog?category=classical-guitar" className="flex items-center gap-3 text-text-light hover:text-accent transition-colors">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Classical Guitar
                </Link>
                <Link href="/blog?category=mandolin" className="flex items-center gap-3 text-text-light hover:text-accent transition-colors">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Mandolin
                </Link>
                <Link href="/recordings" className="flex items-center gap-3 text-text-light hover:text-accent transition-colors">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Latest Recordings
                </Link>
                <Link href="/about" className="flex items-center gap-3 text-text-light hover:text-accent transition-colors">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  About Ken
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
