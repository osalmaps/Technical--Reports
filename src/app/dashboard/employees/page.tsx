'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/dashboard-layout'
import { UserRole } from '@/types/roles'
import {
  Users,
  Search,
  Filter,
  Plus,
  Edit,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Award,
  UserCheck,
  UserX,
  TrendingUp,
  Building
} from 'lucide-react'

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  // Mock employees data
  const employees = [
    {
      id: '1',
      name: 'John Admin',
      email: 'john@company.com',
      department: 'Management',
      position: 'System Administrator',
      status: 'active',
      joinDate: '2022-01-15',
      phone: '+1 234-567-8901',
      location: 'New York, NY',
      performance: 95,
      avatar: 'JA'
    },
    {
      id: '2',
      name: 'Sarah Manager',
      email: 'sarah@company.com',
      department: 'Sales',
      position: 'Sales Manager',
      status: 'active',
      joinDate: '2021-06-20',
      phone: '+1 234-567-8902',
      location: 'Los Angeles, CA',
      performance: 88,
      avatar: 'SM'
    },
    {
      id: '3',
      name: 'Mike Employee',
      email: 'mike@company.com',
      department: 'Engineering',
      position: 'Senior Developer',
      status: 'active',
      joinDate: '2020-03-10',
      phone: '+1 234-567-8903',
      location: 'San Francisco, CA',
      performance: 92,
      avatar: 'ME'
    },
    {
      id: '4',
      name: 'Jane Smith',
      email: 'jane@company.com',
      department: 'Marketing',
      position: 'Marketing Specialist',
      status: 'active',
      joinDate: '2023-02-01',
      phone: '+1 234-567-8904',
      location: 'Chicago, IL',
      performance: 85,
      avatar: 'JS'
    },
    {
      id: '5',
      name: 'Tom Wilson',
      email: 'tom@company.com',
      department: 'Engineering',
      position: 'Junior Developer',
      status: 'on_leave',
      joinDate: '2023-08-15',
      phone: '+1 234-567-8905',
      location: 'Austin, TX',
      performance: 78,
      avatar: 'TW'
    }
  ]

  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'Management', label: 'Management' },
    { value: 'Sales', label: 'Sales' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'HR', label: 'Human Resources' }
  ]

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.position.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'all' || employee.department === selectedDepartment
    const matchesStatus = selectedStatus === 'all' || employee.status === selectedStatus
    return matchesSearch && matchesDepartment && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-800 border-green-200',
      on_leave: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      inactive: 'bg-red-100 text-red-800 border-red-200'
    }
    const icons = {
      active: UserCheck,
      on_leave: Calendar,
      inactive: UserX
    }
    const Icon = icons[status as keyof typeof icons]
    return (
      <div className="flex items-center gap-2">
        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${styles[status as keyof typeof styles]}`}>
          {status.replace('_', ' ').charAt(0).toUpperCase() + status.replace('_', ' ').slice(1)}
        </span>
      </div>
    )
  }

  const getPerformanceColor = (performance: number) => {
    if (performance >= 90) return 'text-green-600'
    if (performance >= 80) return 'text-blue-600'
    if (performance >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  const departmentStats = [
    { name: 'Engineering', count: 12, growth: '+15%' },
    { name: 'Sales', count: 8, growth: '+8%' },
    { name: 'Marketing', count: 6, growth: '+12%' },
    { name: 'Management', count: 4, growth: '0%' }
  ]

  const quickStats = [
    {
      title: 'Total Employees',
      value: employees.length.toString(),
      change: '+2',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Now',
      value: '4',
      change: '+1',
      icon: UserCheck,
      color: 'text-green-600'
    },
    {
      title: 'On Leave',
      value: '1',
      change: '0',
      icon: Calendar,
      color: 'text-yellow-600'
    },
    {
      title: 'Avg Performance',
      value: '87%',
      change: '+3%',
      icon: Award,
      color: 'text-purple-600'
    }
  ]

  return (
    <DashboardLayout userRole={UserRole.MANAGER}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Employee Management</h1>
            <p className="text-gray-600 mt-2">Manage your team and track performance</p>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Add Employee
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

        {/* Department Overview */}
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {departmentStats.map((dept, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{dept.name}</h4>
                  <Building className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{dept.count}</p>
                <p className="text-sm text-green-600 mt-1">{dept.growth}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {departments.map(dept => (
                <option key={dept.value} value={dept.value}>{dept.label}</option>
              ))}
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="on_leave">On Leave</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Employees Table */}
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-white">{employee.avatar}</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                          <div className="text-sm text-gray-500">{employee.email}</div>
                          <div className="text-xs text-gray-400 mt-1">{employee.phone}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{employee.position}</div>
                        <div className="text-sm text-gray-500">{employee.location}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(employee.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">{employee.performance}%</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div 
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${employee.performance}%` }}
                            />
                          </div>
                        </div>
                        <TrendingUp className={`w-4 h-4 ml-2 ${getPerformanceColor(employee.performance)}`} />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-800">
                          <Mail className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-800">
                          <Phone className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
