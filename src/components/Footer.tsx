'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { getSiteSettings, SiteSettings } from '@/sanity/lib/sanity'

const currentYear = new Date().getFullYear()

export default function Footer() {
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null)
  
  useEffect(() => {
    async function fetchSettings() {
      const settings = await getSiteSettings()
      setSiteSettings(settings)
    }
    fetchSettings()
  }, [])

  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-background to-accent-100 opacity-60"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-200 to-accent-300 rounded-full opacity-15 blur-3xl transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-200 to-blue-300 rounded-full opacity-20 blur-3xl transform -translate-x-32 translate-y-32"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">KL</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-foreground">
                    {siteSettings?.siteName}
                  </h3>
                </div>
                <p className="text-lg text-text-light leading-relaxed max-w-md mb-8">
                  {siteSettings?.siteDescription}
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow the Journey</h4>
                <div className="flex space-x-4">
                  {siteSettings?.contact?.email && (
                    <a
                      href={`mailto:${siteSettings.contact.email}`}
                      className="group w-12 h-12 bg-card-bg border border-border rounded-xl flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label="Email"
                    >
                      <svg className="w-6 h-6 text-text-light group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                  )}
                  {siteSettings?.socialLinks?.spotify && (
                    <a
                      href={siteSettings.socialLinks.spotify}
                      className="group w-12 h-12 bg-card-bg border border-border rounded-xl flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label="Spotify"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-6 h-6 text-text-light group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.479.359-.78.719-.84 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.78.059 1.081zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                    </a>
                  )}
                  {siteSettings?.socialLinks?.youtube && (
                    <a
                      href={siteSettings.socialLinks.youtube}
                      className="group w-12 h-12 bg-card-bg border border-border rounded-xl flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label="YouTube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-6 h-6 text-text-light group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-12"
            >
              
              {/* Navigation */}
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-6">Navigation</h4>
                <ul className="space-y-4">
                  {[
                    { name: 'About', href: '/about' },
                    { name: 'Blog', href: '/blog' },
                    { name: 'Recordings', href: '/recordings' },
                    { name: 'Contact', href: '/contact' }
                  ].map((link, index) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <Link 
                        href={link.href} 
                        className="group flex items-center gap-3 text-text-light hover:text-accent transition-colors py-1"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Musical Categories */}
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-6">Musical Categories</h4>
                <ul className="space-y-4">
                  {[
                    { name: 'Classical Guitar', href: '/blog?category=classical-guitar' },
                    { name: 'Mandolin', href: '/blog?category=mandolin' },
                    { name: 'Reggae Fusion', href: '/blog?category=reggae' },
                    { name: 'Performance', href: '/blog?category=performance' }
                  ].map((category, index) => (
                    <motion.li 
                      key={category.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <Link 
                        href={category.href} 
                        className="group flex items-center gap-3 text-text-light hover:text-accent transition-colors py-1"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        {category.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-modern shadow-xl p-8 mb-16 bg-gradient-to-br from-card-bg to-accent-50"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-2xl font-display font-bold text-foreground mb-4">
                Stay Connected to the Music
              </h4>
              <p className="text-text-light mb-6 leading-relaxed">
                Get the latest recordings, blog posts, and performance updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border-2 border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-card-bg"
                />
                <button className="btn-primary px-8 py-3 text-base font-semibold whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-border/50 pt-8"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-6 text-text-muted">
                <p className="text-center sm:text-left">
                  © {currentYear} {siteSettings?.siteName}. All rights reserved.
                </p>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <p className="text-sm opacity-70">
                  Built with Next.js & Sanity CMS
                </p>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-text-muted">
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
                <div className="w-px h-4 bg-border"></div>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}