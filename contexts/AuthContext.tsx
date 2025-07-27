"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  name: string
  email: string
  provider: string
  isFirstTime?: boolean
  profile?: {
    interestCount: string
    spendingHabit: string
    healthStatus: string
    skillLevel: string
    preferredDuration: string
    availableDay: string
    availableTime: string
  }
}

interface AuthContextType {
  user: User | null
  token: string | null // 토큰 상태 추가
  login: (userData: User, token: string | null) => void // login 함수에 token 파라미터 추가
  logout: () => void
  isLoggedIn: boolean
  completeInitialProfile: (profileData: any) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  // 앱이 처음 로드될 때 localStorage에서 인증 정보 복원
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user")
      const storedToken = localStorage.getItem("token")
      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser))
        setToken(storedToken)
      }
    } catch (error) {
      console.error("Failed to parse auth data from localStorage", error)
      localStorage.removeItem("user")
      localStorage.removeItem("token")
    }
  }, [])

  const login = (userData: User, token: string | null) => {
    const userToStore = { ...userData, isFirstTime: true };
    setUser(userToStore)
    setToken(token)
    try {
        localStorage.setItem("user", JSON.stringify(userToStore))
        if (token) {
            localStorage.setItem("token", token)
        } else {
            localStorage.removeItem("token")
        }
    } catch (error) {
        console.error("Failed to save auth data to localStorage", error)
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    try {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    } catch (error) {
        console.error("Failed to remove auth data from localStorage", error)
    }
  }

  const isLoggedIn = !!user && !!token; // 이제 토큰 유무도 확인

  const completeInitialProfile = (profileData: any) => {
    if (user) {
      const updatedUser = {
        ...user,
        isFirstTime: false,
        profile: profileData,
      }
      setUser(updatedUser)
      try {
        localStorage.setItem("user", JSON.stringify(updatedUser))
      } catch (error) {
        console.error("Failed to save updated user to localStorage", error)
      }
    }
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoggedIn, completeInitialProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
