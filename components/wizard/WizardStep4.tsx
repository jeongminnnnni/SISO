'use client';

import { useState } from 'react';
import { useWizard } from '@/contexts/WizardContext';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import { X } from 'lucide-react';

interface WizardStep4Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function WizardStep4({ onNext, onPrev }: WizardStep4Props) {
  const { wizardData, updateWizardData } = useWizard();
  // @ts-ignore
  const [dateRange, setDateRange] = useState<DateRange | undefined>(wizardData.schedule?.dateRange);

  const handleNext = () => {
    updateWizardData({ schedule: { ...wizardData.schedule, dateRange } });
    onNext();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">언제 여행을 떠나시나요?</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="flex justify-center mb-8">
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={2}
          disabled={{ before: new Date() }}
        />
      </div>

      <div className="flex justify-between">
        <Button onClick={onPrev} variant="outline">
          이전
        </Button>
        <Button onClick={handleNext} disabled={!dateRange?.from || !dateRange?.to}>
          다음
        </Button>
      </div>
    </div>
  );
}