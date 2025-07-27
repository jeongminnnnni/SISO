"use client"

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Header from "@/components/Header"
import { useAuth } from "@/contexts/AuthContext"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("youngho.jeong@gmail.com") // 기본값으로 테스트 ID 설정
  const [password, setPassword] = useState("siso_password") // 기본값으로 테스트 PW 설정
  const { login } = useAuth()
  const router = useRouter()

  const handleEmailLogin = async (event: FormEvent) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: email,
          password: password,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        login({ name: "정영호", email: email, provider: "email" }, data.token)
        router.push("/") // 메인 페이지로 리다이렉트
      } else {
        const errorData = await response.json()
        alert(`로그인 실패: ${errorData.detail || "알 수 없는 오류"}`)
      }
    } catch (error) {
      console.error("로그인 요청 중 오류 발생:", error)
      alert("로그인 중 문제가 발생했습니다. 서버 상태를 확인해주세요.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGuestLogin = () => {
    const userData = {
      name: "게스트",
      email: "guest@siso.com",
      provider: "guest",
    }
    login(userData, null) // 게스트 로그인은 토큰이 없음
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <Image src="/siso_logo.png" alt="SISO 로고" width={180} height={72} className="mx-auto mb-8" />
            <h2 className="text-sm font-semibold text-gray-400 mt-20">-----------------------------로그인하기-----------------------------</h2>
          </div>

          {/* 이메일 로그인 폼 */}
          <form onSubmit={handleEmailLogin} className="space-y-4 mb-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                이메일 주소
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isLoading ? "로그인 중..." : "이메일로 로그인"}
            </button>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">또는</span>
            </div>
          </div>

          {/* 소셜 및 비회원 로그인 */}
          <div className="space-y-4">
            {/* 소셜 로그인 버튼들은 기능 구현 시 활성화 */}
            <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
              구글로 시작하기
            </button>
            <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-colors disabled:opacity-50" disabled>
              카카오로 시작하기
            </button>
            <button
              onClick={handleGuestLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              비회원으로 이용하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

