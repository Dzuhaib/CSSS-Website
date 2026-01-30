# CSSS Nonprofit Website

## Overview

This is a premium, modern humanitarian nonprofit website for the **Charitable Society for Students of Sciences (CSSS)**, a nonprofit organization founded in Somalia in 2003. The website focuses on education, health, humanitarian aid, and community development.

The application follows a full-stack architecture with a React frontend and Express backend, using PostgreSQL for data persistence. The design emphasizes a trustworthy, human-centered, and professional aesthetic with smooth animations and premium UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for smooth page transitions and scroll effects
- **Forms**: React Hook Form with Zod validation
- **Typography**: Playfair Display (headings) and DM Sans (body text)

### Backend Architecture
- **Framework**: Express 5 with TypeScript
- **Server**: Node.js with HTTP server
- **API Pattern**: RESTful endpoints defined in shared route definitions
- **Build System**: Vite for frontend, esbuild for backend bundling

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` contains all database table definitions
- **Migrations**: Managed via `drizzle-kit push`

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared code between client and server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route definitions with Zod schemas
```

### Key Design Patterns
- **Shared Types**: Database schemas and API contracts are defined in `shared/` and consumed by both frontend and backend
- **Type-Safe API**: Route definitions include input/output schemas using Zod
- **Component Library**: Uses shadcn/ui components configured in `components.json`
- **Path Aliases**: `@/` maps to client/src, `@shared/` maps to shared folder

## External Dependencies

### Database
- **PostgreSQL**: Primary database (connection via `DATABASE_URL` environment variable)
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Frontend Libraries
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for page transitions
- **wouter**: Lightweight React router
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Zod resolver integration

### UI Framework
- **Radix UI**: Accessible component primitives (dialog, dropdown, tabs, etc.)
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Build Tools
- **Vite**: Frontend development server and bundler
- **esbuild**: Backend TypeScript bundling
- **drizzle-kit**: Database schema management

### Development
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling