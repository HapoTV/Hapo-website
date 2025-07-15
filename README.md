# Hapo Group - Digital Signage Solutions

A modern, full-stack web application for Hapo Group, a leading provider of digital display solutions and innovative visual technologies based in Cape Town, South Africa.

## 🌟 Overview

Hapo Group specializes in cutting-edge digital signage solutions, LED displays, smart signage systems, and AI-powered technologies. This application serves as the company's digital presence, featuring a comprehensive website with blog functionality, newsletter management, and customer engagement tools.

## 🚀 Features

### Core Website
- **Modern Landing Page** - Hero section with company overview and featured solutions
- **Solutions Showcase** - Indoor/outdoor displays, smart signage, and AI solutions
- **Services Portfolio** - LED displays, content creation, hardware, CMS, and in-store music systems
- **About Page** - Company information, mission, team, and partner showcase
- **Contact System** - Multi-channel contact forms with EmailJS integration
- **ESG Pages** - Environmental, Social, and Governance initiatives

### Blog System
- **Content Management** - Rich text editor with image upload capabilities
- **Category Management** - Organized content categorization
- **Authentication** - Secure admin access for content creation
- **Real-time Publishing** - Instant content updates and management
- **Responsive Design** - Mobile-optimized blog interface

### Newsletter Management
- **Subscription System** - Email collection with verification
- **Admin Dashboard** - Subscriber management and analytics
- **Broadcast Functionality** - Mass email campaigns
- **Unsubscribe Handling** - Automated unsubscribe process
- **Email Verification** - Double opt-in system

### Interactive Features
- **AI Chatbot** - Intelligent customer support with lead qualification
- **Email Integration** - EmailJS for contact forms and notifications
- **Social Media Links** - Instagram, LinkedIn, and TikTok integration
- **Mobile Responsive** - Optimized for all device sizes

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **React Icons** - Comprehensive icon library
- **Heroicons** - Beautiful SVG icons

### Backend & Database
- **Supabase** - Backend-as-a-Service platform
- **PostgreSQL** - Robust relational database
- **Row Level Security (RLS)** - Database-level security
- **Edge Functions** - Serverless functions for newsletter management
- **Real-time Subscriptions** - Live data updates

### Content Management
- **TipTap Editor** - Rich text editing with extensions
- **Image Upload** - Supabase Storage integration
- **Content Categorization** - Organized blog structure
- **SEO Optimization** - Meta tags and structured content

### State Management
- **Zustand** - Lightweight state management
- **React Hot Toast** - User notifications
- **Custom Hooks** - Reusable logic components

### Email Services
- **EmailJS** - Client-side email sending
- **Newsletter System** - Automated email campaigns
- **Contact Forms** - Multi-template email handling

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── admin/           # Admin dashboard components
│   ├── blog/            # Blog-specific components
│   ├── Chatbot.tsx      # AI customer support
│   ├── Footer.tsx       # Site footer
│   ├── Navbar.tsx       # Navigation component
│   └── NewsletterSignup.tsx
├── pages/               # Main application pages
│   ├── esg/            # ESG-related pages
│   ├── About.tsx       # Company information
│   ├── Blog.tsx        # Blog listing and management
│   ├── Contact.tsx     # Contact forms
│   ├── Home.tsx        # Landing page
│   ├── Services.tsx    # Service offerings
│   ├── Solutions.tsx   # Product solutions
│   ├── Unsubscribe.tsx # Newsletter unsubscribe
│   └── VerifyEmail.tsx # Email verification
├── services/           # External service integrations
│   ├── emailService.ts # EmailJS integration
│   └── newsletterService.ts # Newsletter management
├── stores/             # State management
│   └── blogStore.ts    # Blog state management
├── lib/                # Utility libraries
│   └── supabase.ts     # Supabase client configuration
└── App.tsx             # Main application component

supabase/
├── functions/          # Edge functions
│   ├── newsletter-subscribe/
│   ├── newsletter-unsubscribe/
│   ├── newsletter-verify/
│   └── newsletter-broadcast/
└── migrations/         # Database schema migrations
```

## 🔧 Setup & Installation

### Prerequisites
- Node.js 18+ and npm
- Supabase account and project
- EmailJS account for email services

### Environment Variables
Create a `.env` file in the root directory:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID_WELCOME=your_welcome_template_id
VITE_EMAILJS_TEMPLATE_ID_NEWSLETTER=your_newsletter_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

# Newsletter Configuration
VITE_NEWSLETTER_FROM_EMAIL=newsletter@hapogroup.com
VITE_NEWSLETTER_FROM_NAME=Hapo Group Newsletter
```

### Installation Steps

1. **Clone and Install Dependencies**
   ```bash
   npm install
   ```

2. **Database Setup**
   - Set up Supabase project
   - Run the provided migrations to create tables
   - Configure Row Level Security policies

3. **Storage Configuration**
   - Create `blog-images` bucket in Supabase Storage
   - Set up appropriate storage policies

4. **EmailJS Setup**
   - Configure email templates for contact forms
   - Set up newsletter templates
   - Configure service and template IDs

5. **Development Server**
   ```bash
   npm run dev
   ```

## 📊 Database Schema

### Core Tables
- **posts** - Blog articles with rich content
- **categories** - Content categorization
- **newsletter_subscribers** - Email subscription management

### Key Features
- Row Level Security (RLS) enabled
- Automated timestamp updates
- Email validation constraints
- Foreign key relationships

## 🔐 Security Features

- **Authentication** - Supabase Auth for admin access
- **Row Level Security** - Database-level access control
- **Input Validation** - Email format and content validation
- **CORS Configuration** - Proper cross-origin resource sharing
- **Rate Limiting** - Protection against abuse

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options
- **Netlify** - Recommended for static hosting
- **Vercel** - Alternative static hosting
- **Supabase Edge Functions** - Serverless backend deployment

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint system: sm, md, lg, xl
- Touch-friendly interfaces
- Optimized images and assets

## 🎨 Design System

- **Colors**: Primary blue (#2563eb), Secondary (#1e40af)
- **Typography**: System fonts with proper hierarchy
- **Spacing**: 8px grid system
- **Components**: Consistent button styles, form elements
- **Animations**: Framer Motion for smooth transitions

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Follow TypeScript best practices
2. Use Tailwind CSS for styling
3. Maintain component modularity
4. Write descriptive commit messages
5. Test thoroughly before deployment

## 📞 Support

For technical support or questions:
- **Email**: admin@hapogroup.co.za
- **Phone**: +27 (0) 21 140-8375
- **Address**: 1 Bridgeway Road, Bridgeway Precinct, Century City, Cape Town, South Africa

## 📄 License

© 2025 Hapo Group. All rights reserved.

---

**Hapo Group** - Transforming visual experiences through innovative digital solutions.