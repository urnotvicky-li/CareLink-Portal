// src/components/MedicationCalendar.jsx

export default function MedicationCalendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  // Calendar data with dates - 21 days (3 weeks), with some missing days
  const calendarData = [
    // Week 1 (May 1-7)
    { status: "taken", date: 1 },
    { status: "taken", date: 2 },
    { status: "taken", date: 3 },
    { status: "taken", date: 4 },
    { status: "taken", date: 5 },
    { status: "taken", date: 6 },
    { status: "taken", date: 7 },
    // Week 2 (May 8-14)
    { status: "taken", date: 8 },
    { status: "taken", date: 9 },
    { status: "taken", date: 10 },
    { status: "missing", date: 11 }, // missing
    { status: "missing", date: 12 }, // missing
    { status: "taken", date: 13 },
    { status: "taken", date: 14 },
    // Week 3 (May 15-21)
    { status: "taken", date: 15 },
    { status: "taken", date: 16 },
    { status: "taken", date: 17 },
    { status: "taken", date: 18 },
    { status: "taken", date: 19 },
    { status: "missing", date: 20 }, // missing
    { status: "taken", date: 21 },
  ];

  return (
    <div className="medication-calendar">
      <div className="calendar-header-section">
        <h3>Medication Intake</h3>
        <div className="medication-adherence">
          <span>Medication Adherence</span>
          <span className="status good">Good</span>
        </div>
      </div>

      <div className="calendar-container">
        <div className="calendar-month">
          <h4>May 2025</h4>
        </div>

        <div className="calendar-header">
          {days.map((day, index) => (
            <div key={index} className="day-header">
              {day}
            </div>
          ))}
        </div>

        <div className="doctor-calendar-grid">
          {calendarData.map((item, index) => (
            <div key={index} className={`calendar-cell ${item.status}`}>
              <span className="date-number">{item.date}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="missing-intake">
        <span className="days-count">3 DAYS</span>
        <span className="missing-text">Missing Medication Intake</span>
        <button className="send-reminder">Send Reminder</button>
      </div>
    </div>
  );
}
