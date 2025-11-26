# Asistente-Urgencias Personal

## Overview

A professional service website for autonomous workers that provides an automated voice assistant to handle urgent calls when they're unavailable. The system captures client information during calls and sends summaries via WhatsApp, ensuring no business opportunities are lost. Built with React, TypeScript, Express, and Drizzle ORM, featuring a modern SaaS-inspired design with mobile-first approach.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Client-side routing using `wouter` (lightweight React Router alternative)
- Mobile-first responsive design approach

**UI Component System**
- Shadcn/ui component library with Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom color palette featuring primary dark blue (#1e3a8a) and WhatsApp green (#25D366)
- Inter font family from Google Fonts for professional typography
- Consistent spacing system using Tailwind's spacing scale (4, 8, 12, 16, 20, 24, 32)

**State Management**
- TanStack Query (React Query) for server state management and API data fetching
- React Hook Form with Zod validation for form state and validation
- Local component state using React hooks

**Design System**
- Reference-based design inspired by Stripe, Intercom, and WhatsApp Business
- Component variants using class-variance-authority (CVA)
- Custom shadcn theme with light mode configuration
- Hover and active elevation effects for interactive elements

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- Dual-mode setup: development (index-dev.ts with Vite middleware) and production (index-prod.ts with static serving)
- Custom logging middleware for request/response tracking
- JSON body parsing with raw body access for webhook verification

**API Design**
- RESTful API endpoints under `/api` prefix
- Contact form endpoint: `POST /api/contact` for message submission
- Admin endpoint: `GET /api/contact` for retrieving messages
- Centralized error handling with validation error details

**Development vs Production**
- Development: Vite middleware integration for HMR, with Replit-specific plugins (error overlay, cartographer, dev banner)
- Production: Pre-built static assets served from `dist/public`
- Environment-aware configuration using NODE_ENV

### Data Storage Solutions

**Database**
- PostgreSQL as the primary database (configured via Drizzle)
- Neon serverless driver for database connectivity
- Schema-first design with type-safe queries

**ORM & Schema Management**
- Drizzle ORM for type-safe database operations
- Schema definition in `shared/schema.ts` for code sharing between client and server
- Drizzle-Zod integration for runtime validation matching database schema
- Migration management via Drizzle Kit (output to `./migrations`)

**Data Models**
- Users table: id (UUID), username (unique), password
- Contact Messages table: id (UUID), name, phone, email, message, createdAt
- In-memory fallback storage (MemStorage class) for development/testing

**Validation Strategy**
- Zod schemas derived from Drizzle table definitions using `createInsertSchema`
- Client-side validation via React Hook Form + Zod resolver
- Server-side validation before database insertion
- Centralized validation error responses

### Authentication and Authorization

**Current State**
- User schema exists but authentication not currently implemented
- Password field present in users table (suggests future authentication)
- Session management dependencies installed (connect-pg-simple) but not active

**Planned Architecture** (based on dependencies)
- Session-based authentication likely intended
- PostgreSQL session store via connect-pg-simple
- User credentials stored in users table

### External Dependencies

**Core Dependencies**
- `@neondatabase/serverless`: Serverless PostgreSQL driver for Neon database
- `drizzle-orm`: TypeScript ORM for type-safe database queries
- `drizzle-zod`: Integration between Drizzle schemas and Zod validation

**UI Component Libraries**
- `@radix-ui/*`: Collection of unstyled, accessible UI primitives (accordion, dialog, dropdown, etc.)
- `tailwindcss`: Utility-first CSS framework
- `class-variance-authority`: Type-safe component variants
- `lucide-react`: Icon library
- `embla-carousel-react`: Carousel/slider functionality

**Form Management**
- `react-hook-form`: Performant form state management
- `@hookform/resolvers`: Integration with validation libraries
- `zod`: TypeScript-first schema validation

**Data Fetching**
- `@tanstack/react-query`: Server state management and caching

**Development Tools**
- `@replit/vite-plugin-*`: Replit-specific Vite plugins for enhanced development experience
- `tsx`: TypeScript execution for development server
- `esbuild`: Fast JavaScript bundler for production builds

**Routing**
- `wouter`: Lightweight routing library (sub-2KB alternative to React Router)

**Utilities**
- `clsx` & `tailwind-merge`: Conditional CSS class composition
- `date-fns`: Date formatting and manipulation
- `cmdk`: Command palette component

**Database & Session**
- `connect-pg-simple`: PostgreSQL session store for Express
- Neon database connection via DATABASE_URL environment variable

### Page Structure

**Public Pages**
- `/` - Home: Hero section, service explanation, how it works, benefits
- `/servicios` - Services: Detailed service breakdown with visual mockups
- `/precios` - Pricing: Single-plan transparent pricing with feature list
- `/faq` - FAQ: Accordion-based frequently asked questions
- `/contacto` - Contact: Form with validation and success states
- `/politicas` - Privacy Policy: Legal privacy information
- `/terminos` - Terms & Conditions: Legal service terms

**Layout Components**
- Navbar: Fixed header with mobile hamburger menu, navigation links
- Footer: Three-column layout with navigation, legal links, and contact info

### Build & Deployment

**Development**
- `npm run dev`: Runs development server with Vite HMR
- `npm run check`: TypeScript type checking

**Production Build**
- Client: Vite builds React app to `dist/public`
- Server: esbuild bundles Express server to `dist/index.js` (ESM format)
- `npm run build`: Builds both client and server
- `npm start`: Runs production server from bundled files

**Database Management**
- `npm run db:push`: Pushes schema changes to database via Drizzle Kit

### Configuration Files

- `vite.config.ts`: Client build configuration with path aliases (@, @shared, @assets)
- `tsconfig.json`: TypeScript configuration with ESNext modules and path mappings
- `tailwind.config.ts`: Custom theme with WhatsApp green, design tokens, and animations
- `drizzle.config.ts`: Database connection and migration configuration
- `components.json`: Shadcn/ui component configuration (New York style, neutral base color)