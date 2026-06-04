# BLACKLISTED.MN - Build & Deploy Guide

## Quick Preview (No Build Required)

Open \index.html\ in your browser to see the standalone preview.

## Full Next.js Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### 1. Install Dependencies

\\\ash
npm install
\\\

### 2. Add Environment Variables

\\\ash
cp .env.example .env.local
# Edit .env.local with your actual values
\\\

### 3. Add Images

Copy your images to \public/\ folder:
- \lady-justice.jpg\ - Main Lady Justice painting
- \golden-scales.jpg\ - Golden scales close-up

### 4. Run Development Server

\\\ash
npm run dev
\\\

Open http://localhost:3000

### 5. Build for Production

\\\ash
npm run build
\\\

## Features

- Dark theme with neon accents (cyan, pink, green)
- Lady Justice scroll zoom animation
- Search functionality with landlord/tenant toggle
- Animated statistics counters
- Testimonial cards with neon glow
- Contact form with glowing inputs
- Mongolian & English language support

## Project Structure

\\\
src/
├── app/[locale]/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   ├── search/
│   ├── testimonials/
│   └── contact/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── SearchBar.tsx
│   ├── StatsSection.tsx
│   ├── TestimonialsSection.tsx
│   └── ContactSection.tsx
└── messages/
    ├── mn.json
    └── en.json
\\\

## Deployment

### Vercel (Recommended)
\\\ash
npm i -g vercel
vercel
\\\

### Netlify
\\\ash
npm i -g netlify-cli
netlify deploy
\\\

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS
- GSAP (scroll animations)
- Framer Motion
- Apollo Client (erxes CMS)
- next-intl (i18n)

## License

MIT