'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { User as SupabaseUser } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import { User, UserRole, AuthState } from '@/types/roles'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string, name?: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    error: null
  })

  useEffect(() => {
    // Development mode: Skip authentication
    setAuthState({ user: null, isLoading: false, error: null })
    return

    // Original auth code (commented out for development)
    /*
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session?.user) {
        const user: User = {
          id: session.user.id,
          email: session.user.email!,
          role: UserRole.ADMIN, // Default role - you'll manage this in admin panel
          name: session.user.user_metadata?.name || session.user.email
        }
        setAuthState({ user, isLoading: false, error: null })
      } else {
        setAuthState({ user: null, isLoading: false, error: null })
      }
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          const user: User = {
            id: session.user.id,
            email: session.user.email!,
            role: UserRole.ADMIN, // Default role
            name: session.user.user_metadata?.name || session.user.email
          }
          setAuthState({ user, isLoading: false, error: null })
        } else {
          setAuthState({ user: null, isLoading: false, error: null })
        }
      }
    )

    return () => subscription.unsubscribe()
    */
  }, [])

  const signIn = async (email: string, password: string) => {
    // Development mode: Mock sign in
    return { error: null }
    
    // Original code (commented out)
    /*
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { error }
    */
  }

  const signUp = async (email: string, password: string, name?: string) => {
    // Development mode: Mock sign up
    return { error: null }
    
    // Original code (commented out)
    /*
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name || email
        }
      }
    })
    return { error }
    */
  }

  const signOut = async () => {
    // Development mode: Mock sign out
    return
    
    // Original code (commented out)
    /*
    await supabase.auth.signOut()
    */
  }

  const value = {
    user: authState.user,
    loading: authState.isLoading,
    signIn,
    signUp,
    signOut
  }

  return React.createElement(
    AuthContext.Provider,
    { value },
    children
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
