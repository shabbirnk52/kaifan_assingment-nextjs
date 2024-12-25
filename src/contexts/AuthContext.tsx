'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { setCookie, deleteCookie } from 'cookies-next'

interface AuthContextType {
  isAuthenticated: boolean
  user: any | null
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
    const router = useRouter()
    const [user, setUser] = useState<any | null>(null)
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      const token = localStorage.getItem('user-token')
      if (token) {
        setUser({ token })
        if (window.location.pathname === '/') {
          router.push('/dashboard')
        }
      } else if (window.location.pathname !== '/login') {
        router.push('/login')
      }
      setLoading(false)
    }, [router])
    
  const checkAuth = () => {
    try {
      const token = localStorage.getItem('user-token')
      if (token) {
        setUser({ token })
      }
    } catch (error) {
      console.error('Auth check failed:', error)
    } finally {
      setLoading(false)
    }
  }

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      if (username === 'demo' && password === 'demo') {
        const token = 'demo-token'
        // Set both localStorage and cookie
        localStorage.setItem('user-token', token)
        setCookie('user-token', token)
        setUser({ token })
        router.push('/dashboard')
        return true
      }
      return false
    } catch (error) {
      console.error('Login failed:', error)
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem('user-token')
    deleteCookie('user-token')
    setUser(null)
    router.push('/login')
  }

  const value = {
    isAuthenticated: !!user,
    user,
    login,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}