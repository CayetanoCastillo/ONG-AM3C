import React, { useState, useEffect } from 'react';
import './calendario.css';

const Calendario: React.FC = () => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [days, setDays] = useState<(number | null)[]>([]);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  useEffect(() => {
    generateCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  const generateCalendar = (month: number, year: number) => {
    const daysInMonth = getTotalDays(month, year);
    const startDayOfWeek = startDay(month, year);
    const calendarDays: (number | null)[] = [];

    // Agregar espacios en blanco para los días del mes anterior
    for (let i = 0; i < startDayOfWeek; i++) {
      calendarDays.push(null);
    }

    // Agregar los días del mes actual
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
    setSelectedDay(null); // Reset selected day when changing month
  };

  const handleNextMonth = () => {
    if (currentMonth !== 11) {
      setCurrentMonth(currentMonth + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    }
    setSelectedDay(null); // Reset selected day when changing month
  };

  return (
    <>
      <h1>Actividades y Encuentros para Crecer Juntas</h1>
      <h2>¿Qué pasa este mes en AM3C?</h2>
      <div className='calendar_container'>
        <div className='calendar_box '>
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
                if (day === null) {
                  return <div key={index} className="calendar__date calendar__item calendar__empty"></div>;
                }

                const isCurrentDay = day === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear();
                const isSelectedDay = day === selectedDay;
                return (
                  <div
                    key={index}
                    className={`calendar__date calendar__item ${isSelectedDay ? 'calendar__selected' : ''}`}
                    onClick={() => setSelectedDay(day)}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>

          <div className='calendar_details'>
            {selectedDay ? (
              <div className='calendar_details_text'>
                <h3>Información del {selectedDay} de {monthNames[currentMonth]} {currentYear}</h3>
                <p>Aquí puedes añadir información o eventos relacionados con este día.</p>
              </div>
            ) : (
              <div className='calendar_details_text'>
                <p>Selecciona un día para ver más detalles.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendario;