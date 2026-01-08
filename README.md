# Business App

A long-term business application built with Next.js, TypeScript, Tailwind CSS, and Supabase Auth.

## Features

- **Role-based Authentication**: Three user roles (ADMIN, MANAGER, EMPLOYEE)
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **Responsive Design**: Mobile-friendly dashboard layout
- **Protected Routes**: Middleware-based authentication
- **TypeScript**: Full type safety throughout the application

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Supabase account (for authentication)

### Installation

1. Clone or set up the project in your directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Configure your Supabase project:
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to Project Settings > API
   - Copy the following values to your `.env.local`:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY`

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── dashboard/
│   │   └── page.tsx          # Main dashboard page
│   ├── login/
│   │   └── page.tsx          # Login page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   └── dashboard-layout.tsx  # Dashboard layout component
├── lib/
│   └── utils.ts              # Utility functions
└── types/
    └── auth.ts               # Authentication types
```

## User Roles

The application supports three user roles:

### ADMIN
- Access to all features
- User management
- Analytics and reports
- Full dashboard access

### MANAGER
- Employee management
- Analytics and reports
- Dashboard access (except user management)

### EMPLOYEE
- Basic dashboard access
- Reports and calendar
- Limited functionality

## Authentication Flow

1. Unauthenticated users are redirected to `/login`
2. After successful login, users are redirected to `/dashboard`
3. The middleware protects all routes except `/login`
4. Sidebar navigation is filtered based on user role

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features

1. Create new pages in the `src/app/dashboard/` directory
2. Add navigation links to the `sidebarLinks` array in `dashboard-layout.tsx`
3. Specify which roles can access the new feature
4. Update types as needed in `src/types/auth.ts`

## Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Set environment variables in your hosting platform
3. Deploy the `.next` folder

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **Supabase** - Authentication and database
- **Lucide React** - Icons

## License

This project is licensed under the MIT License.
