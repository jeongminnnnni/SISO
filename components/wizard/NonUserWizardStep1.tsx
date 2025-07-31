"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { useWizard } from "@/contexts/WizardContext"
import { Button } from "@/components/ui/button"
import { administrativeDivisions, AdministrativeDivision } from "@/lib/koreanAdministrativeDivisions"

interface NonUserWizardStep1Props {
  onNext: () => void
}

export default function NonUserWizardStep1({ onNext }: NonUserWizardStep1Props) {
  const { wizardData, updateWizardData } = useWizard()
  const [selectedCity, setSelectedCity] = useState(wizardData.location?.city || "")
  const [selectedDistrict, setSelectedDistrict] = useState(wizardData.location?.district || "")
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(wizardData.location?.neighborhood || "")

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value)
    setSelectedDistrict("")
    setSelectedNeighborhood("")
  }

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrict(e.target.value)
    setSelectedNeighborhood("")
  }

  const handleNeighborhoodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNeighborhood(e.target.value)
  }

  const handleNext = () => {
    updateWizardData({
      location: {
        city: selectedCity,
        district: selectedDistrict,
        neighborhood: selectedNeighborhood,
      },
    })
    onNext()
  }

  const currentCity = administrativeDivisions.find((ad) => ad.name === selectedCity)
  const currentDistrict = currentCity?.subdivisions?.find((d) => d.name === selectedDistrict)

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">거주지. 어디에 살고 있으신가요?</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="mb-8">
        <p className="text-lg text-gray-700 mb-6">
          "저는 <span className="font-semibold">{selectedCity || "시·도"}</span>{" "}
          <span className="font-semibold">{selectedDistrict || "시·구·군"}</span>{" "}
          <span className="font-semibold">{selectedNeighborhood || "동·읍·면"}</span> 에 살아요."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">시·도</option>
            {administrativeDivisions.map((ad) => (
              <option key={ad.name} value={ad.name}>
                {ad.name}
              </option>
            ))}
          </select>

          <select
            value={selectedDistrict}
            onChange={handleDistrictChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={!selectedCity}
          >
            <option value="">시·구·군</option>
            {currentCity?.subdivisions?.map((d) => (
              <option key={d.name} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>

          <select
            value={selectedNeighborhood}
            onChange={handleNeighborhoodChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={!selectedDistrict}
          >
            <option value="">동·읍·면</option>
            {currentDistrict?.subdivisions?.map((n) => (
              <option key={n.name} value={n.name}>
                {n.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleNext}
          disabled={!selectedCity || !selectedDistrict || !selectedNeighborhood}
        >
          다음
        </Button>
      </div>
    </div>
  )
}