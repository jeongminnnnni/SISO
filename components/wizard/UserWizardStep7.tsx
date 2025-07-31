"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { useWizard } from "@/contexts/WizardContext"
import { Button } from "@/components/ui/button"

interface UserWizardStep7Props {
  onNext: () => void
  onPrev: () => void
}

export default function UserWizardStep7({ onNext, onPrev }: UserWizardStep7Props) {
  const { wizardData, updateWizardData } = useWizard()
  const [preferredDuration, setPreferredDuration] = useState(wizardData.userProfile?.preferredDuration || "")

  const options = [
    { value: "within-1week", label: "1주 이내" },
    { value: "1week", label: "1주~" },
    { value: "2weeks", label: "2주~" },
    { value: "3weeks", label: "3주~" },
    { value: "4weeks", label: "4주~" },
  ]

  const handleNext = () => {
    updateWizardData({
      userProfile: {
        ...wizardData.userProfile,
        preferredDuration,
      },
    })
    onNext()
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">선호 일정. 평소 선호하는 여행 기간은 어느정도 일까요?</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="space-y-4 mb-8">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => setPreferredDuration(option.value)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
              preferredDuration === option.value
                ? "border-blue-500 bg-blue-50" 
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
          disabled={!preferredDuration}
        >
          다음
        </Button>
      </div>
    </div>
  )
}
