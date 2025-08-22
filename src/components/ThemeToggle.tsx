'use client'

import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch - don't use theme context until mounted
  if (!mounted) {
    return (
      <button className="relative p-2 rounded-lg bg-gray-100 transition-colors">
        <div className="w-5 h-5" />
      </button>
    )
  }

  return <ThemeToggleContent />
}

function ThemeToggleContent() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-xl bg-card-bg border-2 border-border hover:border-accent-light transition-all duration-300 hover:shadow-lg hover:scale-105 group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background gradient that changes with theme */}
      <motion.div
        className="absolute inset-1 rounded-lg"
        animate={{
          background: theme === 'light' 
            ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
            : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
        }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Sun icon */}
        <motion.svg
          className="absolute w-6 h-6 text-white"
          initial={false}
          animate={{
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : 180,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </motion.svg>

        {/* Moon icon */}
        <motion.svg
          className="absolute w-6 h-6 text-white"
          initial={false}
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : -180,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
        </motion.svg>
      </div>
      
      {/* Tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-foreground text-background px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
          {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-foreground rotate-45"></div>
      </div>
    </motion.button>
  )
}