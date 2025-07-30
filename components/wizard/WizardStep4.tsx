"use client"

import { useState } from "react"
import { X } from "lucide-react"
import DateRangePicker from "@wojtekmaj/react-daterange-picker"
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css"
import "react-calendar/dist/Calendar.css"
import "react-date-picker/dist/DatePicker.css"

interface WizardStep4Props {
  onNext: () => void
  onPrev: () => void
  onUpdate: (data: any) => void
  data: any
}

export default function WizardStep4({ onNext, onPrev, onUpdate, data }: WizardStep4Props) {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null])
  const [departureTime, setDepartureTime] = useState("12:30")
  const [arrivalTime, setArrivalTime] = useState("22:30")
  const [peopleCount, setPeopleCount] = useState(2)
  const [selectedRegions, setSelectedRegions] = useState(["부산"])

  const regions = ["부산", "울산", "어디나"]

  const toggleRegion = (region: string) => {
    setSelectedRegions((prev) => (prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]))
  }

  const handleNext = () => {
    onUpdate({
      schedule: {
        dateRange,
        departureTime,
        arrivalTime,
        peopleCount,
        regions: selectedRegions,
      },
    })
    onNext()
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">일정. 언제, 어디로, 몇명이서 갈까요?</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* 캘린더 */}
        <div>
          <DateRangePicker
            onChange={setDateRange}
            value={dateRange}
            minDate={new Date()}
            maxDate={new Date(2030, 11, 31)} // 2030년 12월 31일까지
            calendarIcon={null} // 아이콘 제거
            clearIcon={null} // 클리어 아이콘 제거
          />
        </div>

        {/* 시간 및 기타 설정 */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">선호 시간</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">출발</label>
                <input
                  type="time"
                  value={departureTime}
                  onChange={(e) => setDepartureTime(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">도착</label>
                <input
                  type="time"
                  value={arrivalTime}
                  onChange={(e) => setArrivalTime(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">인원수</h4>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                -
              </button>
              <span className="text-xl font-semibold">{peopleCount}</span>
              <button
                onClick={() => setPeopleCount(peopleCount + 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">가고 싶은 지역</h4>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => toggleRegion(region)}
                  className={`px-4 py-2 rounded-full border transition-colors ${
                    selectedRegions.includes(region)
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="bg-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-400 transition-colors"
        >
          이전
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          분석하기
        </button>
      </div>
    </div>
  )
}
