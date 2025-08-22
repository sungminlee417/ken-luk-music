'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

// Mock data - will be replaced with Sanity CMS data
const mockRecordings = [
  {
    id: 1,
    title: "Spanish Romance",
    description: "A classical guitar interpretation of this beloved Spanish piece, focusing on emotional expression and melodic phrasing. This recording captures the intimate nature of solo guitar performance.",
    instrument: "Classical Guitar",
    genre: "Classical",
    duration: 245,
    featured: true,
    externalUrl: "#",
    year: "2024",
    venue: "Studio Recording",
    techniques: ["Fingerpicking", "Tremolo", "Harmonics"]
  },
  {
    id: 2,
    title: "Mandolin Variations",
    description: "Original compositions exploring the rhythmic possibilities of the mandolin in contemporary settings. A fusion of traditional folk melodies with modern harmonic progressions.",
    instrument: "Mandolin",
    genre: "Original",
    duration: 180,
    featured: false,
    externalUrl: "#",
    year: "2024",
    venue: "Live Performance",
    techniques: ["Tremolo", "Cross-picking", "Chord melody"]
  },
  {
    id: 3,
    title: "Reggae Fusion",
    description: "An experimental piece blending traditional classical guitar techniques with reggae-inspired rhythms. This innovative approach creates a unique musical dialogue between genres.",
    instrument: "Both",
    genre: "Reggae",
    duration: 320,
    featured: true,
    externalUrl: "#",
    year: "2023",
    venue: "Studio Recording",
    techniques: ["Syncopation", "Palm muting", "Hybrid picking"]
  },
  {
    id: 4,
    title: "Folk Memories",
    description: "A collection of folk-inspired melodies played on mandolin, capturing the essence of traditional storytelling through instrumental narrative.",
    instrument: "Mandolin",
    genre: "Folk",
    duration: 275,
    featured: false,
    externalUrl: "#",
    year: "2023",
    venue: "Acoustic Session",
    techniques: ["Bluegrass picking", "Double stops", "Slides"]
  },
  {
    id: 5,
    title: "Bach Reimagined",
    description: "A modern interpretation of Bach's classical works adapted for mandolin, showcasing the instrument's versatility in classical repertoire.",
    instrument: "Mandolin",
    genre: "Classical",
    duration: 420,
    featured: false,
    externalUrl: "#",
    year: "2023",
    venue: "Concert Hall",
    techniques: ["Counterpoint", "Arpeggios", "Scalar passages"]
  },
  {
    id: 6,
    title: "Latin Rhythms",
    description: "Exploring the rich rhythmic traditions of Latin America through classical guitar, featuring pieces from various cultural backgrounds.",
    instrument: "Classical Guitar",
    genre: "Latin",
    duration: 380,
    featured: false,
    externalUrl: "#",
    year: "2022",
    venue: "Studio Recording",
    techniques: ["Rasgueado", "Picado", "Golpe"]
  }
]

const AudioPlayer = ({ title, duration, featured = false }: { title: string; duration: number; featured?: boolean }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime] = useState(0)
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className={`${featured ? 'bg-gradient-to-br from-accent-50 to-card-bg' : 'bg-gradient-to-br from-gray-50 to-card-bg'} rounded-2xl p-8 border border-border/50 shadow-lg`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`w-16 h-16 ${featured ? 'bg-gradient-to-br from-accent to-accent-light' : 'bg-gradient-to-br from-gray-600 to-gray-700'} text-white rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 group`}
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6 ml-1 group-hover:ml-2 transition-all" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
          <div>
            <div className="font-bold text-xl text-foreground">{title}</div>
            <div className="text-text-muted font-medium">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-3 rounded-full hover:bg-accent-50 transition-colors group">
            <svg className="w-6 h-6 text-text-light group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          </button>
          <button className="p-3 rounded-full hover:bg-accent-50 transition-colors group">
            <svg className="w-6 h-6 text-text-light group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="relative">
        <div className="w-full bg-gray-200 rounded-full h-4 cursor-pointer group">
          <div 
            className={`${featured ? 'bg-gradient-to-r from-accent to-accent-light' : 'bg-gradient-to-r from-gray-600 to-gray-700'} h-4 rounded-full transition-all duration-300 shadow-md group-hover:h-5 group-hover:shadow-lg`}
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

const genres = ["All", "Classical", "Folk", "Reggae", "Original", "Latin"]

export default function Recordings() {
  const [selectedGenre, setSelectedGenre] = useState("All")
  
  const filteredRecordings = selectedGenre === "All" 
    ? mockRecordings 
    : mockRecordings.filter(recording => recording.genre === selectedGenre)

  const featuredRecordings = mockRecordings.filter(r => r.featured)
  const regularRecordings = mockRecordings.filter(r => !r.featured)

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
              <span className="text-accent font-bold text-lg uppercase tracking-widest bg-accent-50 px-6 py-3 rounded-full">Musical Portfolio</span>
            </motion.div>
            
            <h1 className="text-6xl lg:text-8xl font-display font-bold text-foreground mb-8 leading-none">
              Recordings
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-text-light leading-relaxed max-w-4xl mx-auto"
            >
              A curated collection of musical recordings spanning classical guitar and mandolin, 
              showcasing diverse genres and innovative approaches to traditional instruments.
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
        {featuredRecordings.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-foreground mb-4">Featured Recordings</h2>
              <p className="text-lg text-text-muted">Highlighted performances showcasing artistic excellence</p>
            </div>
            
            <div className="space-y-12">
              {featuredRecordings.map((recording, index) => (
                <div key={recording.id} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-background rounded-3xl"></div>
                  <div className="relative card-modern shadow-2xl overflow-hidden bg-gradient-to-br from-card-bg/90 to-accent-50/90 backdrop-blur-sm">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-accent-light"></div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12">
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="bg-gradient-to-r from-accent to-accent-light text-white text-sm px-4 py-2 rounded-full font-bold shadow-lg">
                            ⭐ Featured
                          </span>
                          <span className="bg-accent-100 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                            {recording.instrument}
                          </span>
                          <span className="text-text-muted font-medium">{recording.year}</span>
                        </div>
                        
                        <h3 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                          {recording.title}
                        </h3>
                        
                        <p className="text-xl text-text-light leading-relaxed mb-8">
                          {recording.description}
                        </p>
                        
                        <div className="space-y-4 mb-8">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-text-muted">Venue:</span>
                            <span className="text-text-light">{recording.venue}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-text-muted">Techniques:</span>
                            <div className="flex flex-wrap gap-2">
                              {recording.techniques.map((technique) => (
                                <span key={technique} className="bg-gray-100 text-text-muted px-2 py-1 rounded text-xs font-medium">
                                  {technique}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          <a
                            href={recording.externalUrl}
                            className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 text-lg"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.479.359-.78.719-.84 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.78.059 1.081zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                            </svg>
                            Listen on Spotify
                          </a>
                          <button className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                            </svg>
                            Share
                          </button>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="relative">
                          <div className="w-full h-80 bg-gradient-to-br from-purple-100 to-blue-200 rounded-2xl shadow-xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-light/30"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-32 h-32 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center shadow-2xl">
                                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <AudioPlayer title={recording.title} duration={recording.duration} featured={true} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Regular Recordings Grid */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">All Recordings</h2>
            <p className="text-lg text-text-muted">Explore the complete musical collection</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {regularRecordings.map((recording, index) => (
              <motion.div
                key={recording.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-modern shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
              >
                <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-light/20 to-accent/30"></div>
                  <div className="absolute top-6 left-6 flex gap-3">
                    <span className="bg-white/90 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                      {recording.genre}
                    </span>
                    <span className="bg-white/90 text-text-muted px-3 py-1 rounded-full text-sm font-medium">
                      {recording.year}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center shadow-xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-accent-100 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                      {recording.instrument}
                    </span>
                    <span className="text-sm text-text-muted font-medium">{recording.venue}</span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-accent transition-colors leading-tight">
                    {recording.title}
                  </h3>
                  
                  <p className="text-text-light mb-6 leading-relaxed">
                    {recording.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {recording.techniques.map((technique) => (
                        <span key={technique} className="bg-gray-100 text-text-muted px-2 py-1 rounded text-xs font-medium">
                          {technique}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <AudioPlayer title={recording.title} duration={recording.duration} />
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <a
                      href={recording.externalUrl}
                      className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold flex-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.479.359-.78.719-.84 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.78.059 1.081zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                      Listen
                    </a>
                    <button className="inline-flex items-center justify-center gap-2 border-2 border-border text-text-light px-6 py-3 rounded-xl text-base font-semibold hover:bg-accent-50 hover:border-accent-light hover:text-accent transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
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
                  Discover More Music
                </h3>
                <p className="text-xl text-text-light mb-12 leading-relaxed">
                  Follow me on streaming platforms to stay updated with new releases and performances. 
                  Let's connect through the universal language of music and explore the boundaries of classical guitar and mandolin together.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="#"
                    className="btn-primary inline-flex items-center justify-center gap-3 px-10 py-4 text-lg"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.479.359-.78.719-.84 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.78.059 1.081zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Follow on Spotify
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 border-2 border-accent text-accent px-10 py-4 rounded-xl text-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Book a Performance
                  </a>
                  <a
                    href="/blog"
                    className="inline-flex items-center justify-center gap-3 border-2 border-gray-300 text-text-light px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Read My Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}