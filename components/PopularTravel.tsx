import Image from "next/image"
import { Star } from "lucide-react"

export default function PopularTravel() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mr-4">인기 여행 추천</h2>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">#바다</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="부산 바닷길"
                width={350}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">26/30</div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 mb-2">부산 해운대·송정·이기대</p>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">파도 따라 걷는 부산 바닷길 2박 3일</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-bold">4.8</span>
                  <span className="text-sm text-gray-500 ml-1">(15)</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">319,000원~</span>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="여수 바다"
                width={350}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">12/20</div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 mb-2">여수 돌산대교 야경, 오동도 산책, 여수밤바다 뱃놀이</p>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">여수의 바다, 섬 그리고 낙조</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-bold">4.5</span>
                  <span className="text-sm text-gray-500 ml-1">(28)</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">359,000원~</span>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="통영 바다미술관"
                width={350}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">24/40</div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 mb-2">통영 동피랑 벽화마을 + 통영해양갤러리 + 한산도 뱃길 투어</p>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">파란 날의 통영 바다미술관 여행</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-bold">4.6</span>
                  <span className="text-sm text-gray-500 ml-1">(126)</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">299,000원~</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}