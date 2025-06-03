import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MedicationSchedule from "./MedicationSchedule";
import BloodPressure from "./BloodPressure";
import SuggestionsPanel from "./SuggestionPanel";
import PrescriptionDetails from "./PrescriptionDetails";
import { useWeeklyIntakeStatus } from "./hooks";

export default function Dashboard() {
  const { intakeByWeekday, todayWeekday } = useWeeklyIntakeStatus();
  const [showModal, setShowModal] = useState(false);

  const pillMissedToday =
    intakeByWeekday && todayWeekday && !intakeByWeekday[todayWeekday];

  useEffect(() => {
    if (pillMissedToday) {
      setShowModal(true);
    }
  }, [pillMissedToday]);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header pillMissedToday={pillMissedToday} />
        <div className="dashboard-content">
          <MedicationSchedule />
          <div className="bottom-section">
            <BloodPressure />
            <div className="right-panel">
              <SuggestionsPanel />
              <PrescriptionDetails />
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="modal-title">💊 Pill Reminder</h2>
            <p className="modal-message">
              You haven't taken your medication today. Please stay on track.
            </p>
            <button
              className="modal-button"
              onClick={() => setShowModal(false)}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
