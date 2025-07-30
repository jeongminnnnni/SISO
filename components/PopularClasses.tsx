import Image from "next/image"
import { Star } from "lucide-react"

export default function PopularClasses() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mr-4">인기 클래스 추천</h2>
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">#낚시</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="저수지 낚시교실"
                width={350}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">26/30</div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 mb-2">입문자용 루어낚시/대물보단 체험 중심/장비 제공</p>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">도시를 벗어나, 한적한 저수지 낚시교실</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-bold">4.1</span>
                  <span className="text-sm text-gray-500 ml-1">(56)</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">35,000원</span>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="바다 선상낚시"
                width={350}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">26/30</div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 mb-2">서해안 연안 바다낚시/가이드 동반 / 간단한 조리 포함</p>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">손맛이란 이런 거예요, 바다 선상낚시 초급</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-bold">4.3</span>
                  <span className="text-sm text-gray-500 ml-1">(78)</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">48,000원</span>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="낚시터 커피"
                width={350}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">26/30</div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 mb-2">카페형 낚시터에서 소규모 그룹 체험 + 뒤풀이 티타임</p>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">낚시터에서 만난 오후, 커피 한 잔과 함께</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-bold">3.8</span>
                  <span className="text-sm text-gray-500 ml-1">(42)</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">39,000원</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}