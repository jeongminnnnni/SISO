'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';

export default function TestCalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-24 bg-gray-50">
      <h1 className="text-2xl font-bold">달력 컴포넌트 테스트 페이지</h1>
      <p className="text-gray-600">만약 아래 달력이 정상적으로 보인다면, 문제는 마법사 환경 내부에 있습니다.</p>
      <div className="rounded-md border bg-white shadow">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
        />
      </div>
    </div>
  );
}
