'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Replace with your actual Formspree form ID
    // For now, we'll simulate the submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Modern Design */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-background to-accent-100 opacity-60"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-green-200 to-blue-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-accent-200 to-purple-300 rounded-full opacity-25 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-orange-200 to-pink-300 rounded-full opacity-15 blur-2xl"></div>
        
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
              <span className="text-accent font-bold text-lg uppercase tracking-widest bg-accent-50 px-6 py-3 rounded-full">Let's Connect</span>
            </motion.div>
            
            <h1 className="text-6xl lg:text-8xl font-display font-bold text-foreground mb-8 leading-none">
              Contact
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-text-light leading-relaxed max-w-4xl mx-auto"
            >
              I'd love to hear from you. Whether you're interested in collaborations, 
              performances, or just want to share your thoughts about music.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-20 px-4">
        
        {/* Contact Methods */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-lg text-text-muted">Multiple ways to connect and collaborate</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card-modern shadow-xl hover:shadow-2xl transition-all duration-500 p-8 text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Email</h3>
              <p className="text-accent font-semibold text-lg mb-3">contact@kenlukmusic.com</p>
              <p className="text-text-muted leading-relaxed">
                I typically respond within 24 hours. Perfect for detailed inquiries about performances, collaborations, or music lessons.
              </p>
            </motion.div>

            {/* Music Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-modern shadow-xl hover:shadow-2xl transition-all duration-500 p-8 text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.479.359-.78.719-.84 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.78.059 1.081zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Music Platforms</h3>
              <p className="text-text-light mb-4">Follow my latest releases</p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-accent hover:text-accent-light font-semibold transition-colors">Spotify</a>
                <a href="#" className="text-accent hover:text-accent-light font-semibold transition-colors">Apple Music</a>
              </div>
            </motion.div>

            {/* Performance Inquiries */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-modern shadow-xl hover:shadow-2xl transition-all duration-500 p-8 text-center group md:col-span-2 lg:col-span-1"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Performances</h3>
              <p className="text-text-light mb-4">Available for concerts and private events</p>
              <p className="text-text-muted leading-relaxed">
                Classical guitar and mandolin performances for weddings, corporate events, and concert halls.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-background rounded-3xl"></div>
              <div className="relative card-modern shadow-2xl p-12 bg-gradient-to-br from-card-bg/90 to-accent-50/90 backdrop-blur-sm">
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center py-12"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <h3 className="text-4xl font-display font-bold text-foreground mb-6">Message Sent!</h3>
                    <p className="text-xl text-text-light mb-8 leading-relaxed">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-primary px-8 py-4 text-lg"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-display font-bold text-foreground mb-4">Send a Message</h2>
                      <p className="text-lg text-text-light">
                        I'd love to hear about your project, event, or musical interests
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label htmlFor="name" className="block text-lg font-semibold text-foreground mb-3">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 border-2 border-border rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-card-bg"
                            placeholder="Your full name"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-lg font-semibold text-foreground mb-3">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 border-2 border-border rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-card-bg"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-lg font-semibold text-foreground mb-3">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 border-2 border-border rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-card-bg"
                        >
                          <option value="">Select a subject</option>
                          <option value="performance">Performance Inquiry</option>
                          <option value="collaboration">Collaboration</option>
                          <option value="lesson">Music Lessons</option>
                          <option value="recording">Recording Project</option>
                          <option value="general">General Question</option>
                          <option value="feedback">Feedback</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-lg font-semibold text-foreground mb-3">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-6 py-4 border-2 border-border rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 resize-none bg-card-bg"
                          placeholder="Tell me more about your inquiry, event details, timeline, or any specific requirements..."
                        />
                      </div>

                      <div className="text-center">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-primary px-12 py-4 text-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-3">
                              <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending Message...
                            </span>
                          ) : 'Send Message'}
                        </button>
                        
                        <p className="text-text-muted mt-6 leading-relaxed">
                          * Required fields. Your information will be kept private and secure.
                          <br />
                          I read every message personally and respond to all inquiries.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-text-muted">Quick answers to common inquiries</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "What types of events do you perform at?",
                answer: "I perform at weddings, corporate events, private parties, concerts, and cultural events. My repertoire includes classical guitar and mandolin pieces suitable for intimate gatherings or larger audiences."
              },
              {
                question: "Do you offer music lessons?",
                answer: "Yes, I offer private lessons for both classical guitar and mandolin. Lessons can be in-person or online, tailored to your skill level and musical interests."
              },
              {
                question: "How far in advance should I book?",
                answer: "For events, I recommend booking at least 2-3 months in advance, especially for popular dates like weekends and holidays. For lessons, I usually have availability within 1-2 weeks."
              },
              {
                question: "What equipment do you provide?",
                answer: "I bring my own professional instruments and basic amplification if needed. For larger venues, I can coordinate with sound engineers or recommend professional audio equipment."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-modern shadow-lg p-8"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">{faq.question}</h3>
                <p className="text-text-light leading-relaxed">{faq.answer}</p>
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
                  Let's Create Something Beautiful
                </h3>
                <p className="text-xl text-text-light mb-12 leading-relaxed">
                  Whether it's a performance, collaboration, or lesson, I'm excited to be part of your musical journey. 
                  Let's connect and explore how music can enhance your next project or event.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="#"
                    className="btn-primary inline-flex items-center justify-center gap-3 px-10 py-4 text-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Schedule a Call
                  </a>
                  <a
                    href="/recordings"
                    className="inline-flex items-center justify-center gap-3 border-2 border-accent text-accent px-10 py-4 rounded-xl text-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
                    Listen to My Music
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