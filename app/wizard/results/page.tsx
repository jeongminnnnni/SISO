"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/Header"
import { useAuth } from "@/contexts/AuthContext"
import { useWizard } from "@/contexts/WizardContext"
import { Star, Heart } from "lucide-react"
import Image from "next/image"
import ReconstructModal from "@/components/wizard/ReconstructModal"
import { recommendTravel } from "@/lib/recommendation"
import { TravelDestination } from "@/lib/travelData"

export default function WizardResultsPage() {
  const [showReconstructModal, setShowReconstructModal] = useState(false)
  const { isLoggedIn } = useAuth()
  const { wizardData, reconstructCount } = useWizard()
  const router = useRouter()
  const [recommendations, setRecommendations] = useState<TravelDestination[]>([])

  useEffect(() => {
    // if (wizardData.activity === "여행") {
    //   router.push("/travel")
    // } else if (wizardData.activity === "클래스") {
    //   router.push("/class")
    // }
    const recommended = recommendTravel(wizardData);
    setRecommendations(recommended);
  }, [wizardData, router])

  const handleReconstructComplete = () => {
    setShowReconstructModal(false)
    // 재구성된 결과를 보여주기 위해 페이지 새로고침 또는 상태 업데이트
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-center mb-8">시소에서 가장 좋은 일정을 세웠어요 :-)</h1>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              나의 여행 프로필
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-gray-600 mb-1">거주지</h3>
                <p className="text-sm text-gray-800">
                  {wizardData.location?.city} {wizardData.location?.district}
                </p>
              </div>
              
              {isLoggedIn ? (
                <>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-gray-600 mb-1">소비습관</h3>
                    <p className="text-sm text-gray-800">
                      {wizardData.userProfile?.spendingHabit === "quality-first"
                        ? "고품질 선호"
                        : wizardData.userProfile?.spendingHabit === "rational"
                        ? "합리/효율적"
                        : "가성비 중시"}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-gray-600 mb-1">건강상태</h3>
                    <p className="text-sm text-gray-800">
                      {wizardData.userProfile?.healthStatus === "high" ? "튼튼해요" : "보통이에요"}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-gray-600 mb-1">선호 지역</h3>
                    <p className="text-sm text-gray-800">{wizardData.schedule?.regions?.join(", ")}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-gray-600 mb-1">인원</h3>
                    <p className="text-sm text-gray-800">{wizardData.schedule?.peopleCount}명</p>
                  </div>
                </>
              )}

              <div className="bg-white p-4 rounded-lg shadow col-span-2 md:col-span-1 lg:col-span-1">
                <h3 className="font-semibold text-gray-600 mb-1">관심사</h3>
                <p className="text-sm text-gray-800">{wizardData.interests?.join(", ")}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">시소에서 추천하는 가장 좋은 플랜</h3>
            <p className="text-gray-600 mb-6">키워드를 최대한 담고자 했어요!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {recommendations.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                      <Heart className="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-bold">{item.rating}</span>
                      </div>
                      <span className="font-semibold text-blue-600">{item.price.toLocaleString()}원~</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 추가 추천 상품들 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.slice(3).map((item) => (
                <div
                  key={item.id}
                  className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-bold">{item.rating}</span>
                      </div>
                      <span className="font-semibold text-blue-600">{item.price.toLocaleString()}원~</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <span className="text-6xl">😔</span>
            </div>
            <p className="text-gray-600 mb-4">원하는 곳이 없어요:/</p>
            <p className="text-sm text-gray-500 mb-6">
              {isLoggedIn ? "재구성 횟수: 무제한" : `(비회원일 경우) 재구성 횟수: ${reconstructCount + 1}`}
            </p>

            <button
              onClick={() => setShowReconstructModal(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              다시 설계하기
            </button>
          </div>
        </div>
      </div>

      {showReconstructModal && (
        <ReconstructModal onClose={() => setShowReconstructModal(false)} onComplete={handleReconstructComplete} />
      )}
    </div>
  )
}
