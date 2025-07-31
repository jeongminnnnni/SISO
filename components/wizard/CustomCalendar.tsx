'use client';

import React, { useState, useEffect } from 'react';
import { DateRange } from 'react-day-picker';

interface CustomCalendarProps {
  initialDate?: Date;
  onRangeChange: (range: DateRange | undefined) => void;
}

export default function CustomCalendar({ initialDate = new Date(), onRangeChange }: CustomCalendarProps) {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>(undefined);

  useEffect(() => {
    onRangeChange(selectedRange);
  }, [selectedRange, onRangeChange]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstDayOfWeek = firstDay.getDay();
  const daysInMonth = lastDay.getDate();

  const prevMonthLastDay = new Date(year, month, 0).getDate();
  const prevMonthDays = Array.from({ length: firstDayOfWeek }, (_, i) => prevMonthLastDay - firstDayOfWeek + 1 + i);

  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const totalCells = prevMonthDays.length + currentMonthDays.length;
  const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  const nextMonthDays = Array.from({ length: remainingCells }, (_, i) => i + 1);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(year, month, day);
    if (!selectedRange?.from || (selectedRange.from && selectedRange.to)) {
      setSelectedRange({ from: clickedDate, to: undefined });
    } else if (selectedRange.from && !selectedRange.to) {
      if (clickedDate > selectedRange.from) {
        setSelectedRange({ from: selectedRange.from, to: clickedDate });
      } else {
        setSelectedRange({ from: clickedDate, to: undefined });
      }
    }
  };

  const getDayClassName = (day: number) => {
    const date = new Date(year, month, day);
    let className = 'text-center py-2 text-sm cursor-pointer rounded-full';
    if (!selectedRange) return className + ' hover:bg-gray-100';

    const { from, to } = selectedRange;
    if (from && to) {
      if (date > from && date < to) className += ' bg-blue-100 text-blue-700';
      if (date.getTime() === from.getTime()) className += ' bg-blue-600 text-white rounded-r-none';
      if (date.getTime() === to.getTime()) className += ' bg-blue-600 text-white rounded-l-none';
    } else if (from) {
      if (date.getTime() === from.getTime()) className += ' bg-blue-600 text-white';
      else className += ' hover:bg-gray-100';
    }
    return className;
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevMonth} className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h2 className="text-lg font-semibold">{currentDate.toLocaleString('default', { month: 'long' })} {year}</h2>
        <button onClick={handleNextMonth} className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-500 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {prevMonthDays.map(day => <div key={`prev-${day}`} className="text-center py-2 text-gray-300 text-sm">{day}</div>)}
        {currentMonthDays.map(day => <div key={`curr-${day}`} className={getDayClassName(day)} onClick={() => handleDateClick(day)}>{day}</div>)}
        {nextMonthDays.map(day => <div key={`next-${day}`} className="text-center py-2 text-gray-300 text-sm">{day}</div>)}
      </div>
    </div>
  );
}
