# The Blueprint

A modern, responsive landing page for **The Blueprint** - a dynamic one-day event designed for ambitious young professionals, entrepreneurs, and future real estate leaders.

## 🚀 Project Overview

The Blueprint is an event focused on empowering participants to:

- Build structure in their real estate ventures
- Form strategic partnerships
- Create enduring wealth in the real estate industry

This landing page showcases event details, benefits, hosts, and provides a registration interface.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) with [Radix UI](https://www.radix-ui.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Carousel/Slider:** [Swiper](https://swiperjs.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn installed on your machine

### Steps

1. Clone the repository:

```bash
git clone <repository-url>
cd the_blueprint
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
the_blueprint/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── header.tsx           # Navigation header
│   ├── hero-text-section.tsx
│   ├── hero-slider-section.tsx
│   ├── why-section.tsx
│   ├── benefits-section.tsx
│   ├── hosts-section.tsx
│   ├── registration-section.tsx
│   ├── location-section.tsx
│   ├── footer.tsx
│   └── ui/                  # shadcn/ui components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── public/                  # Static assets
└── styles/                  # Additional styles
```

## 🎨 Key Features

- **Responsive Design:** Fully responsive across all device sizes
- **Smooth Scrolling:** Seamless navigation between sections
- **Interactive Components:** Engaging UI with hover effects and animations
- **Modern Carousel:** Image slider showcasing event highlights
- **Registration Form:** Integrated registration interface
- **Performance Optimized:** Built with Next.js 16 for optimal performance
- **Type-Safe:** Full TypeScript support for better development experience

## 📄 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🎯 Main Sections

1. **Header** - Sticky navigation with smooth scroll functionality
2. **Hero Text Section** - Main headline and call-to-action
3. **Hero Slider Section** - Visual showcase with image carousel
4. **Why Section** - Explanation of the event's value proposition
5. **Benefits Section** - Key benefits for attendees
6. **Hosts Section** - Information about event hosts
7. **Registration Section** - Event registration form
8. **Location Section** - Event venue details
9. **Footer** - Contact information and social links

## 🎨 Color Scheme

- Primary Blue: `#002278`
- Primary Orange: `#EC712C`
- Background: Gray tones with white accents

## 🚀 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to a GitHub repository
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, you can deploy to:

- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Railway](https://railway.app/)
- Any platform that supports Node.js

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. If you have access and would like to contribute, please reach out to the project maintainers.

## 📧 Contact

For more information about The Blueprint event, please visit the website or contact the event organizers.
