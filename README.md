# 📚 Next.js Course Application - 10 Minute School

A modern, responsive course platform built with Next.js 14, TypeScript, and Tailwind CSS. This application provides a comprehensive course viewing experience with multilingual support, advanced SEO optimization, and interactive components.

## 🎥 Project Overview

> **✨ Here is a video of me explaining the project architecture, code style and application overview.**

[![Project Overview Video](https://img.youtube.com/vi/fo0Ehzt3DzA/maxresdefault.jpg)](https://youtu.be/fo0Ehzt3DzA)

Click the thumbnail above to watch the detailed project walkthrough!

## 🚀 Features

### 🌟 Core Functionality
- **Course Display**: Comprehensive course information with hero sections, instructor details, and course layouts
- **Multi-language Support**: Full internationalization with Bengali and English support
- **Responsive Design**: Mobile-first approach ensuring perfect display across all devices
- **SEO Optimized**: Advanced metadata, Open Graph, Twitter Cards, and JSON-LD structured data

### 🎨 UI/UX Components
- **Interactive Media Player**: YouTube video embedding with custom controls and navigation
- **Accordion Sections**: Collapsible course details with smooth animations
- **Carousel Navigation**: Touch-friendly course section navigation using Shadcn UI
- **Sticky Elements**: Smart positioning with intersection observers
- **Language Switcher**: Seamless language switching with locale-aware routing

### 🔧 Technical Features
- **TypeScript**: Full type safety throughout the application
- **Static Generation**: Pre-rendered pages for optimal performance
- **Dynamic Imports**: Code splitting for better loading times
- **Error Boundaries**: Graceful error handling with beautiful error pages
- **Custom 404**: Engaging not-found page with helpful navigation

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type safety and developer experience |
| **Tailwind CSS** | Utility-first styling |
| **Shadcn/ui** | High-quality UI components |
| **Lucide React** | Beautiful icons |
| **Embla Carousel** | Touch-friendly carousels |

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── components/
│   │   │   ├── course/
│   │   │   │   ├── CourseHero/
│   │   │   │   ├── CourseInstructor/
│   │   │   │   ├── CourseDetails/
│   │   │   │   └── ...
│   │   │   └── shared/
│   │   ├── course/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── layout.tsx
│   ├── ApiService/
│   ├── types/
│   ├── constants/
│   ├── utils/
│   ├── not-found.tsx
│   └── error.tsx
├── components/ui/
├── i18n/
└── public/
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nextjs-course-app.git
   cd nextjs-course-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
# Build the application
npm run build

# Start production server
npm run start

# Export static files (if needed)
npm run export
```

## 🌍 Internationalization

The application supports multiple languages:

- **English (`en`)**: Default language
- **Bengali (`bn`)**: Localized for Bangladesh market

### Language Structure
```
/en/course/ielts-course    # English version
/bn/course/ielts-course    # Bengali version
```

## 📱 Component Highlights

### MediaPlayer Component
- YouTube video embedding with custom controls
- Thumbnail previews with play buttons
- Navigation between multiple media items
- Responsive video player with aspect ratio preservation

### CourseHero Section
- Dynamic course information display
- Responsive pricing and enrollment components
- Interactive media galleries
- Call-to-action buttons

### SectionsNav Carousel
- Touch-friendly horizontal scrolling
- Active section highlighting
- Smooth scrolling animations
- Responsive design with overflow handling

## 🎯 SEO Implementation

### Metadata Generation
- Dynamic page titles and descriptions
- Open Graph tags for social media sharing
- Twitter Card optimization
- Structured data (JSON-LD) for search engines

### Performance Optimizations
- Static site generation (SSG)
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Efficient bundle sizes

## 🎨 Styling Approach

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Custom Components**: Reusable UI components with Shadcn/ui
- **Animations**: Smooth transitions and micro-interactions
- **Accessibility**: ARIA labels and keyboard navigation support

## 🐛 Error Handling

- **Error Boundaries**: React error boundaries for graceful error handling
- **Custom Error Pages**: Beautiful 404 and error pages
- **Development Errors**: Detailed error information in development mode
- **User-Friendly Messages**: Clear error communication for users

## 📊 Performance Features

- **Static Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: Automatic image optimization and lazy loading
- **Bundle Optimization**: Code splitting and tree shaking
- **Caching**: Efficient caching strategies for static assets

## 🔧 Configuration Files

- `next.config.js`: Next.js configuration
- `tailwind.config.js`: Tailwind CSS customization
- `tsconfig.json`: TypeScript configuration
- `i18n-config.ts`: Internationalization setup

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👥 Team

Built with ❤️ for 10 Minute School

---

**⭐ If you found this project helpful, please give it a star!**
