import { useState } from "react"
import { X } from "lucide-react"
import { useWizard } from "@/contexts/WizardContext"
import { Button } from "@/components/ui/button"

interface UserWizardStep6Props {
  onNext: () => void
  onPrev: () => void
}

export default function UserWizardStep6({ onNext, onPrev }: UserWizardStep6Props) {
  const { wizardData, updateWizardData } = useWizard()
  const [skillLevel, setSkillLevel] = useState(wizardData.userProfile?.skillLevel || "")

  const options = [
    { value: "beginner", label: "처음이에요" },
    { value: "novice", label: "초보정도 인 거 같아요" },
    { value: "intermediate", label: "중급정도 인 거 같아요" },
    { value: "advanced", label: "상급정도 인 거 같아요" },
    { value: "master", label: "마스터 정도 인 거 같아요" },
  ]

  const handleNext = () => {
    updateWizardData({
      userProfile: {
        ...wizardData.userProfile,
        skillLevel,
      },
    })
    onNext()
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">숙련도. 관심사 혹은 취미활동들을 어느 정도 다룰 수 있나요?</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="space-y-4 mb-8">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => setSkillLevel(option.value)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
              skillLevel === option.value
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
          disabled={!skillLevel}
        >
          다음
        </Button>
      </div>
    </div>
  )
}