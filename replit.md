# STONEHILL CITY - MTA ROLEPLAY SERVER

## Overview

This is a full-stack web application for an MTA (Multi Theft Auto) roleplay server called "Stonehill City". The application serves as a landing page and community portal featuring server information, statistics, gallery, and social media integration. The project is built with a modern tech stack using React frontend, Express backend, and PostgreSQL database with Arabic RTL (right-to-left) language support.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Radix UI primitives for accessibility
- **Animations**: Framer Motion for smooth transitions and effects
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server-side bundling

### Database Architecture
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations
- **Connection**: @neondatabase/serverless for serverless database connections

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Hero section with animated particles and server connection
   - Navigation with smooth scrolling
   - Server statistics with real-time player count simulation
   - About section with feature highlights
   - Gallery showcasing server features
   - Community section with Discord and social media links
   - Footer with server IP and quick actions

2. **UI System**:
   - Complete shadcn/ui component library implementation
   - Dark theme with custom color scheme
   - RTL support for Arabic content
   - Responsive design for mobile and desktop

3. **Interactive Features**:
   - Server IP clipboard copying functionality
   - Direct server connection links
   - Animated statistics and particle effects
   - Toast notifications for user feedback

### Backend Structure
1. **Server Setup**: Express application with middleware for logging and error handling
2. **Storage Layer**: Abstract storage interface with in-memory implementation
3. **Route System**: Modular route registration system (currently minimal)
4. **Development Tools**: Vite integration for hot reloading in development

### Database Schema
- **Users Table**: Basic user structure with username and password fields
- **Validation**: Zod schemas for type-safe data validation
- **Type Generation**: Automatic TypeScript types from database schema

## Data Flow

1. **Frontend Requests**: React components use TanStack Query for API calls
2. **API Layer**: Express server handles HTTP requests with structured error handling
3. **Storage Operations**: Abstract storage interface allows for easy database switching
4. **Data Validation**: Shared schemas ensure type safety across client and server
5. **Response Handling**: Structured JSON responses with proper error codes

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL serverless database
- **UI Libraries**: Radix UI components for accessibility
- **Icons**: Lucide React icons and React Icons (Discord, YouTube)
- **Animations**: Framer Motion for smooth animations
- **Date Handling**: date-fns for date utilities

### Development Tools
- **TypeScript**: Full type safety across the stack
- **ESLint/Prettier**: Code quality and formatting
- **Vite Plugins**: Runtime error overlay and Replit integration

### External Services
- **Discord**: Community server integration
- **YouTube**: Video content integration
- **Unsplash**: Image hosting for gallery content

## Deployment Strategy

### Replit Configuration
- **Runtime**: Node.js 20 with PostgreSQL 16 module
- **Development**: `npm run dev` starts both frontend and backend
- **Production Build**: `npm run build` creates optimized bundles
- **Production Start**: `npm run start` runs the production server
- **Port Configuration**: Server runs on port 5000, mapped to external port 80

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Serving**: Production server serves built frontend assets
4. **Database**: Drizzle handles schema migrations with `npm run db:push`

### Environment Setup
- **Database URL**: Required environment variable for PostgreSQL connection
- **Development Mode**: Automatic Vite integration for hot reloading
- **Production Mode**: Optimized builds with static asset serving

## Changelog

```
Changelog:
- June 14, 2025. Initial setup
- June 14, 2025. Removed server statistics section and added Stonehill City logo display in about section
- June 14, 2025. Added MTA Roleplay rules section with comprehensive gaming guidelines
- June 14, 2025. Added MTA download section with installation instructions
- June 14, 2025. Updated navigation to include rules section
- June 14, 2025. Enhanced website focus on roleplay server branding
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Server features: Remove server statistics (player count, uptime, maps, events)
Logo: Display Stonehill City logo prominently in about section
Content requirements: Include MTA roleplay rules and download instructions
Website focus: Emphasize roleplay server nature with clear gaming guidelines
```