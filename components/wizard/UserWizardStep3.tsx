"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { useWizard } from "@/contexts/WizardContext"
import { Button } from "@/components/ui/button"

interface UserWizardStep3Props {
  onNext: () => void
  onPrev: () => void
}

export default function UserWizardStep3({ onNext, onPrev }: UserWizardStep3Props) {
  const { wizardData, updateWizardData } = useWizard()
  const [interestCount, setInterestCount] = useState(wizardData.userProfile?.interestCount || "")

  const options = [
    { value: "none", label: "없어요" },
    { value: "1-2", label: "1~2개 에요" },
    { value: "3-4", label: "3~4개 에요" },
    { value: "5+", label: "5~ 에요" },
  ]

  const handleNext = () => {
    updateWizardData({
      userProfile: {
        ...wizardData.userProfile,
        interestCount,
      },
    })
    onNext()
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">관심사 갯수. 즐기는 관심사 또는 취미활동이 보통 몇가지인가요?</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="space-y-4 mb-8">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => setInterestCount(option.value)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
              interestCount === option.value
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <span className="text-lg">{option.label}</span>
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
          disabled={!interestCount}
        >
          다음
        </Button>
      </div>
    </div>
  )
}
