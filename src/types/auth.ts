export type UserRole = 'ADMIN' | 'MANAGER' | 'EMPLOYEE'

export interface User {
  id: string
  email: string
  role: UserRole
  name?: string
}

export interface AuthState {
  user: User | null
  isLoading: boolean
  error: string | null
}
