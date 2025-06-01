import Sidebar from "./components/Doctor/Sidebar";
import Header from "./components/Doctor/Header";
import BPChart from "./components/Doctor/BPChart";
import MedicationList from "./components/Doctor/MedicationList";
import MedicationCalendar from "./components/Doctor/MedicationCalendar";
import NotesSection from "./components/Doctor/NotesSection";
import FilesSection from "./components/Doctor/FilesSection";
import "./App.css";

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
              <div className="conditions-header">
                <h3>Current Conditions</h3>
                <div className="weekly-info">
                  <span className="weekly-label">Weekly</span>
                  <span className="date-range">May 1 - 7, 2025</span>
                </div>
              </div>

              <div className="tabs">
                <button className="tab active">Blood Pressure</button>
                <button className="tab">Other Monitoring Data</button>
              </div>

              <div className="chart-section">
                <div className="chart-info">
                  <span className="chart-label">SYS NA - DIA NA</span>
                </div>
                <BPChart />
              </div>
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