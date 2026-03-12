# Bhavani Store - Next.js 14 Website

Premier agricultural commodities trading website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + CSS Variables (design tokens)
- **Forms**: React Hook Form + Zod validation
- **Theme**: next-themes (dark/light mode)
- **Icons**: Lucide React
- **Images**: Next.js Image component (optimized)
- **Fonts**: next/font (Inter + Playfair Display)

## 📁 Project Structure

```
bhavani-nextjs/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Homepage
│   ├── globals.css             # CSS variables / design tokens only
│   ├── about/page.tsx          # About page
│   ├── products/page.tsx       # Products page
│   ├── rates/page.tsx          # Daily rates page
│   ├── faq/page.tsx            # FAQ page (NEW)
│   ├── contact/page.tsx        # Contact page
│   ├── not-found.tsx           # 404 page
│   ├── sitemap.ts              # Dynamic XML sitemap
│   └── robots.ts               # Robots.txt
├── components/
│   ├── layout/                 # Navigation, Footer, WhatsApp button
│   ├── home/                   # Hero, Stats, WhyChoose, Testimonials
│   ├── products/               # ProductGrid
│   ├── contact/                # ContactForm (RHF + Zod)
│   ├── rates/                  # WhatsAppBroadcast
│   ├── seo/                    # StructuredData, Breadcrumbs
│   └── ui/                     # FAQAccordion, Toaster
├── lib/
│   ├── data.ts                 # All site data (products, rates, FAQs, etc.)
│   └── utils.ts                # Utility functions
├── types/
│   └── index.ts                # TypeScript type definitions
├── public/
│   ├── images/                 # Product and hero images
│   └── manifest.json           # PWA manifest
├── next.config.js              # Next.js config with optimizations
├── tailwind.config.ts          # Tailwind with custom agricultural palette
├── tsconfig.json               # TypeScript strict mode
├── middleware.ts               # Routing middleware
└── .env.local.example          # Environment variables template
```

## 🛠️ Setup & Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## ✨ Features

### SEO
- Dynamic metadata per page with Next.js Metadata API
- Open Graph tags for social sharing
- JSON-LD structured data (Organization + FAQ + Breadcrumb schemas)
- XML sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Canonical URLs
- Proper heading hierarchy (h1 → h2 → h3)

### Performance
- Next.js Image component with lazy loading
- Font optimization with `next/font`
- Code splitting per route
- Aggressive image caching headers
- Bundle optimization

### Accessibility
- Skip to main content link
- ARIA labels throughout
- Keyboard navigation support
- Semantic HTML (nav, main, article, section, figure, etc.)
- `aria-current="page"` on active nav items
- `aria-live` regions for dynamic content

### Dark Mode
- Full dark/light mode via `next-themes`
- Persisted user preference
- System preference detection

### PWA
- Web App Manifest (`/manifest.json`)
- App shortcuts for Rates and Products
- Theme color meta tags

### Forms
- React Hook Form for performance
- Zod schema validation
- Accessible error messages with `aria-describedby`
- Loading states

### FAQ (New)
- 18 comprehensive FAQs across 5 categories
- Category filter tabs
- Live search functionality
- Accessible accordion with smooth animation
- JSON-LD FAQ schema for rich search results

## 🎨 Design System

Custom agricultural color palette:
- `earth-brown` - Primary brand color (warm brown)
- `harvest-gold` - Accent color (golden yellow)
- `field-green` - Success/nature color (leaf green)
- `warm-beige` - Background sections
- `deep-earth` - Dark text on gold backgrounds

## 📱 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, features, stats, testimonials |
| `/about` | Company story, values, mission & vision |
| `/products` | Product grid with 8 commodity cards |
| `/rates` | Live market rates table |
| `/faq` | Searchable FAQ with category filters |
| `/contact` | Contact form + map + business info |

## 🔧 Customization

Update `lib/data.ts` to change:
- Business information (phone, email, address)
- Product listings
- Market rates
- Testimonials
- FAQ questions and answers
- Navigation items

## 📦 Adding Icons

Place PWA icons in `public/icons/`:
- `icon-72.png`
- `icon-96.png`
- `icon-128.png`
- `icon-192.png`
- `icon-512.png`

You can generate these from a single logo using [PWA Asset Generator](https://github.com/elegantapp/pwa-asset-generator).
