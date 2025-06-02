// src/components/Patient/Dashboard.jsx
import Header from './Header';
import Sidebar from './Sidebar';
import MedicationSchedule from './MedicationSchedule';
import BloodPressure from './BloodPressure';
import SuggestionsPanel from './SuggestionPanel';
import PrescriptionDetails from './PrescriptionDetails';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <div className="main-content">
        <Header />
        
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
    </div>
  );
}