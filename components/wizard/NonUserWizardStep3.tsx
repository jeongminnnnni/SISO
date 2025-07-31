"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { useWizard } from "@/contexts/WizardContext"
import { Button } from "@/components/ui/button"

interface NonUserWizardStep3Props {
  onNext: () => void
  onPrev: () => void
}

export default function NonUserWizardStep3({ onNext, onPrev }: NonUserWizardStep3Props) {
  const { wizardData, updateWizardData } = useWizard()
  const [selectedInterests, setSelectedInterests] = useState(wizardData.interests || [])

  const interests = [
    { name: "박물관", icon: "🏛️" },
    { name: "낚시", icon: "🎣" },
    { name: "등산", icon: "🏔️" },
    { name: "베이킹", icon: "🧁" },
    { name: "맛집", icon: "🍽️" },
    { name: "크루즈", icon: "🚢" },
    { name: "쇼핑", icon: "🛍️" },
    { name: "온천", icon: "♨️" },
    { name: "캠핑", icon: "🏕️" },
    { name: "페스티벌", icon: "🎪" },
    { name: "테마파크", icon: "🎢" },
    { name: "골프", icon: "⛳" },
    { name: "봉사", icon: "🤝" },
    { name: "스키", icon: "⛷️" },
    { name: "농촌체험", icon: "🌾" },
    { name: "템플", icon: "🏯" },
    { name: "승마", icon: "🐎" },
    { name: "역사투어", icon: "📜" },
    { name: "바다", icon: "🌊" },
    { name: "아쿠아리움", icon: "🐠" },
  ]

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev: string[]) =>
      prev.includes(interest) ? prev.filter((item) => item !== interest) : [...prev, interest],
    )
  }

  const handleNext = () => {
    updateWizardData({ interests: selectedInterests })
    onNext()
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">분야. 무엇을 위주로 할까요?</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-5 gap-4 mb-8">
        {interests.map((interest) => (
          <button
            key={interest.name}
            onClick={() => toggleInterest(interest.name)}
            className={`p-4 rounded-lg border-2 transition-colors ${
              selectedInterests.includes(interest.name)
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">{interest.icon}</div>
              <span className="text-sm font-medium">{interest.name}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <Button
          onClick={onPrev}
        >
          이전
        </Button>
        <Button
          onClick={handleNext}
          disabled={selectedInterests.length === 0}
        >
          다음
        </Button>
      </div>
    </div>
  )
}
