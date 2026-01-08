'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/dashboard-layout'
import RoleSwitcher from '@/components/role-switcher'
import { UserRole } from '@/types/roles'

export default function DashboardPage() {
  const [currentRole, setCurrentRole] = useState<UserRole>(UserRole.ADMIN)

  return (
    <DashboardLayout userRole={currentRole}>
      <div className="space-y-6">
        <RoleSwitcher currentRole={currentRole} onRoleChange={setCurrentRole} />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome to your business dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">$45,231</p>
            <p className="text-sm text-green-600 mt-2">+12% from last month</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">1,234</p>
            <p className="text-sm text-green-600 mt-2">+5% from last week</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">567</p>
            <p className="text-sm text-red-600 mt-2">-2% from last week</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Conversion Rate</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">3.2%</p>
            <p className="text-sm text-green-600 mt-2">+0.5% from last month</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">New user registration</p>
                  <p className="text-sm text-gray-500">John Doe joined the platform</p>
                </div>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Order completed</p>
                  <p className="text-sm text-gray-500">Order #1234 has been delivered</p>
                </div>
                <span className="text-xs text-gray-500">4 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Report generated</p>
                  <p className="text-sm text-gray-500">Monthly sales report is ready</p>
                </div>
                <span className="text-xs text-gray-500">6 hours ago</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                Create New Report
              </button>
              <button className="w-full text-left px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                Add New User
              </button>
              <button className="w-full text-left px-4 py-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                View Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
