import React, { useState, useEffect } from 'react';
import './calendario.css';

const Calendario: React.FC = () => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [days, setDays] = useState<number[]>([]);

  useEffect(() => {
    generateCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  const generateCalendar = (month: number, year: number) => {
    const daysInMonth = getTotalDays(month, year);
    const startDayOfWeek = startDay(month, year);
    const prevMonthDays = getTotalDays(month === 0 ? 11 : month - 1, year);

    let calendarDays: number[] = [];

    // Fill in previous month's last days
    for (let i = startDayOfWeek; i > 0; i--) {
      calendarDays.push(prevMonthDays - (i - 1));
    }

    // Current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(i);
    }

    setDays(calendarDays);
  };

  const getTotalDays = (month: number, year: number): number => {
    if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
      return 31;
    } else if (month === 3 || month === 5 || month === 8 || month === 10) {
      return 30;
    } else {
      return isLeap(year) ? 29 : 28;
    }
  };

  const isLeap = (year: number): boolean => {
    return ((year % 100 !== 0) && (year % 4 === 0)) || (year % 400 === 0);
  };

  const startDay = (month: number, year: number): number => {
    const start = new Date(year, month, 1);
    return (start.getDay() === 0 ? 6 : start.getDay() - 1);
  };

  const handlePrevMonth = () => {
    if (currentMonth !== 0) {
      setCurrentMonth(currentMonth - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth !== 11) {
      setCurrentMonth(currentMonth + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    }
  };

  return (
    <>
      <h1>Actividades y Encuentros para Crecer Juntas</h1>
      <h2>¿Qué pasa este mes en AM3C?</h2>
      <div className='calendar_box'>


        <div className="calendar">
          <div className="calendar__info">
            <div className="calendar__prev" onClick={handlePrevMonth}>&#9664;</div>
            <div className="calendar__month">{monthNames[currentMonth]}</div>
            <div className="calendar__year">{currentYear}</div>
            <div className="calendar__next" onClick={handleNextMonth}>&#9654;</div>
          </div>

          <div className="calendar__week">
            <div className="calendar__day calendar__item">Mon</div>
            <div className="calendar__day calendar__item">Tue</div>
            <div className="calendar__day calendar__item">Wed</div>
            <div className="calendar__day calendar__item">Thu</div>
            <div className="calendar__day calendar__item">Fri</div>
            <div className="calendar__day calendar__item">Sat</div>
            <div className="calendar__day calendar__item">Sun</div>
          </div>

          <div className="calendar__dates">
            {days.map((day, index) => {
              const isCurrentDay = day === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear();
              return (
                <div key={index} className={`calendar__date calendar__item ${isCurrentDay ? 'calendar__today' : ''}`}>
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendario;