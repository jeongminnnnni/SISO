"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const { user, isLoggedIn, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    setIsMenuOpen(false)
  }

  const navLinks = [
    { href: "/travel", text: "여행" },
    { href: "/class", text: "클래스" },
    { href: "/community", text: "시소챗" },
    { href: "/support", text: "고객센터" },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image src="/siso_logo.png" alt="SISO 로고" width={80} height={32} />
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex md:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-large text-base ${
                  pathname === link.href ? "text-blue-600" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* 데스크탑 검색 및 로그인 */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="예약 검색"
                className="w-32 px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:border-gray-400"
              />
            </div>
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <Link href="/mypage" className="text-white bg-blue-300 rounded-full px-3 py-1 text-sm hover:bg-blue-400 transition-colors">
                  {user?.name}님
                </Link>
                <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-gray-700">
                  로그아웃
                </button>
              </div>
            ) : (
              <Link href="/login" className="text-white bg-blue-300 rounded-full px-3 py-1 text-sm hover:bg-blue-400 transition-colors">
                로그인
              </Link>
            )}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-5">
              {isLoggedIn ? (
                <div className="flex items-center justify-between">
                  <Link href="/mypage" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-gray-800">
                    {user?.name}님 환영해요
                  </Link>
                  <button onClick={handleLogout} className="text-base font-medium text-gray-500 hover:text-gray-700">
                    로그아웃
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-blue-500 text-white rounded-md py-2 text-base font-medium hover:bg-blue-600"
                >
                  로그인/가입
                </Link>
              )}
            </div>
            <div className="mt-3 px-5">
              <input
                type="text"
                placeholder="예약 검색"
                className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
