'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Recordings', href: '/recordings' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background/80 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">KL</span>
              </div>
              <div className="text-2xl font-display font-bold text-primary group-hover:text-accent transition-colors">
                Ken Luk
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-text-light hover:text-accent px-4 py-2 text-base font-medium transition-all duration-300 rounded-lg hover:bg-accent-50 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2"></span>
                </Link>
              ))}
            </nav>
            <div className="w-px h-6 bg-border mx-4"></div>
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-text-light hover:text-accent hover:bg-accent-50 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
              aria-expanded="false"
            >
            <span className="sr-only">Open main menu</span>
            <div className="w-6 h-6 relative flex flex-col justify-center items-center">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute h-0.5 w-6 bg-current rounded-full"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute h-0.5 w-6 bg-current rounded-full"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute h-0.5 w-6 bg-current rounded-full"
              />
            </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border/50"
          >
            <div className="px-6 pt-4 pb-6 space-y-2">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-lg font-medium text-text-light hover:text-accent hover:bg-accent-50 rounded-xl transition-all duration-200 border border-transparent hover:border-accent-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}