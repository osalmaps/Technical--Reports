'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { UserRole } from '@/types/roles'
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  BarChart3,
  Building,
  Calendar,
  Mail,
  LogOut,
  Menu,
  X
} from 'lucide-react'

interface SidebarLink {
  href: string
  label: string
  icon: any
  roles: UserRole[]
}

const sidebarLinks: SidebarLink[] = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE]
  },
  {
    href: '/dashboard/analytics',
    label: 'Analytics',
    icon: BarChart3,
    roles: [UserRole.ADMIN, UserRole.MANAGER]
  },
  {
    href: '/dashboard/users',
    label: 'Users',
    icon: Users,
    roles: [UserRole.ADMIN]
  },
  {
    href: '/dashboard/employees',
    label: 'Employees',
    icon: Building,
    roles: [UserRole.ADMIN, UserRole.MANAGER]
  },
  {
    href: '/dashboard/reports',
    label: 'Reports',
    icon: FileText,
    roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE]
  },
  {
    href: '/dashboard/technical-reports',
    label: 'Technical Reports',
    icon: FileText,
    roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE]
  },
  {
    href: '/dashboard/calendar',
    label: 'Calendar',
    icon: Calendar,
    roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE]
  },
  {
    href: '/dashboard/messages',
    label: 'Messages',
    icon: Mail,
    roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE]
  },
  {
    href: '/dashboard/settings',
    label: 'Settings',
    icon: Settings,
    roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE]
  }
]

interface DashboardLayoutProps {
  children: React.ReactNode
  userRole: UserRole
}

export default function DashboardLayout({ children, userRole }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const filteredLinks = sidebarLinks.filter(link => link.roles.includes(userRole))

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">Business App</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <nav className="mt-6">
          <div className="px-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Role: {userRole}
            </p>
          </div>
          <div className="mt-6">
            {filteredLinks.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-blue-600 bg-blue-50 border-r-4 border-blue-600"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {link.label}
                </Link>
              )
            })}
          </div>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <button className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="w-6 h-6 text-gray-500" />
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome back!</span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
