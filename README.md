# Ken Luk Music Website

A modern, responsive website for classical guitarist and mandolinist Ken Luk, built with Next.js 14, TypeScript, Tailwind CSS, and Sanity CMS.

## 🎵 Features

- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Content Management**: Powered by Sanity CMS for easy content updates
- **Audio Player**: Custom audio player for music recordings
- **Blog**: Musical insights and reflections
- **Contact Form**: Integrated contact form with Formspree
- **SEO Optimized**: Built-in SEO best practices
- **Fast Performance**: Optimized for speed and accessibility

## 🛠 Tech Stack

- **Frontend**: Next.js 14, TypeScript, React 19
- **Styling**: Tailwind CSS, Framer Motion
- **CMS**: Sanity.io
- **Audio**: Howler.js
- **Forms**: Formspree (free tier)
- **Hosting**: Vercel (free)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Sanity account (free)
- A Formspree account (optional, for contact forms)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ken-luk-music
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Sanity CMS**
   
   a. Create a new Sanity project at [sanity.io](https://sanity.io)
   
   b. Update `.env.local` with your Sanity credentials:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-08-17
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Set up Sanity Studio**
   
   Visit `http://localhost:3004/studio` to access the CMS admin panel

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── recordings/        # Recordings page
│   ├── studio/            # Sanity Studio
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
sanity/                    # Sanity CMS configuration
├── schemas/               # Content schemas
│   ├── post.ts           # Blog post schema
│   └── recording.ts      # Recording schema
├── lib/                  # Sanity client
└── env.ts               # Environment config
```

## 🎨 Customization

### Colors and Styling

The design system is built with Tailwind CSS. Key colors are defined in:
- `tailwind.config.ts` - Main configuration
- `src/app/globals.css` - CSS custom properties

### Content Management

Content is managed through Sanity Studio at `/studio`. The schemas define:
- **Blog Posts**: Title, content, categories, featured images
- **Recordings**: Audio files, descriptions, instruments, genres

### Contact Form

To set up the contact form with Formspree:

1. Create a form at [formspree.io](https://formspree.io)
2. Update the form action in `src/app/contact/page.tsx`
3. Replace the mock submission with the actual Formspree endpoint

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Digital Ocean App Platform

## 📝 Content Management

### Adding Blog Posts

1. Go to `/studio` in your browser
2. Navigate to "Blog Post" 
3. Click "Create new"
4. Fill in the title, content, category, and featured image
5. Publish when ready

### Adding Recordings

1. Go to `/studio`
2. Navigate to "Recording"
3. Upload audio files and add metadata
4. Set featured recordings to appear prominently

## 🔧 Configuration

### Environment Variables

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-08-17

# Optional: For Sanity Studio authentication
SANITY_API_TOKEN=your_api_token
```

## 🎵 About Ken Luk

Ken Luk is a classical guitarist and mandolinist exploring the intersection of traditional and contemporary musical expressions. Through his performances and recordings, he shares the emotional depth and technical beauty of stringed instruments across various musical genres.

---

Built with ❤️ using modern web technologies. Completely free to deploy and maintain.
# ken-luk-music
