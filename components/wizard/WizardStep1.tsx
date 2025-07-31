"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { administrativeDivisions, AdministrativeDivision } from "@/lib/koreanAdministrativeDivisions"

interface WizardStep1Props {
  onNext: () => void
  onUpdate: (data: any) => void
  data: any
}

export default function WizardStep1({ onNext, onUpdate, data }: WizardStep1Props) {
  const [selectedCity, setSelectedCity] = useState(data.location?.city || "")
  const [selectedDistrict, setSelectedDistrict] = useState(data.location?.district || "")
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(data.location?.neighborhood || "")

  const [districts, setDistricts] = useState<AdministrativeDivision[]>([])
  const [neighborhoods, setNeighborhoods] = useState<AdministrativeDivision[]>([])

  useEffect(() => {
    const cityData = administrativeDivisions.find(ad => ad.name === selectedCity)
    if (cityData && cityData.subdivisions) {
      setDistricts(cityData.subdivisions)
    } else {
      setDistricts([])
    }
    setSelectedDistrict("")
    setSelectedNeighborhood("")
  }, [selectedCity])

  useEffect(() => {
    const districtData = districts.find(ad => ad.name === selectedDistrict)
    if (districtData && districtData.subdivisions) {
      setNeighborhoods(districtData.subdivisions)
    } else {
      setNeighborhoods([])
    }
    setSelectedNeighborhood("")
  }, [selectedDistrict, districts])

  const handleNext = () => {
    onUpdate({
      location: {
        city: selectedCity,
        district: selectedDistrict,
        neighborhood: selectedNeighborhood,
      },
    })
    onNext()
  }

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
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">시·도</option>
            {administrativeDivisions.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>

          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={!selectedCity}
          >
            <option value="">시·구·군</option>
            {districts.map((district) => (
              <option key={district.name} value={district.name}>
                {district.name}
              </option>
            ))}
          </select>

          <select
            value={selectedNeighborhood}
            onChange={(e) => setSelectedNeighborhood(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={!selectedDistrict}
          >
            <option value="">동·읍·면</option>
            {neighborhoods.map((neighborhood) => (
              <option key={neighborhood.name} value={neighborhood.name}>
                {neighborhood.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={!selectedCity || !selectedDistrict || !selectedNeighborhood}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          다음
        </button>
      </div>
    </div>
  )
}
