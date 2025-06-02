// src/components/Patient/WeeklyCalendar.jsx

export default function WeeklyCalendar() {
  const weekDays = [
    { day: 'MON', completed: true },
    { day: 'TUE', completed: true },
    { day: 'WED', completed: false },
    { day: 'THU', completed: false },
    { day: 'FRI', completed: false },
    { day: 'SAT', completed: false },
    { day: 'SUN', completed: false }
  ];

  return (
    <div className="weekly-calendar">
      <div className="calendar-grid">
        {weekDays.map((dayInfo, index) => (
          <div key={index} className="calendar-day">
            <div className="day-label">{dayInfo.day}</div>
            <div className={`day-indicator ${dayInfo.completed ? 'completed' : 'pending'}`}>
              {dayInfo.completed ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <div className="pending-circle"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}