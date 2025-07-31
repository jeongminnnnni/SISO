'use client';

import { useState } from 'react';
import { useWizard } from '@/contexts/WizardContext';
import { Button } from '@/components/ui/button';
import CustomCalendar from './CustomCalendar'; // 수정된 부분
import { DateRange } from 'react-day-picker';
import { X } from 'lucide-react';

interface NonUserWizardStep4Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function NonUserWizardStep4({ onNext, onPrev }: NonUserWizardStep4Props) {
  const { wizardData, updateWizardData } = useWizard();

  // CustomCalendar로부터 날짜 범위를 받기 위한 상태
  const [dateRange, setDateRange] = useState<DateRange | undefined>(wizardData.schedule?.dateRange);

  const [departureTime, setDepartureTime] = useState(wizardData.schedule?.departureTime || '12:30');
  const [arrivalTime, setArrivalTime] = useState(wizardData.schedule?.arrivalTime || '22:30');
  const [peopleCount, setPeopleCount] = useState(wizardData.schedule?.peopleCount || 2);
  const [selectedRegions, setSelectedRegions] = useState(wizardData.schedule?.regions || ['부산']);

  const regions = ['부산', '울산', '어디나'];

  const toggleRegion = (region: string) => {
    setSelectedRegions((prev) => (prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]));
  };

  const handleNext = () => {
    updateWizardData({
      schedule: {
        dateRange,
        departureTime,
        arrivalTime,
        peopleCount,
        regions: selectedRegions,
      },
    });
    onNext();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">일정. 언제, 어디로, 몇명이서 갈까요?</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="flex justify-center">
          {/* CustomCalendar 컴포넌트 사용 */}
          <CustomCalendar onRangeChange={setDateRange} />
        </div>

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
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
              >
                -
              </Button>
              <span className="text-xl font-semibold">{peopleCount}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPeopleCount(peopleCount + 1)}
              >
                +
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">가고 싶은 지역</h4>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <Button
                  key={region}
                  variant={selectedRegions.includes(region) ? 'default' : 'outline'}
                  onClick={() => toggleRegion(region)}
                >
                  {region}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button onClick={onPrev} variant="default">
          이전
        </Button>
        <Button
          onClick={handleNext}
          disabled={!dateRange?.from || !dateRange?.to || selectedRegions.length === 0}
        >
          분석하기
        </Button>
      </div>
    </div>
  );
}