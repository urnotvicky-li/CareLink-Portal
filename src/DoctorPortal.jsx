import Sidebar from "./components/Doctor/Sidebar";
import Header from "./components/Doctor/Header";
import BPChart from "./components/Doctor/BPChart";
import MedicationList from "./components/Doctor/MedicationList";
import MedicationCalendar from "./components/Doctor/MedicationCalendar";
import NotesSection from "./components/Doctor/NotesSection";
import FilesSection from "./components/Doctor/FilesSection";
import "./Doctor.css";

export default function DoctorPortal() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">
          <div className="left-panel">
            {/* Current Conditions - Top Section */}
            <div className="current-conditions">
              <BPChart />
            </div>

            {/* Bottom Section - Medication List and Calendar */}
            <div className="medication-section">
              <div className="medication-left">
                <MedicationList />
              </div>
              <div className="medication-right">
                <MedicationCalendar />
              </div>
            </div>
          </div>

          {/* Right Panel - Only Notes and Files */}
          <div className="right-panel">
            <NotesSection />
            <FilesSection />
          </div>
        </div>
      </div>
    </div>
  );
}
