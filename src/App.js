// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorPortal from "./DoctorPortal";        // 直接从根目录导入
import PatientPortal from "./PatientPortal";      // 直接从根目录导入

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/doctor/*" element={<DoctorPortal />} />
          <Route path="/patient/*" element={<PatientPortal />} />
          <Route path="/" element={<div>Welcome! Choose Doctor or Patient portal</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;