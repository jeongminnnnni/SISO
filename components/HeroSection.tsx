import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          나를 위한 완벽한 여정,
          <br />
          <span className="text-blue-600">AI가 찾아드려요</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          최소 3분 이내로 나에게 맞는 플랜을 구성해주는 '설계 마법사'
        </p>

        <Link
          href="/wizard"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          설계 마법사 시작하기
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}