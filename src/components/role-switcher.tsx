'use client'

import { useState } from 'react'
import { UserRole } from '@/types/roles'

interface RoleSwitcherProps {
  currentRole: UserRole
  onRoleChange: (role: UserRole) => void
}

export default function RoleSwitcher({ currentRole, onRoleChange }: RoleSwitcherProps) {
  const roles = [
    { value: UserRole.ADMIN, label: 'Admin', color: 'bg-red-500' },
    { value: UserRole.MANAGER, label: 'Manager', color: 'bg-blue-500' },
    { value: UserRole.EMPLOYEE, label: 'Employee', color: 'bg-green-500' }
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Role Testing (Development Only)</h3>
      <div className="flex gap-2">
        {roles.map((role) => (
          <button
            key={role.value}
            onClick={() => onRoleChange(role.value)}
            className={`
              px-4 py-2 rounded-lg font-medium transition-all duration-200
              ${currentRole === role.value 
                ? `${role.color} text-white shadow-lg transform scale-105` 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {role.label}
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Current role: <span className="font-semibold">{currentRole}</span>
      </p>
    </div>
  )
}
