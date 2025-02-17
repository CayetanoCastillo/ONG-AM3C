import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './calendario.css';
import { Helmet } from 'react-helmet';

const Calendario = () => {
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [days, setDays] = useState<(number | null)[]>([]);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>(() => {
    return JSON.parse(localStorage.getItem('calendarNotes') || '{}');
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    generateCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  useEffect(() => {
    localStorage.setItem('calendarNotes', JSON.stringify(notes));
  }, [notes]);

  const generateCalendar = (month: number, year: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDayOfWeek = new Date(year, month, 1).getDay();
    const calendarDays: (number | null)[] = Array(startDayOfWeek === 0 ? 6 : startDayOfWeek - 1).fill(null);
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(i);
    }
    setDays(calendarDays);
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) setCurrentYear((prev) => prev - 1);
    setSelectedDay(null);
    setInputValue('');
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) setCurrentYear((prev) => prev + 1);
    setSelectedDay(null);
    setInputValue('');
  };

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
    const key = `${currentYear}-${currentMonth}-${day}`;
    setInputValue(notes[key] || '');
  };

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const saveNote = () => {
    if (selectedDay !== null) {
      const key = `${currentYear}-${currentMonth}-${selectedDay}`;
      setNotes((prev) => ({ ...prev, [key]: inputValue }));
    }
  };

  return (
    <div className='calendario'>
      <h1>Actividades y Encuentros para Crecer Juntas</h1>
      <h2>¿Qué pasa este mes en AM3C?</h2>
      <div className='calendar_container'>
        <div className='calendar_box'>
          <div className="calendar">
            <div className="calendar__info">
              <div className="calendar__prev" onClick={handlePrevMonth}>&#9664;</div>
              <div className="calendar__month">{monthNames[currentMonth]}</div>
              <div className="calendar__year">{currentYear}</div>
              <div className="calendar__next" onClick={handleNextMonth}>&#9654;</div>
            </div>
            <div className="calendar__week">
              <div className="calendar__day calendar__item">Lun</div>
              <div className="calendar__day calendar__item">Mar</div>
              <div className="calendar__day calendar__item">Mie</div>
              <div className="calendar__day calendar__item">Jue</div>
              <div className="calendar__day calendar__item">Vie</div>
              <div className="calendar__day calendar__item">Sab</div>
              <div className="calendar__day calendar__item">Dom</div>
            </div>
            <div className="calendar__dates">
              {days.map((day, index) => {
                const key = `${currentYear}-${currentMonth}-${day}`;
                return (
                  <div
                    key={index}
                    className={`calendar__date calendar__item ${selectedDay === day ? 'calendar__selected' : ''} ${notes[key] ? 'calendar__marked' : ''} ${day === null ? 'calendar__disabled' : ''}`}
                    onClick={day !== null ? () => handleDayClick(day) : undefined}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
          <div className='calendar_details'>
            <div className='calendar_details_text'>
              {selectedDay ? (
                <>
                  <h3>Información del {selectedDay} de {monthNames[currentMonth]} {currentYear}</h3>
                  <textarea value={inputValue} onChange={handleNoteChange} placeholder="Escribe aquí..." />
                  <button onClick={saveNote}>Guardar</button>
                </>
              ) : (
                <>
                  <h3>Detalles del día</h3>
                  <p>Selecciona un día para ver más información.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <h2><Link className='calendario' to="/contacto">Reserva tu lugar en nuestra próxima actividad</Link></h2>
    </div>
  );
};

export default Calendario;
