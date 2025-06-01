import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorPortal from "./DoctorPortal";
import PatientPortal from "./PatientPortal";
// import LandingPage from "./Landing";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/doctor/*" element={<DoctorPortal />} />
        <Route path="/patient/*" element={<PatientPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
