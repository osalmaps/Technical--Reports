'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/dashboard-layout'
import { UserRole } from '@/types/roles'
import {
  FileText,
  Download,
  Calendar,
  Filter,
  Search,
  Eye,
  Trash2,
  Plus,
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart
} from 'lucide-react'

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDateRange, setSelectedDateRange] = useState('30d')

  // Mock reports data
  const reports = [
    {
      id: '1',
      name: 'Monthly Sales Report',
      category: 'sales',
      date: '2024-01-07',
      size: '2.4 MB',
      format: 'PDF',
      status: 'completed',
      createdBy: 'John Admin',
      description: 'Comprehensive sales analysis for January 2024'
    },
    {
      id: '2',
      name: 'User Activity Analysis',
      category: 'users',
      date: '2024-01-06',
      size: '1.8 MB',
      format: 'Excel',
      status: 'completed',
      createdBy: 'Sarah Manager',
      description: 'User engagement and activity metrics'
    },
    {
      id: '3',
      name: 'Financial Summary Q4 2023',
      category: 'financial',
      date: '2024-01-05',
      size: '3.2 MB',
      format: 'PDF',
      status: 'completed',
      createdBy: 'John Admin',
      description: 'Quarterly financial performance report'
    },
    {
      id: '4',
      name: 'Product Performance Report',
      category: 'products',
      date: '2024-01-04',
      size: '1.5 MB',
      format: 'Excel',
      status: 'processing',
      createdBy: 'Mike Employee',
      description: 'Product sales and performance analysis'
    },
    {
      id: '5',
      name: 'Customer Satisfaction Survey',
      category: 'customers',
      date: '2024-01-03',
      size: '890 KB',
      format: 'PDF',
      status: 'completed',
      createdBy: 'Jane Smith',
      description: 'Annual customer feedback and satisfaction metrics'
    }
  ]

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'sales', label: 'Sales' },
    { value: 'users', label: 'Users' },
    { value: 'financial', label: 'Financial' },
    { value: 'products', label: 'Products' },
    { value: 'customers', label: 'Customers' }
  ]

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || report.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryBadge = (category: string) => {
    const styles = {
      sales: 'bg-blue-100 text-blue-800',
      users: 'bg-green-100 text-green-800',
      financial: 'bg-purple-100 text-purple-800',
      products: 'bg-orange-100 text-orange-800',
      customers: 'bg-pink-100 text-pink-800'
    }
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[category as keyof typeof styles] || 'bg-gray-100 text-gray-800'}`}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </span>
    )
  }

  const getStatusBadge = (status: string) => {
    const styles = {
      completed: 'bg-green-100 text-green-800',
      processing: 'bg-yellow-100 text-yellow-800',
      failed: 'bg-red-100 text-red-800'
    }
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[status as keyof typeof styles]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    )
  }

  const quickStats = [
    {
      title: 'Total Reports',
      value: '156',
      change: '+12%',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'This Month',
      value: '23',
      change: '+8%',
      icon: Calendar,
      color: 'text-green-600'
    },
    {
      title: 'Processing',
      value: '3',
      change: '-2',
      icon: TrendingUp,
      color: 'text-yellow-600'
    },
    {
      title: 'Storage Used',
      value: '1.2 GB',
      change: '+15%',
      icon: Download,
      color: 'text-purple-600'
    }
  ]

  return (
    <DashboardLayout userRole={UserRole.EMPLOYEE}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Reports Center</h1>
            <p className="text-gray-600 mt-2">Generate, view, and manage business reports</p>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Generate Report
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
                  </div>
                  <div className={`p-3 bg-gray-50 rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search reports..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
            <select
              value={selectedDateRange}
              onChange={(e) => setSelectedDateRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
          </div>
        </div>

        {/* Reports Table */}
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Report Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredReports.map((report) => (
                  <tr key={report.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{report.name}</div>
                        <div className="text-sm text-gray-500">{report.description}</div>
                        <div className="text-xs text-gray-400 mt-1">By {report.createdBy}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getCategoryBadge(report.category)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {report.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {report.size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(report.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-800">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Popular Report Templates */}
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Report Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Sales Summary', icon: DollarSign, color: 'bg-blue-500' },
              { name: 'User Analytics', icon: Users, color: 'bg-green-500' },
              { name: 'Product Performance', icon: ShoppingCart, color: 'bg-purple-500' },
              { name: 'Financial Report', icon: FileText, color: 'bg-orange-500' }
            ].map((template, index) => {
              const Icon = template.icon
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className={`w-12 h-12 ${template.color} rounded-lg flex items-center justify-center mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-medium text-gray-900">{template.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">Generate this report</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
